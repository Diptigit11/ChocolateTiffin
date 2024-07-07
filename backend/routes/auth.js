import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchuser from '../middleware/authMiddleware.js';
import User from '../models/User.js'; // Assuming User.js exports the User model correctly

const router = express.Router();
const JWT_SECRET = 'diptisingh' || process.env.JWT_SECRET;

// ROUTE 1: Create a user using : Post "/api/auth/createuser" . no login required
router.post('/signup', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password of length min 5 char').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    try {
        let user = await User.findOne({ email: req.body.email });            //finds email in db if exist shows error
        if (user) {
            return res.status(400).json({ success, error: "Sorry, a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);                     //add salt to password
        const secPass = await bcrypt.hash(req.body.password, salt); //generate hashed password using password entered by user and salt

        user = await User.create({            //create a user
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        const data = { user: { id: user.id } };     //take out user id from db
        const authtoken = jwt.sign(data, JWT_SECRET);  //generate authtoken
        success = true;
        res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success, error: "Internal Server Error" });
    }
});


// ROUTE 2: Authenticate a user using : Post "/api/auth/login" . no login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),             //.exists checks if the password exists or not
], async (req, res) => {
    let success = false;

    const { email, password } = req.body;                           //taking email and password out of body
    try {                                                                    //checks if user exists or not
        let user = await User.findOne({ email });
        if (!user) {                                                    //if does not exist then shows error
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);        //compare the password entered by user and password stored in db
        if (!passwordCompare) {                                                       //if password doesnt match show error
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const data = {                    //taking out userid from db
            user: {
                id: user.id
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);   //passing userid and secret to verify user
        success = true;
        res.json({ success, authtoken });               //giving response as a success and authtoken

    } catch (error) {         // catch errors
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// ROUTE 3: Get user detail using : Post "/api/auth/getuser" .login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {     // catch errors
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

export default router;
