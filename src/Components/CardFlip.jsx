import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from '/img/f1.png'
import image2 from '/img/f2.png'
import image3 from '/img/f3.png'
import image4 from '/img/f4.png'

const imageUrls = [
 image1,
image2,
image3,
image4, 
"https://31.media.tumblr.com/c28d4c3b90960b34b23d7b9ff075ab8b/tumblr_mgod7ugtRa1rvvqj8o1_500.gif",
"https://33.media.tumblr.com/84a8c46dd70520068d3936a491d8a2d3/tumblr_nq1zo9FLf41u3ihpao1_400.gif",
"https://media1.tenor.com/m/aoPhdNg36nEAAAAd/cake.gif",
"https://25.media.tumblr.com/a00db744a84527047513af5c9fc2635a/tumblr_mj3kpwhvqM1s7rfp1o1_250.gif"
];

const cardDetails = [
  { frontImage: imageUrls[0], frontTitle: "#CraftedWithLove", backImage: imageUrls[4], backText: "Each recipe we create is crafted with our deep passion for baking, ensuring every bite brings joy to our customers' day." },
  { frontImage: imageUrls[1], frontTitle: "#PureIngredients", backImage: imageUrls[5], backText: "We craft our products with wholesome, natural ingredients. Our recipes are inspired by traditional, guaranteeing genuine flavors." },
  { frontImage: imageUrls[2], frontTitle: "#ValueForMoney", backImage: imageUrls[6],  backText: "We work hard to provide the greatest products at fair pricing." },
  { frontImage: imageUrls[3], frontTitle: "#QualityMatters", backImage: imageUrls[7], backText: "Quality is always given top priority, from our ingredients to our kitchen operations and guest services." }
];

const FlipCard = ({ frontImage, frontTitle, backImage, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    
    <div className="w-[300px] h-[250px] rounded-md cursor-pointer m-2" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <motion.div className="flip-card-front w-full h-full bg-cover border-[1px] text-[#682a2a] text-center rounded-lg p-4"
          style={{ backgroundImage: `url(${frontImage})` }}>
          <h1 className="text-xl font-bold">{frontTitle}</h1>
        </motion.div>

        <motion.div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4"
          style={{ backgroundImage: `url(${backImage})` }}>
          <p>{backText}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CardFlip = () => {
  return (
    <div>
            <h1 className="text-3xl md:text-4xl font-bold flex item-center justify-center m-4 p-4 text-brown-700 mb-4 animate-fadeIn">Value we provide</h1>
    <div className="flex flex-wrap justify-center mt-2 mb-5">
      
      {cardDetails.map((card, index) => (
        <div className="flex-1 flex justify-center" key={index}>
          <FlipCard
            frontImage={card.frontImage}
            frontTitle={card.frontTitle}
            backImage={card.backImage}
            backText={card.backText}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardFlip;
