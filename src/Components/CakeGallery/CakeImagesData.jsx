// CakeImagesData.js
//NOTE: Design and icing of cake may vary from the image shown here since each chef has his/her own way of baking and designing a cake.
import image1 from '/img/Rose_Falooda.jpeg';
import image2 from '/img/MangoCakes.jpeg';
import imag3 from '/img/Pineapple.jpeg';
import image4 from '/img/Chocochips.jpeg'
import image5 from '/img/Ferrero.jpeg'
import image6 from '/img/oreo.jpeg'
import image7 from '/img/fruit.jpeg'
import image8 from '/img/overlaod.jpeg'
import image9 from '/img/caramel.jpeg'


export const CakeImageData = [
  {
    id: 1,
    src: "https://www.fnp.com/images/pr/l/v200/black-forest-cake-half-kg_1.jpg",
    caption: "Black Forest Cake",
    name: "Black Forest Cake",
    description: "A Black Forest cake is a delicious dessert with layers of chocolate cake, whipped cream, and cherries. It's topped with more whipped cream, chocolate shavings, and cherries, making it a tasty and pretty treat.",
    weightOptions: [
      { weight: "250g", price: 180 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 2,
    src: image1,
    caption: "Rose Falooda Cake",
    name: "Rose Falooda Cake",
    description: "A delightful cake with layers of soft sponge infused with rose syrup, topped with a creamy falooda mixture. The cake is decorated with nuts, giving it a fragrant and elegant touch.",
    weightOptions: [
      { weight: "250g", price: 200 },
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1050 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 3,
    src: image2,
    caption: "Mango Cake",
    name: "Mango Delight Cake",
    description: "This tropical cake features layers of moist mango-flavored sponge and smooth mango cream. It's topped with fresh mango slices and a glossy mango glaze, perfect for mango lovers.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 4,
    src: "https://www.fnp.com/images/pr/l/v20221214202702/chocolaty-truffle-cake-half-kg_1.jpg",
    caption: "Chocolate Truffle",
    name: "Chocolate Truffle Cake",
    description: " A rich and decadent cake with multiple layers of dense chocolate sponge and creamy chocolate truffle. It's covered with a glossy chocolate ganache, making it a chocoholic's dream.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 5,
    src: "https://assets.winni.in/product/primary/2024/3/94560.jpeg?dpr=1&w=500",
    caption: "Butterscotch Cream Cake",
    name: "Butterscotch Bliss Cream Cake",
    description: " A sweet and buttery cake with layers of butterscotch-flavored sponge and creamy butterscotch frosting. It's topped with crunchy butterscotch chips and ganache.",
    weightOptions: [
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 6,
    src: "https://th.bing.com/th?id=OPAC.8AphQTaQlORGKg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    caption: "Strawberry Cake",
    name: "Strawberry Bliss Cake",
    description: "A delightful cake with layers of strawberry-flavored sponge and creamy strawberry frosting. It's topped with chocolate garnish and a light strawberry glaze.",
    weightOptions: [
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 7,
    src: "https://assets.winni.in/product/primary/2024/3/94564.jpeg?dpr=1&w=5003",
    caption: "Chocolate Crunch Cake",
    name: "Chocolate Crunch Cake",
    description: "This cake combines the richness of chocolate with the crunch of choco chips and butterscotch nuts. Each bite offers a delightful contrast of smooth and crunchy textures.",
    weightOptions: [
      { weight: "1/2 kg", price: 380 },
      { weight: "1 kg", price: 750 },
      { weight: "2 kg", price: 1500 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 8,
    src: "https://assets.winni.in/product/primary/2021/8/53281.jpeg?dpr=1&w=500",
    caption: "Rasmalai Cake",
    name: "Rasmalai Cake",
    description: "A fusion dessert combining the richness of rasmalai with a soft sponge cake. The layers are soaked in sweetened milk and topped with creamy rasmalai pieces and nuts, offering a delicious blend of flavors and textures.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 9,
    src: "https://assets.winni.in/product/primary/2024/3/94572.jpeg?dpr=1&w=600",
    caption: "Red Velvet Cake",
    name: "Red Velvet Cake",
    description: " A visually stunning cake with vibrant red layers and a slight cocoa flavor. It's frosted with smooth cream cheese frosting, creating a perfect balance of sweetness and tanginess.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 10,
    src: image6,
    caption: "Oreo Chocolate Cake",
    name: "Oreo Chocolate Cake",
    description: " A chocolate cake filled with crushed Oreo cookies and topped with Oreo-infused cream. The cake is decorated with Oreos and chocolate garnish spreaded with oreo , offering a crunchy and creamy experience in every bite.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1000 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 11,
    src: "https://assets.winni.in/product/primary/2024/3/94579.jpeg?dpr=1&w=400",
    caption: "Vanilla Cake",
    name: "Vanilla Cake",
    description: "A simple yet elegant vanilla cake with layers of moist sponge and smooth vanilla frosting topped with colorful sprinkles. It's a timeless classic that's perfect for any celebration.",
    weightOptions: [
      { weight: "250g", price: 180 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 12,
    src: "https://assets.winni.in/product/primary/2024/3/94574.jpeg?dpr=1&w=500",
    caption: "Choco Vanilla Cream Cake",
    name: "Choco Vanilla Cream Cake",
    description: "A delightful cake that combines the best of both worlds with layers of rich chocolate sponge and fluffy vanilla sponge. This cake is filled and frosted with a smooth blend of chocolate and vanilla cream. The top is beautifully garnished with chocolate curls and vanilla swirls that satisfies both chocolate and vanilla lovers.",
    weightOptions: [
      { weight: "1/2 kg", price: 380 },
      { weight: "1 kg", price: 760 },
      { weight: "1.5 kg", price: 1100 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 13,
    src: "https://assets.winni.in/product/primary/2024/3/94612.jpeg?dpr=1&w=500",
    caption: "Classic Chocolate Cake",
    name: "Classic Chocolate Cake",
    description: "A timeless dessert with layers of moist chocolate sponge and smooth chocolate frosting. Simple yet delicious, it's a favorite for any chocolate lover.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 14,
    src: "https://assets.winni.in/product/primary/2024/3/94575.jpeg?dpr=1&w=500",
    caption: "White Forest Cake",
    name: "White Forest Cake",
    description: " A twist on the classic Black Forest, this cake features white chocolate sponge layers, creamy frosting, and tart cherries. It's topped with white chocolate shavings and more cherries.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1050 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 15,
    src: "https://assets.winni.in/product/primary/2014/6/33659.jpeg?dpr=1&w=400",
    caption: "BlueBerry Cake",
    name: "BlueBerry Dream Cake",
    description: "This cake features layers of blueberry-flavored sponge and creamy frosting. It's topped with blueberries and a blueberry sauce, offering a burst of fruity flavor.",
    weightOptions: [
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 16,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-chocolate-almond-cake-half-kg--67974-m.jpg",
    caption: "Chocolate Almond Cake",
    name: "Chocolate Almond Cake",
    description: "A rich chocolate cake with crunchy almond pieces throughout. It's topped with chocolate frosting and more almonds, offering a delightful combination of flavors and textures.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 17,
    src: "https://bkmedia.bakingo.com/chocolate-mud-cake0035choc-AA.jpg",
    caption: "Chocolate Mud Cake",
    name: "Chocolate Mud Cake",
    description: "A dense and fudgy chocolate cake with a rich chocolate sponge topping. It's spread with a thick layer of chocolate ganache and dust with chocolate sponge , offering an indulgent chocolate experience.",
    weightOptions: [
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 18,
    src: imag3,
    caption: "Pineapple Cake",
    name: "Pineapple Paradise Cake",
    description: " A light and refreshing cake with layers of pineapple-flavored sponge and creamy frosting. It's topped with pineapple slices and a cherry, perfect for a tropical treat.",
    weightOptions: [
      { weight: "250g", price: 170 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 19,
    src: image4,
    caption: "Chocochips Cake",
    name: "Chocochips Cake",
    description: "A moist chocolate cake filled with plenty of chocolate chips. It's topped with a rich chocolate frosting and even more choco chips, making it perfect for chocolate lovers.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 20,
    src: image5,
    caption: "Ferrero Rocher Cake",
    name: "Ferrero Rocher Cake",
    description: " A luxurious cake with layers of  chocolate sponge and creamy frosting, topped with Ferrero Rocher chocolates. It's a perfect combination of crunchy and creamy textures.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 21,
    src: image7,
    caption: "Mix Fruit Cake",
    name: "Mix Fruit Cake",
    description: " A light and airy cake topped with a variety of fresh fruits like kiwi, mango, apples , tangerine , strawberries, and grapes. It's a refreshing dessert perfect for any occasion.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 22,
    src: image8,
    caption: "Chocolate OverLoad Cake",
    name: "Chocolate OverLoad Cake",
    description: " A chocolate lover's dream with layers of rich chocolate cake loaded with KitKat, choco chips, Oreos, and gems. It's a delightful overload of chocolatey goodness.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 23,
    src: image9,
    caption: "Caramel Cake",
    name: "Caramel Flavored Cake",
    description: "A sweet and indulgent cake with layers of caramel-flavored sponge and creamy caramel frosting. It's topped with caramel drizzle and toffee bits, making it a caramel lover's dream.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 100,
    rating: 4
  }
];

export const Animal_theme_cakes = [
  {
    id: 24,
    src: "https://bkmedia.bakingo.com/jungle-paradise-theme-cake-them3340flav-A.jpg",
    caption: "Jungle Paradise Theme Cake",
    name: "Jungle Paradise Theme Cake",
    description: "A colorful cake decorated with jungle leaves and animals like elephants and monkeys, perfect for a wild party.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 25,
    src: "https://bkmedia.bakingo.com/jungle-paradise-theme-cake-them3340flav-A.jpg_0.jpg",
    caption: "Zoo Themed Cake",
    name: "Zoo Themed Cake",
    description: "A cake adorned with replicas of various animals such as zebras, lions, and tigers, bringing the zoo to your celebration.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "1.5 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 26,
    src: "https://bkmedia.bakingo.com/lion-safari-theme-cake-phot3847flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Lion Safari Theme Cake",
    name: "Lion Safari Theme Cake",
    description: "This cake features a proud lion  on a savannah landscape with trees, creating an adventurous safari scene.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 27,
    src: 'https://imgcdn.floweraura.com/fun-vibrant-monkey-themed-fondant-cake-9795450ca-A_0.jpg?tr=w-264,dpr-1.5,q-70',
    caption: "Fun Vibrant Monkey Themed Cake",
    name: "Fun Vibrant Monkey Themed Cake",
    description: "This playful cake has three monkeys sitting and making different expression, adding a lively touch to any occasion.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 28,
    src: 'https://imgcdn.floweraura.com/fondant-bamboo-panda-theme-cake-9795480ca-A_0.jpg?tr=w-264,dpr-1.5,q-70',
    caption: "Fondant Bamboo Panda Cake",
    name: "Fondant Bamboo Panda Cake",
    description: "A cake featuring a cute panda surrounded by bamboo shoots, perfect for panda lovers.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 29,
    src: "https://imgcdn.floweraura.com/adorable-lion-king-themed-fondant-cake-9795410ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Adorable Lion King Cake",
    name: "Adorable Lion King Cake",
    description: "Fit for royalty, this cake showcases a majestic lion with golden accents and jungle foliage, embodying the spirit of the lion king.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 30,
    src: "https://imgcdn.floweraura.com/whimsical-monkey-face-themed-designer-cake-9796360ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Monkey Face Design Cake",
    name: "Whimsical Monkey Face Design Cake",
    description: "A cake designed with a large monkey face, detailed with expressive eyes and a mischievous grin, ideal for jungle-themed celebrations.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 31,
    src: "https://imgcdn.floweraura.com/playful-pingu-cake-9799050ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Playful Pingu Cake",
    name: "Playful Pingu Cake",
    description: "The Playful Pingu Cake features a whimsical design inspired by penguins. Adorned with fondant penguins sliding on icy waves, this cake captures the adventurous spirit of Antarctic explorations. ",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 32,
    src: "https://imgcdn.floweraura.com/cheerful-tiger-theme-cake-9795430ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Cheerful Tiger Theme Cake",
    name: "Cheerful Tiger Theme Cake",
    description: "This cake features a tiger with bold stripes and a friendly expression, set amidst trees and foliage, bringing cheer to any celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "2 kg", price: 2200 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 33,
    src: "https://imgcdn.floweraura.com/playful-teddy-bear-cake-9795470ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Playful Teddy Bear Cake",
    name: "Playful Teddy Bear Cake",
    description: "This adorable cake is topped with a teddy bear surrounded by balloons and confetti, perfect for a sweet and playful party.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 34,
    src: "https://imgcdn.floweraura.com/marshmallow-lamb-designer-cake-9796240ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Lamb Chocolate Cream Cake",
    name: "Lamb Chocolate Cream Cake",
    description: " A delightful cake with chocolate sponge layers and creamy chocolate filling, topped with adorable fondant lambs playing amidst green fondant grass, ideal for chocolate lovers and animal enthusiasts alike.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 35,
    src: 'https://imgcdn.floweraura.com/cute-n-lovely-teddy-bear-cake-9795420ca-A_0.jpg?tr=w-264,dpr-1.5,q-70',
    caption: "Cute N Lovely Teddy Bear Cake",
    name: "Cute N Lovely Teddy Bear Cake",
    description: " A charming cake adorned with a fondant teddy bear, surrounded by sweet fondant blankets and cakes, perfect for a heartwarming celebration.",
    weightOptions: [
      { weight: "2 kg", price: 2300 },
      { weight: "3 kg", price: 3600 }
    ],
    reviews: 10,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const Barbie_Cakes = [
  {
    id: 36,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-princess-barbie-cake-3-5-kg--112527-m.jpg",
    caption: "Pink Colored Barbie Cake",
    name: "Pink Colored Barbie Cake",
    description: "A charming cake in pink hues, featuring a Barbie doll topper dressed in elegant attire, perfect for a princess-themed celebration.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300}
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 37,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-icy-dress-barbie-cream-cake-2-kg--119533-m.jpg",
    caption: "Blue Colored Barbie Cake",
    name: "Blue Colored Barbie Cake",
    description: "A delightful cake in shades of blue, showcasing a Barbie doll adorned in a stylish outfit, ideal for a whimsical party.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 38,
    src: "https://imgcdn.floweraura.com/magical-barbie-cake-9775390ca-A_0.jpg",
    caption: "Magical Barbie Cake",
    name: "MagicalThis enchanting cake features a Barbie doll surrounded by sparkling decorations and magical accents, creating a fairy-tale atmosphere for any celebration.",
    weightOptions: [
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 39,
    src: "https://imgcdn.floweraura.com/artistic-barbie-cake-9811210ca-A_0.jpg?tr=w-339,h-339,q-70",
    caption: "Artistic Barbie Cake",
    name: "Artistic Barbie Cake",
    description: " A creatively designed cake with a Barbie doll wearing a unique and artistic ensemble, making it a standout centerpiece at any artistic-themed event.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1400 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 40,
    src: "https://imgcdn.floweraura.com/iconic-barbie-pink-cake-9780160ca-A_0.jpg?tr=w-339,h-339,q-70s",
    caption: "Iconic Barbie Cake",
    name: "Iconic Barbie Pink Cake",
    description: " A classic cake in iconic Barbie pink, showcasing a beautifully dressed Barbie doll picture, perfect for celebrating the timeless elegance of Barbie.",
    weightOptions: [
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const BikeCakes = [
  {
    id: 41,
    src: "https://assets.winni.in/product/primary/2021/8/53393.jpeg?dpr=1&w=500",
    caption: "Rider Fondant Cake",
    name: "Rider Fondant Cake",
    description: " A stunning cake with a fondant figure of a cyclist, capturing the spirit of adventure and the thrill of the ride, ideal for cycling fans and athletes.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 42,
    src: "https://i.pinimg.com/originals/76/c7/24/76c7249094a1dbcf3f21567e7c42f03d.jpg",
    caption: "Bicycle Theme Cake",
    name: "Bicycle Theme Cake",
    description: "A delightful cake designed for cycling enthusiasts, featuring intricate bicycle decorations and vibrant colors, perfect for celebrating a love for biking.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 43,
    src: "https://i.pinimg.com/originals/82/cf/b2/82cfb2d1f16e32ac6079dac58662d4aa.jpg",
    caption: "Bicycle Themed Party Cake",
    name: "Bicycle Themed Party Cake",
    description: " A fun and festive cake adorned with bicycle motifs, ideal for parties and gatherings of cycling enthusiasts, bringing a touch of excitement to the celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 44,
    src: "https://th.bing.com/th/id/OIP.Gl2JWTN2Rq92vtExfZ7jSQAAAA?rs=1&pid=ImgDetMain",
    caption: "Cycling Theme Cake",
    name: "Cycling Theme Cake",
    description: " A beautifully crafted cake celebrating the passion for cycling, decorated with elements like bike wheels, helmets, and cyclist figures, making it perfect for any cycling-themed event.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
 
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const CricketCakes = [
  {
    id:45 ,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-cricket-theme-cake-1-kg--192834-m.jpg",
    caption: "Cricket Theme Cake",
    name: "Cricket Theme Cake",
    description:"A vibrant cake designed for cricket lovers, featuring cricket bats, balls, and wickets, capturing the essence of the sport.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 46,
    src: "https://bkmedia.bakingo.com/cricket-field-cream-n-fondant-cake-them3728flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Cricket Field Cream N Fondant Cake",
    name: "Cricket Field Cream N Fondant Cake",
    description: "A delicious cake with a detailed cricket field made of fondant and creamy layers, perfect for any cricket enthusiast's celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1400 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 47,
    src: "https://bkmedia.bakingo.com/cricket-champion-photo-cake-phot3806flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Cricket Champion Photo Cake",
    name: "Cricket Champion Photo Cake",
    description: "A personalized cake featuring a photo of the cricket champion, making it a memorable treat for any cricket fan.",
    weightOptions: [
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 48,
    src: "https://bkmedia.bakingo.com/cricket-kit-n-pitch-fondant-cake-them3720flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Cricket Kit N Pitch Fondant Cake",
    name: "Cricket Kit N Pitch Fondant Cake",
    description: "An impressive cake showcasing a fondant cricket kit and pitch, ideal for cricket players and fans alike.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 49,
    src: "https://bkmedia.bakingo.com/cream-fondant-cricket-field-cake-them3713flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: " Cricket Field Cake",
    name: "Cream Fondant Cricket Field Cake",
    description: "A delightful cake combining creamy textures and fondant decorations, depicting a cricket field for a sporty celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
 
  {
    id: 50,
    src: " https://bkmedia.bakingo.com/sq-cricket-1-them0082flav-A_0.jpg",
    caption: "Not Out Cake",
    name: "Not Out Cake",
    description: "A fun and creative cake celebrating the excitement of staying not out in cricket, perfect for cricket enthusiasts.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 51,
    src: "https://bkmedia.bakingo.com/cricket-kit-cream-n-fondant-cake-them3746flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Cricket Themed Cake",
    name: "Cricket Themed Cake",
    description: "A cake adorned with various cricket-themed decorations, capturing the spirit of the game for any cricket lover's special occasion.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 52,
    src: "https://bkmedia.bakingo.com/crickmania-photo-cake-phot3803flav-B.jpg",
    caption: "CrickMania Photo Cake",
    name: "CrickMania Photo Cake",
    description: "A unique cake with a custom cricket-themed photo, perfect for showing off your love for the sport and making any celebration extra special.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const CakesForHer = [
  {
    id:53 ,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-special-floral-cake-half-kg--281092-m.jpg",
    caption: "Special Floral Cake",
    name: "Special Floral Cake",
    description:"A beautifully crafted cake adorned with an array of vibrant flowers, perfect for any special occasion.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 54,
    src: "https://th.bing.com/th?id=OPAC.%2fE30mOqrjfdtcw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
    caption: "Cake For Her",
    name: "Cake For Her",
    description: "Celebrate your Mom's Birthday or Anniversary with a delicious flavoured Photo Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1400 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 55,
    src: "https://th.bing.com/th?id=OPAC.%2biG03dRrx%2b5oZw474C474&w=140&h=140&c=17&dpr=1.3&pid=21.1",
    caption: "Floral Fantasy Delight",
    name: "Floral Fantasy Delight",
    description: " A dreamy cake featuring intricate floral designs, ideal for those who appreciate the beauty of flowers.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 56,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-blush-rose-mini-cake-223424-m.jpg",
    caption: "Rose Decor Birthday Cake",
    name: "Rose Decor Birthday Cake",
    description: " A delightful birthday cake decorated with elegant rose patterns, adding a touch of sophistication to the celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 57,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-classic-red-velvet-cake-half-kg--109230-m.jpg",
    caption: " Classic Red Velvet Cake",
    name: "Classic Red Velvet Cake",
    description: "A timeless favorite with rich red velvet layers and creamy frosting, perfect for any classic cake lover.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
 
  {
    id: 58,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-tiny-hearts-chocolate-cake-half-kg--135344-m.jpg",
    caption: "Tiny Hearts Chocolate Cake",
    name: "Tiny Hearts Chocolate Cake",
    description: "A delightful chocolate cake adorned with tiny heart decorations, offering a perfect blend of rich, velvety chocolate and charming aesthetics. Ideal for expressing love and affection on special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 59,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-pink-ombre-mini-cake-223427-m.jpg",
    caption: "Pink Ombre Cake",
    name: "Pink Ombre Cake",
    description: " A stunning cake with gradient pink layers, creating a visually appealing ombre effect, perfect for adding elegance to any event.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 60,
    src: "https://bkmedia.bakingo.com/Rose%20N%20Butterfly%20Designer%20Cake-theme3892flav-A.jpg",
    caption: "Rose N Butterfly Designer Cake",
    name: "Rose N Butterfly Designer Cake",
    description: "A whimsical cake decorated with delicate roses and butterflies, capturing a fairy-tale charm for any special celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 61,
    src: " https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-50cfd96/yummycake.in/wp-content/uploads/2022/09/roses-paradise-chocolate-cake-376x376.webp",
    caption: "Roses Paradise Chocolate Cake",
    name: "Roses Paradise Chocolate Cake",
    description: " A decadent chocolate cake adorned with beautiful rose decorations, creating a paradise for chocolate and floral lovers alike.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
];
export const CakesForHim = [
  {
    id: 610,
    src: "https://bkmedia.bakingo.com/dino-cream-n-sugar-sheet-cake-them3723flav-A.jpg",
    caption: "Dino Cream N Sugar Sheet Cake",
    name: "Dino Cream N Sugar Sheet Cake",
    description: " A fun and whimsical cake featuring dinosaur decorations made of cream and sugar sheets, perfect for a dino-themed party.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 62,
    src: "https://topdreamer.com/wp-content/uploads/2014/10/baby-first-birthday-cake-ideas-for-boys-2-718x717.jpg",
    caption: "First Birthday Cake",
    name: "First Birthday Cake",
    description: "A charming cake designed to celebrate a baby's first birthday, with cute and colorful decorations to mark the milestone.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 63,
    src: "https://topdreamer.com/wp-content/uploads/2014/10/3c3322359b6431d7b573ecd8c14981bf.jpg",
    caption: "Car Themed Cake",
    name: "Car Themed Cake",
    description: "An exciting cake adorned with car decorations, ideal for car enthusiasts of all ages, making any celebration zoom-tastic.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 64,
    src: "https://th.bing.com/th/id/R.cd9a766472c66598434100751a2958cb?rik=%2buRb1PWRTqmcoQ&riu=http%3a%2f%2fmariascakes.co.uk%2fwp-content%2fuploads%2f2017%2f05%2fmensbday12.jpg&ehk=doscfWwvm51U98Duvp5xZjI9Y56FZhiA853Q4AGYyaw%3d&risl=&pid=ImgRaw&r=0",
    caption: "Birthday Cake",
    name: "Birthday Cake",
    description:"A sophisticated cake tailored for a man's birthday, featuring elegant designs and flavors suited to a more mature palate.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
 
  {
    id: 65,
    src: "https://i.pinimg.com/474x/1b/75/01/1b750172a90dbe8844c5e833351ce992.jpg",
    caption: " Chocolate Cake",
    name: " Chocolate Cake",
    description: "A classic and rich chocolate cake, offering layers of moist chocolate goodness, perfect for any chocolate lover's celebration.",
    weightOptions: [
      { weight: "1.5 kg", price: 1400 },
      { weight: "3kg", price: 2800 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 66,
    src: "https://www.bing.com/th?id=OIP.SxJGlmT4bY-yxj4cohzXaQHaIq&w=146&h=171&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    caption: " Cake For Baby Boy",
    name: "Cake For Baby Boy",
    description: " A delightful cake designed for a baby boy, featuring adorable and playful decorations in blue and pastel colors.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 67,
    src: "https://assets.winni.in/product/primary/2021/9/53476.jpeg?dpr=1&w=400",
    caption: "Micky Star Cake",
    name: "Micky Star Vanilla Cake",
    description: " A magical vanilla cake decorated with Mickey Mouse and star designs, perfect for a fun and enchanting birthday celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 68,
    src: "https://assets.winni.in/product/primary/2021/9/53460.jpeg?dpr=1&w=500",
    caption: "Birthday Designer Cake",
    name: "Birthday Designer Cake",
    description: " A creatively designed cake tailored for birthdays, featuring unique and personalized decorations to make the celebration special.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];

export const FrozenThemeCakes = [
  {
    id: 69,
    src: "https://imgcdn.floweraura.com/frozen-fondant-cake-9820230ca-C_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Frozen Cake",
    name: "Frozen Cake",
    description: "A magical cake inspired by the Frozen movie, featuring snowy decorations and icy blue hues, perfect for fans of the beloved film.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 70,
    src: "https://imgcdn.floweraura.com/elsa-frozen-wonderland-cake-9820210ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Elsa Frozen Wonderland Cake",
    name: "Elsa Frozen Wonderland Cake",
    description: " A stunning cake showcasing Elsa in a winter wonderland, adorned with sparkling snowflakes and icy elements, ideal for any Frozen-themed party.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 71,
    src: "https://imgcdn.floweraura.com/princess-anna-9989530cp-AAAA.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Princess Anna Photo Cake",
    name: "Princess Anna Photo Cake",
    description: "A delightful cake featuring a photo of Princess Anna, capturing the adventurous spirit of the character and making any celebration special.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 72,
    src: "https://imgcdn.floweraura.com/dainty-frozen-cream-cake-9820220ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Dainty Frozen Cream Cake",
    name: "Dainty Frozen Cream Cake",
    description:"A charming cake with delicate cream decorations inspired by Frozen, offering a touch of elegance and magic for any event..",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
 
  {
    id: 73,
    src: "https://pic.warmoven.in/catalog/product/cache/e4dbbe88580d6bb18ca174b8700f08f3/image/22119c0e/frozen-elsa-2-tier-custom-cake.jpg",
    caption: "Frozen Elsa 2 Tier Cake",
    name: "Frozen Elsa 2 Tier Cake",
    description: "A breathtaking two-tier cake featuring Elsa and beautiful Frozen-themed decorations, perfect for making a grand statement at any celebration.",
    weightOptions: [
      { weight: "1.5 kg", price: 1400 },
      { weight: "3kg", price: 2800 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 74,
    src: "https://www.fnp.ae/images/pr/l/v20240206130037/princess-elsa-birthday-chocolate-cake-one-kg_1.jpg",
    caption: "Princess Elsa Cake",
    name: "Princess Elsa Birthday Cake",
    description: "A delightful cake featuring a photo of Princess Anna, capturing the adventurous spirit of the character and making any celebration special.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 75,
    src: "https://assets.winni.in/product/primary/2021/9/53476.jpeg?dpr=1&w=400",
    caption: "Micky Star Cake",
    name: "Micky Star Vanilla Cake",
    description: " A magical vanilla cake decorated with Mickey Mouse and star designs, perfect for a fun and enchanting birthday celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 76,
    src: "https://assets.winni.in/product/primary/2021/9/53460.jpeg?dpr=1&w=500",
    caption: "Birthday Designer Cake",
    name: "Birthday Designer Cake",
    description: " A creatively designed cake tailored for birthdays, featuring unique and personalized decorations to make the celebration special.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];



export const GymCakes = [
  {
    id: 77,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-gym-lover-cake-1-kg--192840-m.jpg",
    caption: "Gym Lover Cake",
    name: "Gym Lover Cake",
    description: "A dynamic cake designed for fitness enthusiasts, featuring gym-related decorations like dumbbells and weights, perfect for celebrating a love for working out.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 78,
    src: "https://th.bing.com/th/id/OIP.GnwrV4QoolmPxmSxoHu5KQHaHp?w=193&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Gym Themed Cake",
    name: "Gym Themed Cake",
    description: " A vibrant cake adorned with gym equipment and fitness motifs, ideal for anyone passionate about staying fit and active.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },{
    id: 79,
    src: "https://th.bing.com/th/id/OIP.EoqHMWUO0iCFBBI8aQODTQHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Fitness Freak Cake",
    name: "Fitness Freak  Cake",
    description: "A fun and energetic cake celebrating the dedication of fitness enthusiasts, with decorations inspired by various workout gear and activities.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 80,
    src: "https://th.bing.com/th/id/OIP.5ZtK7oYmfyD8RGXVCPBRBwHaHa?rs=1&pid=ImgDetMain",
    caption: "Birthday Gym Cake",
    name: "Birthday Gym Cake",
    description: "This cake has dominant flavours of chocolate,that you can gift to your fitness freak brother or husband",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
];

export const PinataCakes = [
  {
    id: 81,
    src: "https://bkmedia.bakingo.com/sq-ferrero-rocher-pinata-cake-750gm-pina1810choc-B_1.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Chocolate Pinnata Cake",
    name: "Chocolate Pinnata Cake",
    description: " A delightful cake with a hard chocolate shell filled with surprises, offering a fun and interactive experience for chocolate lovers.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 82,
    src: "https://bkmedia.bakingo.com/sq-birthday-chocolate-overload-pinata-cake-750gm-pina2163choc-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Chocolate Overload Pinata Cake",
    name: "Chocolate Overload Pinata Cake",
    description: "An indulgent pinata cake with a rich chocolate shell packed with an abundance of chocolate treats inside, perfect for chocoholics.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 83,
    src: "https://bkmedia.bakingo.com/sq-heart-shaped-choco-pinata-cake-450-gm-pina2542choc-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Heart Shaped Pinata",
    name: "Heart Shaped Choco Pinata",
    description: "A charming heart-shaped pinata cake, ideal for expressing love and affection on special occasions.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 84,
    src: "https://bkmedia.bakingo.com/sq-choco-panda-round-pinata-cake-700-gm-pina2548choc-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Choco Panda Pinnata Cake",
    name: "Choco Panda Pinnata Cake",
    description: "A cute and whimsical pinata cake with a panda design, filled with chocolate goodies, making it a delightful treat for all ages.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 85,
    src: "https://bkmedia.bakingo.com/sq-unicorn-pineapple-pinata-cake-630gm-pina2064pine-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Unicorn Theme Cake",
    name: "Unicorn Theme Cake",
    description: "A magical pinata cake adorned with unicorn decorations and filled with surprises, perfect for unicorn-themed parties.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1400 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 86,
    src: "https://bkmedia.bakingo.com/sq-chocolatey-spiderman-pinata-cake-750-gm-pina2302choc-A_0.jpg",
    caption: "Spiderman Chocolate Pinata Cake",
    name: "Spiderman Chocolate Pinata Cake",
    description: " An exciting pinata cake featuring Spiderman designs, packed with chocolate surprises, ideal for superhero fans.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 87,
    src: "https://bkmedia.bakingo.com/sq-heart-shaped-chocolate-pinata-cake-for-valentines-day-450-gm-pina2543choc-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Heart Shaped Chocolate Pinata",
    name: "Heart Shaped Chocolate Pinata Cake For Valentines Day",
    description: "A romantic heart-shaped pinata cake with a rich chocolate shell, perfect for celebrating love and special moments.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 88,
    src: "https://bkmedia.bakingo.com/sq-heart-shaped-pineapple-pinata-cake-450gm-pina2155pine-A_0.jpg",
    caption: "Fathers Day Pineapple Pinata Cake",
    name: "Fathers Day Pineapple Pinata Cake",
    description: "A unique pinata cake with a pineapple flavor, designed to celebrate Father's Day with a fun and fruity twist.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
];

export const WeddingCakes = [
  {
    id: 89,
    src: "https://bkmedia.bakingo.com/calming-blooms-cake-them2836flav-A.jpg",
    caption: "2 Tier Cream Cake",
    name: "Two Tier Edible Bloom Bunch Cream Cake",
    description: "A stunning two-tier cake adorned with edible flowers and creamy layers, perfect for adding elegance to any wedding celebration.",
    weightOptions: [
      { weight: "3 kg", price: 3000 },
      { weight: "4 kg", price: 4000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 90,
    src: "https://bkmedia.bakingo.com/romantic-couple-cake-cake2871flav-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Love Filled Cream Cake",
    name: "Love Filled Cream Cake",
    description: "A romantic cake filled with luscious cream and decorated with love-themed elements, ideal for celebrating the union of two hearts.",
    weightOptions: [
      { weight: "3 kg", price: 3000 },
      { weight: "4 kg", price: 4000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 91,
    src: "https://bkmedia.bakingo.com/sq-dainty-pineapple-with-pink-roses-rosecake2558pine-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Zesty Pineapple Cake",
    name: "Zesty Pineapple Cake",
    description: "A refreshing pineapple-flavored cake with a zesty twist, offering a tropical delight for wedding guests.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 92,
    src: "https://bkmedia.bakingo.com/two-tier-white-floral-cake-them2835flav-B_0.jpg",
    caption: "Pearly White Floral Tire Creame Cake",
    name: "Pearly White Floral Tire Creame Cake",
    description: "A beautiful multi-tiered cake featuring pearly white frosting and delicate floral decorations, perfect for a classic wedding.",
    weightOptions: [
      { weight: "4 kg", price: 4000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 93,
    src: "https://bkmedia.bakingo.com/sq-vanilla-strawberry-cake-with-red-carnation-on-top-rosecake2563stra-A_0.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Flowers Topped Vanilla Strawberry Cake",
    name: "Flowers Topped Vanilla Strawberry Cake",
    description: "A delightful cake topped with fresh flowers and layered with vanilla and strawberry flavors, perfect for a sweet and romantic wedding treat.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 94,
    src: "https://bkmedia.bakingo.com/peach-rose-fondant-cake-them2831flav-A.jpg",
    caption: "Peach Rose Fondant Cake",
    name: "Peach Rose Fondant Cake",
    description: "An elegant cake covered in peach-colored fondant and adorned with rose decorations, adding a touch of sophistication to any wedding.",
    weightOptions: [
      { weight: "4 kg", price: 4000 },
      { weight: "5 kg", price: 5000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 95,
    src: "https://bkmedia.bakingo.com/floral-fondant-tier-cake-them2830flav-B.jpg",
    caption: "Floral Fondant Tier Cake",
    name: "Floral Fondant Tier Cake",
    description: "A multi-tiered cake covered in smooth fondant and decorated with intricate floral designs, ideal for a beautiful wedding centerpiece embracing Perfect For Wedding Day",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 96,
    src: "https://bkmedia.bakingo.com/three-tier-fondant-cake-them2834flav-A.jpg",
    caption: "Pearl-Rose Three Tier Fondant Cake",
    name: "Pearl-Rose Three Tier Fondant Cake",
    description: "A luxurious three-tier cake with pearl and rose decorations made of fondant, creating a stunning and elegant dessert for a wedding celebration.",
    weightOptions: [
      { weight: "5 kg", price: 5500 },
      { weight: "6 kg", price: 6700 }
    ],
    reviews: 12,
    rating: 4
  },
];
export const AnniversaryCakes = [
  {
    id: 97,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-hearty-delight-mini-cake-223425-m.jpg",
    caption: "Hearty Delight Cake",
    name: "Hearty Delight Cake",
    description: "A delightful cake crafted to celebrate love, featuring a heart-shaped design and rich flavors, perfect for anniversaries.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 98,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-floral-icing-cake-half-kg--281090-m.jpg",
    caption: "Floral Icing Cake ",
    name: "Floral Icing Cake ",
    description: "A beautiful cake adorned with intricate floral icing, offering a touch of elegance and romance for an anniversary celebration",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 99,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-anniversary-special-butterscotch-cake-500-gm--276239-m.jpg",
    caption: "Anniversary Special Cake",
    name: "Anniversary Special Cake",
    description: " A sophisticated cake designed specifically for anniversaries, featuring elegant decorations and flavors that symbolize enduring love.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1300 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 100,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-heart-shaped-red-velvet-cake-half-kg--190857-m.jpg",
    caption: "Heart Shaped Red Velvet Cake ",
    name: "Heart Shaped Red Velvet Cake ",
    description: "A classic red velvet cake shaped like a heart, with creamy layers and a rich, velvety texture, ideal for marking a special anniversary.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1350 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 101,
    src: "https://www.fnp.com/images/pr/l/v200/personalised-anniversary-chocolate-photo-cake-half-kg_1.jpg",
    caption: "Anniversary Photo Cake",
    name: "Anniversary Photo Cake",
    description: " A personalized cake featuring a cherished photo of the couple, surrounded by elegant decorations, making it a memorable centerpiece for celebrating their special milestone.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
    ],
    reviews: 12,
    rating: 4
  },

];
export const BossBaby = [
  {
    id: 102,
    src: "https://bkmedia.bakingo.com/fondant-boss-baby-birthday-cake-them3140flav-A.jpg",
    caption: "Fondant Boss Baby Birthday Cake",
    name: "Fondant A delightful cake featuring intricate fondant decorations of the Boss Baby, perfect for celebrating a birthday with a playful theme.",
    weightOptions: [
       { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 103,
    src: "https://bkmedia.bakingo.com/classic-boss-baby-cake-them3142flav-A_0.jpg",
    caption: "Classic Boss Baby Cream Cake",
    name: "Classic Boss Baby Cream Cake",
    description: "A creamy cake adorned with Boss Baby designs, offering a delicious and fun treat for any birthday celebration.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1400 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 104,
    src: "https://www.flavoursguru.com/image/cache/catalog/catimg/primary1/FGFDTCAKE537-260x260.jpg",
    caption: "Grumpy Boss Baby",
    name: "Grumpy Boss Baby",
    description: " A whimsical cake showcasing the grumpy expression of the Boss Baby, making it a humorous and entertaining addition to any party.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 105,
    src: "https://cremecastle.in/cdn/shop/products/C1349PP.webp?v=1672898404&width=300",
    caption: "BOSS BABY AND DOLLAR CAKE",
    name: "BOSS BABY AND DOLLAR CAKE",
    description: "A white color cake in boss baby theme with dollars and milk bottle both lying around",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 106,
    src: "https://cakesandmemories.com/cdn/shop/products/boss-baby-cake-106-799101_900x1084.jpg?v=1659334396",
    caption: "Boss Baby Cake",
    name: "Boss Baby  Cake",
    description: "A vibrant cake decorated with various Boss Baby elements, capturing the fun and mischief of the popular character, ideal for a themed celebration",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  
];
export const FootballCakes = [
  {
    id: 107,
    src: "https://bkmedia.bakingo.com/mini-football-cream-cake-them3236flav-AA.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: " Football Cream Cake",
    name: " Football Cream Cake",
    description: " A delightful cake decorated with football-themed cream designs, perfect for football fans.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1300 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 108,
    src: "https://bkmedia.bakingo.com/soccer-theme-cake-theme3893flav-a.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Soccer Theme Cake",
    name: "Soccer Theme Cake",
    description: "A vibrant cake adorned with soccer motifs and decorations, capturing the excitement of the sport for any celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 109,
    src: "https://bkmedia.bakingo.com/super-kick-football-cake-super%20kick%20football%20cake-b.jpg?tr=h-320,w-320",
    caption: "Super Kick Football Cake",
    name: "Super Kick Football Cake",
    description: "A dynamic football-themed cake featuring a realistic design of a football in motion, ideal for any soccer enthusiast's special occasion.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 110,
    src: "https://bkmedia.bakingo.com/playful-football-theme-cake-theme3900flav-a.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Playful Football Theme Cake",
    name: "Playful Football Theme Cake",
    description: "A fun and playful cake with football decorations, perfect for adding a sporty touch to any event.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 111,
    src: "https://bkmedia.bakingo.com/champion-football-cake-theme3898flav-a.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Champion Football Cake",
    name: "Champion Football Cake",
    description: "A cake celebrating the spirit of champions, adorned with football-themed designs, making it perfect for a victorious celebration.",
    weightOptions: [
      { weight: "3 kg", price: 3000 },
      { weight: "4 kg", price: 4000 }
    ],
    reviews: 10,
    rating: 4
  },

];

export const HalfYear = [
  {
    id: 112,
    src: "https://bkmedia.bakingo.com/joyful-teddy-half-cake-cake3524flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Joyful Teddy Half Cake",
    name: "Joyful Teddy Half Cake",
    description: "A charming half cake decorated with a joyful teddy bear theme, perfect for celebrating a baby's half-year milestone.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id:113,
    src: "https://bkmedia.bakingo.com/sq-semi-round-red-velvet-half-cake-cake2184redv-A_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Red Velvet Half Cake",
    name: "Red Velvet Half Cake",
    description: "A delectable half cake featuring layers of classic red velvet and creamy frosting, perfect for marking a six-month milestone.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 114,
    src: "https://bkmedia.bakingo.com/sq-half-chocolate-birthday-fondant-cake-cake2185choc-A_4.jpg",
    caption: "Chocolate fondant birthday Cake",
    name: "Chocolate fondant birthday Cake",
    description: "A rich and indulgent chocolate cake covered in smooth fondant, ideal for a memorable half-year birthday celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 400 },
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 115,
    src: "https://bkmedia.bakingo.com/fondant-bow-n-edibles-cake-cake3528flav-A.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Fondant Bow n Edible Cake",
    name: "Fondant Bow n Edible Cake",
    description: "An elegant half cake adorned with a fondant bow and edible decorations, creating a sophisticated and delightful treat for a half-year celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1050 }
    ],
    reviews: 12,
    rating: 4
  },
];

export const Peppa_Pig_Cakes = [
  {
    id: 116,
    src: "https://bkmedia.bakingo.com/pretty-peppa-pig-cake-phot3864flav-A.jpg",
    caption: "Pretty Peppa Pig Cake",
    name: "Pretty Peppa Pig Cake",
    description: " A delightful cake featuring Peppa Pig, decorated with vibrant colors and charming details, perfect for any Peppa Pig fan's celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id:117,
    src: "https://bkmedia.bakingo.com/cute-peppa-pig-photo-cake-phot3823flav-C.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Cute Peppa Pig Photo Cake",
    name: "Cute Peppa Pig Photo Cake",
    description: "A personalized cake with a cute photo of Peppa Pig, adding a special touch to any birthday party.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 118,
    src: "https://bkmedia.bakingo.com/playful-peppa-fondant-cake-them3368flav-A_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Playful Peppa Fondant Cake",
    name: "Playful Peppa Fondant Cake",
    description: "A fun and whimsical cake adorned with fondant decorations of Peppa Pig and her friends, ideal for a joyful celebration.",
    weightOptions: [
      { weight: "3 kg", price: 3000 },
      { weight: "4 kg", price: 4000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 119,
    src: "https://bkmedia.bakingo.com/fun-peppa-pig-cake-phot4003flav-a_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Fun Peppa Pig Cake",
    name: "Fun Peppa Pig Cake",
    description: "A cheerful cake showcasing Peppa Pig in a playful scene, making it a perfect centerpiece for any Peppa Pig-themed party.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 12,
    rating: 4
  },
];
export const TravelCakes = [
  {
    id: 120,
    src: "https://bkmedia.bakingo.com/travel-dreams-birthday-cake-theme3927flav-a.jpg",
    caption: "Travel Dreams Birthday Cake",
    name: "Travel Dreams Birthday Cake",
    description: "A whimsical cake featuring decorations inspired by iconic travel destinations and elements, perfect for celebrating the birthday of a travel enthusiast.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id:121,
    src: "https://i.pinimg.com/564x/1d/0b/3b/1d0b3b15682ab35affb6371f0adf5d82.jpg",
    caption: "Best Travel Theme Cake",
    name: "Best Travel Theme Cake",
    description: "An intricately designed cake showcasing travel-themed decorations such as maps, suitcases, and landmarks, ideal for those who love exploring the world.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 122,
    src: "https://th.bing.com/th/id/OIP.sO2F76N-1sc8EBYJ5lgO7AHaH2?w=205&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Travel Inspired Cake",
    name: "Travel Inspired Cake",
    description: " A creative cake adorned with travel motifs, capturing the excitement of adventures and journeys, making it perfect for any travel lover's celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 123,
    src: "https://www.cakeplaza.in/cdn/shop/products/Wanderlust_x700.jpg?v=1611987413",
    caption: "Travel Cake",
    name: "Travel Cake",
    description: "A delightful cake decorated with various travel-themed elements, symbolizing the joy of discovering new places, perfect for wanderlust-filled celebrations.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 12,
    rating: 4
  },
];

export const Baby_Shower_Cakes = [
  {
    id: 124,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-baby-shower-themed-poster-cake-half-kg--132551-m.jpg",
    caption: "Baby Shower Themed Poster Cake",
    name: "Baby Shower Themed Poster Cake",
    description: "A whimsical cake featuring decorations inspired by iconic travel destinations and elements, perfect for celebrating the birthday of a travel enthusiast.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "2 kg", price: 2200 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id:125,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-delectable-and-vibrant-cake-for-baby-shower-2-kg--188751-m.jpg",
    caption: "Delectable and Vibrant Cake",
    name: "Delectable and Vibrant Cake",
    description: "An intricately designed cake showcasing travel-themed decorations such as maps, suitcases, and landmarks, ideal for those who love exploring the world.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 100,
    rating: 4
  },
  {
    id: 126,
    src: "https://th.bing.com/th/id/OIP.sO2F76N-1sc8EBYJ5lgO7AHaH2?w=205&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Travel Inspired Cake",
    name: "Travel Inspired Cake",
    description: " A creative cake adorned with travel motifs, capturing the excitement of adventures and journeys, making it perfect for any travel lover's celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 127,
    src: "https://bkmedia.bakingo.com/baby-girl-baby-boy-cake-them1467flav-AA.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Baby Girl Boy Cake",
    name: "Baby Girl Boy Cream Cake",
    description: "A delightful cake decorated with various travel-themed elements, symbolizing the joy of discovering new places, perfect for wanderlust-filled celebrations.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 128,
    src: "https://bkmedia.bakingo.com/squ-baby-shower-cake-1-A.jpg",
    caption: "Square Shaped Baby Shower Poster Cake",
    name: "Square Shaped Baby Shower Poster Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
];

export const ButterFly_Cakes = [
  {
    id: 129,
    src: "https://www.chefbakers.com/uploads/userfiles/_80A49823.png",
    caption: "Butterfly Theme Cake",
    name: "Butterfly Theme Cake",
    description: "A beautiful cake adorned with colorful butterfly decorations, capturing the grace and beauty of butterflies, perfect for any special occasion.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1800 }
    ],
    reviews: 12,
    rating: 4
  }, {
    id: 130,
    src: "https://www.cakesworld.in/images/web/butterfly_07.jpg",
    caption: "Ruddy Butterfly Theme Cake",
    name: "Ruddy Butterfly Theme Cake",
    description: "A vibrant cake featuring bold, ruddy-colored butterfly designs, adding a touch of elegance and charm to any celebration.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 131,
    src: "https://th.bing.com/th/id/OIP.HAe3KAlwxU3n0EGqENanNgAAAA?rs=1&pid=ImgDetMain",
    caption: "Edible Butterfly Cake",
    name: "Edible Butterfly Cake",
    description: "A delightful cake decorated with delicate, edible butterflies, creating a whimsical and enchanting treat for any event.",
    weightOptions: [
      { weight: "250g", price: 200 },
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1050 }
    ],
    reviews: 12,
    rating: 4
  },
];

export const Bachelorette_cakes = [
  {
    id: 132,
    src: "https://imgcdn.floweraura.com/1_115.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Bride To Be Floral Dress Fondant",
    name: "Bride To Be Floral Dress Fondant Cake",
    description: "A stunning cake featuring a bride's dress made of fondant and adorned with beautiful floral decorations, perfect for celebrating the bride-to-be.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 133,
    src: "https://imgcdn.floweraura.com/bridal-bliss-fondant-cake-9819870ca-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    caption: "Bridal Bliss Fondant Cake",
    name: "Bridal Bliss Fondant Cake",
    description: " An elegant fondant cake designed with bridal elements, capturing the joy and excitement of the upcoming wedding.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 134,
    src: "https://bridalshower101.com/wp-content/uploads/2021/08/192102947_2987845848114892_4682393808801714159_n.jpg",
    caption: "Bride To Be Cake",
    name: "Bride To Be Cake",
    description: " A delightful cake dedicated to the bride-to-be, decorated with charming and celebratory designs to mark the special occasion.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 135,
    src: "https://th.bing.com/th/id/OIP.71TGKZ8XOKX-CwSnzSAw6AAAAA?rs=1&pid=ImgDetMain",
    caption: "Bachelorette Theme Cake",
    name: "Bachelorette Theme Cake",
    description: " A fun and festive cake designed for a bachelorette party, featuring playful and celebratory decorations that capture the excitement and joy of the bride-to-be's last hurrah before the wedding.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 136,
    src: "https://fabweddings.in/blog/wp-content/uploads/2021/07/19-50-22-219822936_946660212575844_5978201105292953045_n.jpg",
    caption: "Bride n Groom To Be",
    name: "Bride n Groom To Be",
    description: "A stylish cake celebrating the groom-to-be, featuring themed decorations that capture the spirit of his upcoming wedding.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
];


export const farewell_cakes = [
  {
    id: 137,
    src: "https://bkmedia.bakingo.com/good-luck-farewell-cake-phot3990flav-a_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Good Luck Farewell Cake",
    name: "Good Luck Farewell Photo Cake",
    description: "A personalized cake featuring a farewell photo and good luck message, making it a memorable and heartfelt send-off.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1700 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 138,
    src: "https://bkmedia.bakingo.com/teacher-retirement-cake-theme3928flav-a_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Retirement Cake",
    name: "Retirement Cake",
    description: " A celebratory cake designed for retirement, decorated with themes of relaxation and new beginnings, perfect for honoring a retiree's achievements.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1100 },
      { weight: "2 kg", price: 2200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 139,
    src: "https://bkmedia.bakingo.com/sweet-send-off-cake-theme3929flav-a_0.jpg?tr=w-320,h-320,dpr-1.5,q-70",
    caption: "Sweet Send Off Cake",
    name: "Sweet Send Off Cake",
    description: "A delightful cake with charming decorations, offering a sweet and thoughtful farewell to someone moving on to new adventures.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "2 kg", price: 2200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 140,
    src: "https://m.media-amazon.com/images/I/71d+ufQ4JBL._AC_UF1000,1000_QL80_.jpg",
    caption: "Goodbye Cake",
    name: "Goodbye Cake",
    description: "A cake designed to bid farewell, often decorated with heartfelt messages or symbols representing the person's interests or memories, creating a meaningful and memorable send-off.",
    weightOptions: [
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];

export const make_up_cakes = [
  {
    id: 141,
    src: "https://th.bing.com/th/id/OIP.wvtx9fSlrOZn7mXycRBkHAHaJ4?w=142&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Makeup Theme Cake",
    name: "Makeup Theme Cake",
    description: "A stylish cake adorned with makeup-themed decorations like lipsticks, mascara, and brushes, perfect for beauty enthusiasts.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 142,
    src: "https://th.bing.com/th/id/OIP.NOPoZckO3C_mpPaoPfQg0gHaJQ?w=153&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Makeup Pinata Cake",
    name: "Makeup Pinata Cake",
    description: " A fun and interactive cake featuring a makeup design with a pinata element, filled with sweet surprises for a delightful celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 143,
    src: "https://bkmedia.bakingo.com/sq-but-first-makeup-them0302flav-A_0.jpg",
    caption: "Makeup Fondant Cake",
    name: "Makeup Fondant Cake",
    description: " A sophisticated cake covered in smooth fondant and decorated with intricate makeup designs, ideal for glamorous occasions.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 144,
    src: "https://bkmedia.bakingo.com/makeup-enthusiast-cake-them3532flav-A.jpg",
    caption: "Dior Cake",
    name: "Dior Cake",
    description: "A luxurious cake inspired by Dior, featuring elegant and iconic designs synonymous with the brand, perfect for fashion-forward celebrations.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 145,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-makeup-theme-cake-750-gm--192837-m.jpg",
    caption: "Makeup Birthday Cake",
    name: "Makeup Birthday Cake",
    description: "A celebratory cake with vibrant colors and fun makeup-themed decorations, making it a perfect treat for a birthday celebration.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 146,
    src: "https://assets.winni.in/product/primary/2014/8/34995.jpeg?dpr=1&w=300",
    caption: "Pink Makeup Cake",
    name: "Pink Makeup Cake",
    description: "A charming cake decorated in shades of pink with makeup elements, creating a feminine and stylish dessert for any occasion.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 147,
    src: "https://i.pinimg.com/originals/6d/ca/17/6dca17b7ce9272982c088aed7fcb2242.jpg",
    caption: "Cosmetic Cake",
    name: "Cosmetic Cake",
    description: "A cake adorned with various cosmetic decorations, capturing the essence of beauty products and creating a unique dessert experience.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 },
      { weight: "2 kg", price: 2000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 148,
    src: "https://i.pinimg.com/originals/ad/b3/6d/adb36dd74fb9def6d881fba5eaf9510f.jpg",
    caption: "Iconic Cosmetic Cake",
    name: "Iconic Cosmetic Cake",
    description: "A cake featuring iconic cosmetic symbols and designs, perfect for celebrating the beauty and allure of makeup artistry.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },

  
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const spider_man_cakes = [
  {
    id: 149,
    src: "https://i.pinimg.com/originals/49/44/4b/49444b3cc8687e981243f9f07b3a7dfc.jpg",
    caption: "SpiderMan Theme Cake",
    name: "SpiderMan Theme Cake",
    description: "A vibrant cake adorned with Spider-Man's iconic colors and web-slinging motifs, perfect for fans of the friendly neighborhood superhero.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 150,
    src: "https://bkmedia.bakingo.com/sq-chocolatey-spiderman-pinata-cake-750-gm-pina2302choc-A_0.jpg",
    caption: "Spiderman Pinata Cake",
    name: "Spiderman Pinata Cake",
    description: "An exciting cake featuring Spider-Man designs with a pinata element, filled with surprises for a fun and interactive celebration.",
    weightOptions: [
      { weight: "1 kg", price: 800 },
      { weight: "1.5 kg", price: 1200 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 151,
    src: "https://bkmedia.bakingo.com/super-spiderman-photo-cake-phot3828flav-A.jpg",
    caption: "SpiderMan Photo Cake",
    name: "SpiderMan Photo Cake",
    description: "A personalized cake featuring a Spider-Man photo, ideal for making a birthday or special occasion memorable for superhero fans.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 152,
    src: "https://bkmedia.bakingo.com/fearless-spiderman-fondant-theme-cake-them3373flav-A_0.jpg",
    caption: "Fearless SpiderMan Cake",
    name: "Fearless SpiderMan Cake",
    description: "A courageous cake showcasing Spider-Man in action, embodying bravery and adventure for any superhero-themed party.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 153,
    src: "https://assets.winni.in/product/primary/2014/6/27686.jpeg?dpr=1&w=400",
    caption: "SpiderMan Birthday Cake",
    name: "SpiderMan Birthday Cake",
    description: " A celebratory cake designed with Spider-Man's theme, adding excitement and joy to a birthday celebration for young fans.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 154,
    src: "https://bkmedia.bakingo.com/sq-adventurous-spidey-hbd-cake-them1557flav-AAA.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Birthday Themed SpiderMan Cake",
    name: "Birthday Themed SpiderMan Cake",
    description: "A themed cake specifically designed for a Spider-Man birthday celebration, featuring elements that capture the essence of the superhero's world.",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "1.5 kg", price: 1350 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 155,
    src: "https://bkmedia.bakingo.com/round-shaped-superhero-cake-them1401flav-AA.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Superheroes United Cake",
    name: "Superheroes United Theme Cake",
    description: "A dynamic cake featuring Spider-Man alongside other superheroes, uniting their powers and creating an epic centerpiece for a superhero-themed event.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },

];

export const unicorn_cakes = [
  {
    id: 156,
    src: "https://bkmedia.bakingo.com/lively-unicorn-cake-them2659flav-A.jpg",
    caption: "Unicorn Cake",
    name: "Unicorn Theme Cake",
    description: "A whimsical cake adorned with unicorn-inspired decorations such as horns, ears, and colorful mane, perfect for adding a touch of magic to any celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 157,
    src: "https://bkmedia.bakingo.com/sq-rainbow-unicorn-fondant-cake-them0493flav-A_0.jpg",
    caption: "Rainbow Unicorn Fondant Cake",
    name: "Rainbow Unicorn Fondant Cake",
    description: "A delightful fondant-covered cake featuring a rainbow-colored unicorn design, combining the beauty of rainbows with the enchantment of unicorns for a joyful celebration.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 158,
    src: "https://bkmedia.bakingo.com/sq-unicorn-pineapple-pinata-cake-630gm-pina2064pine-A_0.jpg",
    caption: "Unicorn Theme Pinata Cake",
    name: "Unicorn Theme Pinata Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 159,
    src: "https://bkmedia.bakingo.com/fun-and-colourful-unicorn-cake-them3699flav-A.jpg",
    caption: "Fun & Colourful Cake",
    name: "Fun & Colourful Cake",
    description: "A vibrant and playful cake featuring bright colors and cheerful decorations, ideal for celebrating with a whimsical and festive theme.",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 160,
    src: "https://bkmedia.bakingo.com/magical-unicorn-cake-phot3865flav-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Magical Unicorn Cake",
    name: "Magical Unicorn Cake",
    description: " A magical cake adorned with unicorn motifs and magical details, perfect for creating an enchanting atmosphere at any unicorn-themed event.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1600 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 161,
    src: "https://bkmedia.bakingo.com/starry-unicorn-fondant-cake-them3768flav-A.jpg",
    caption: "Starry Unicorn Fondant Cake",
    name: "Starry Unicorn Fondant Cake",
    description: "A fondant-covered cake featuring starry decorations and a unicorn design, combining celestial elements with the whimsy of unicorns for a magical celebration.",
    weightOptions: [
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 }
    ],
    reviews: 12,
    rating: 4
  },

  {
    id: 162,
    src: "https://bkmedia.bakingo.com/pastel-rainbow-unicorn-fondant-cake-them3677flav-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Pastel Rainbow Cake",
    name: "Pastel Rainbow Cake",
    description: "A charming cake decorated in pastel colors resembling a rainbow, creating a soft and delightful visual treat perfect for any joyful occasion.",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 163,
    src: "https://www.fnp.com/images/pr/l/v20200901213746/pink-unicorn-chocolate-cake-3-kg_1.jpg",
    caption: "Unicorn Chocolate Cake",
    name: "Unicorn Chocolate Cake",
    description: "A chocolate cake adorned with unicorn-themed decorations, offering a delightful blend of rich chocolate flavors and whimsical unicorn charm.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1100 },
      { weight: "1.5 kg", price: 1650 }
    ],
    reviews: 12,
    rating: 4
  },
];












export const cheesecakes = [
  {
    id: 164,
    src: "https://images.myflowertree.com/live-site-2016/product-image/2023/16948528865-350x350.jpg?w=320&dpr=1.3",
    caption: "Classic Blueberry Cheesecake",
    name: "Classic Blueberry Cheesecake",
    description: "Indulge in a velvety smooth cheesecake topped with a luscious, glossy blueberry glaze, its vibrant hue hinting at the rich and tangy flavor.",
    weightOptions: [
      { weight: "Pastry", price: 120 },
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1200 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 165,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-luscious-new-york-cheese-cake-500-gm--262890-m.jpg",
    caption: "New York Cheesecake",
    name: "New York Cheesecake",
    description: "A New York cheesecake pastry typically features a rich, creamy cheesecake filling on a buttery, flaky pastry crust, offering a decadent dessert experience with a classic New York-style cheesecake flavor.",
    weightOptions: [
      { weight: "pastry", price: 120 },
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1200 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 166,
    src: "https://images.myflowertree.com/live-site-2016/product-image/IMG/1602593976cake-600x600.jpeg?w=576&dpr=1.3",
    caption: "Choco Chip Cheesecake",
    name: " Nutella & Choco Chip Cheesecake",
    description: "A Nutella & Choco Chip Cheesecake combines the creamy richness of cheesecake with the indulgent flavors of Nutella and chocolate chips. It features a smooth, velvety cheesecake filling swirled with Nutella and studded with chocolate chips, offering a deliciously decadent dessert that's perfect for chocolate lovers.",
    weightOptions: [
      { weight: "pastry", price: 120 },
      { weight: "1/2 kg", price: 600 },
      { weight: "1 kg", price: 1200 },
    
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 167,
    src: "https://www.mashed.com/img/gallery/classic-new-york-cheesecake-recipe/l-intro-1631063570.jpg",
    caption: "New York Cheesecake Pastry",
    name: "New York Cheesecake Pastry",
    description: "A New York cheesecake pastry typically features a rich, creamy cheesecake filling on a buttery, flaky pastry crust, offering a decadent dessert experience with a classic New York-style cheesecake flavor.",
    weightOptions: [
      { weight: "pastry", price: 120 },
    ],
    reviews: 16,
    rating: 5
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];




export const desserts = [
  {
    id: 40,
    src: "https://storage.googleapis.com/charmscakes/baby-shark/product_thumbs/IMG_6649_thumb.png",
    caption: "Jungle Paradise Theme Cake",
    name: "Jungle Paradise Theme Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "250g", price: 180 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 41,
    src: "https://pic.warmoven.in/catalog/product/cache/0a642de3c47f06d58ee71056ac9b2d87/b/a/baby-shark-birthday-cake.jpg",
    caption: "Zoo Animal Cake",
    name: "Zoo Animal Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "250g", price: 200 },
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 1050 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];


export const Pastry = [
  {
    id: 168,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Red%20Velvet%20Pastry.JPG",
    caption: "Red Velvet Pastry",
    name: "Red Velvet Pastry",
    weightOptions: [
      { weight: "Pastry", price: 70 },
 
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 169,
    src: "https://shreeramsweets.com/wp-content/uploads/2021/08/extravagant-blackforest-past0159blac-A_0.jpg",
    caption: "Black Forest Pastry",
    name: "Black Forest Pastry",
    weightOptions: [
      { weight: "Pastry", price: 50 },

    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 1011,
    src: "https://bkmedia.bakingo.com/sq-ferrero-rocher-chocolate-truffle-past0160choc-A_0.jpg",
    caption: "Ferrero Rocher Chocolate Truffle",
    name: "Ferrero Rocher Chocolate Truffle",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "Pastry", price: 110 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 170,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbn1zAqY3B_pU7WNa-JVeRg9cTvEFPJC2eBQ&s",
    caption: "Rose Falooda Pastry",
    name: "Rose Falooda Pastry",
    weightOptions: [
      { weight: "Pastry", price: 60 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 171,
    src: "https://girirajbakers.com/wp-content/uploads/2021/12/Choco-Chip-Pastry-e1638882934994.jpg",
    caption: "Choco Chips Pastry",
    name: "Choco Chips Pastry",
    weightOptions: [
      { weight: "Pastry", price: 60 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 172,
    src: "https://b.zmtcdn.com/data/dish_photos/9a7/ce33e7913c2f07e8d3c2f28444d319a7.jpg",
    caption: "Zebra Torte Pastry",
    name: "Zebra Torte Pastry",
    weightOptions: [
      { weight: "Pastry", price: 60 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 173,
    src: "https://th.bing.com/th/id/R.98728edebb09ddb9c22684f2591c6b29?rik=462UR5KhEJWbOg&riu=http%3a%2f%2fs3-ap-southeast-1.amazonaws.com%2fasia.urbanpiper.com%2fmedia%2fbizmedia%2f2021%2f06%2f10%2fRasmalai_Pastry_COMPRESSED.jpg&ehk=Ag2jZjDEsZXSYG2UUFY0BKKjeeCyrHiT63EwKPzNj7Q%3d&risl=&pid=ImgRaw&r=0",
    caption: "Rasmalai Pastry",
    name: "Rasmalai Pastry",
    weightOptions: [
      { weight: "Pastry", price: 70 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 174,
    src: "https://tastenbite.com/wp-content/uploads/2021/06/Butterscotch-Pastry-1-min-scaled.jpg",
    caption: "Butterscotch Pastry",
    name: "Butterscotch Pastry",
    weightOptions: [
      { weight: "Pastry", price: 50 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 175,
    src: "https://www.shugarysweets.com/wp-content/uploads/2021/06/vanilla-cake-recipe.jpg",
    caption: "Vanilla Pastry",
    name: "Vanilla Pastry",
    weightOptions: [
      { weight: "Pastry", price: 50 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 176,
    src: "https://shreeramsweets.com/wp-content/uploads/2021/08/thumb_500_500_strawberry-pastry24Wu.jpg",
    caption: "Strawberry Pastry",
    name: "Strawberry Pastry",
    weightOptions: [  { weight: "Pastry", price: 50 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 177,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Chocolate%20Truffle%20Pastry.JPG",
    caption: "Dutch Truffle Pastry",
    name: "Dutch Truffle Pastry",
    weightOptions: [  { weight: "Pastry", price: 70 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 178,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A71yxaHkhMPjHU-VQE7jwNgzFbfMGyjHtQ&s",
    caption: "Chocolate Delight Pastry",
    name: "Chocolate Delight Pastry",
    weightOptions: [
      { weight: "Pastry", price: 60 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 179,
   src:"https://merakcakes.com/cdn/shop/files/ChocoBerryPastry_1.jpg?v=1704280904",
    caption: "Chocolate Strawberry Pastry",
    name: "Chocolate Strawberry Pastry",
    weightOptions: [
      { weight: "Pastry", price: 90 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 180,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Pineapple%20Pastry.JPG",
    caption: "Pineapple Pastry",
    name: "Pineapple Pastry",
    weightOptions: [  { weight: "Pastry", price: 50 },
    ],
    reviews: 12,
    rating: 4
  },
]; 

export const celebration_cakes = [
  {
    id: 181,
    src: "https://theobroma.in/cdn/shop/files/ChocoholicCakehalfkg_400x400.jpg?v=1711125918",
    caption: "Chocoholic Cake",
    name: "Chocoholic Cake",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "1.5 kg", price: 1500 }
 
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 182,
    src: "https://www.bing.com/th?id=OIP.DD_gILTdMKczADmIG-NGVQHaHa&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    caption: "Square Chocolate Celebration Cake ",
    name: "Square Chocolate Celebration Cake",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }

    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 183,
    src: "https://www.bing.com/th?id=OIP.P3PFyipId_QhLzdYpJNFxwHaHC&w=177&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    caption: "Traditional Celebration Cake",
    name: "Traditional Celebration Cake",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 184,
    src: "https://irp.cdn-website.com/29c4d6b7/dms3rep/multi/celebrations.jpg",
    caption: "Rose Cake",
    name: "Rose Cake",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 185,
    src: "https://www.yummycake.co.in/wp-content/uploads/2022/11/Celebration-Cake.jpeg",
    caption: "Anniversary Cake",
    name: "Anniversary Cake",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 186,
    src: "https://i.pinimg.com/736x/a1/0a/d6/a10ad6f0ff7f100ff7878091fa6f3b52.jpg",
    caption: "Rose n Macroons Cake",
    name: "Rose n Macroons Cake",
    weightOptions: [
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 187,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-truffle-delight-cake-half-kg--145988-m.jpg",
    caption: "Truffle Delight Cake",
    name: "Truffle Delight Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 500 },,
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 188,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-sweet-hearts-delight-bento-cake-200-gm--272638-m.jpg",
    caption: "Sweet Hearts Cake",
    name: "Sweet Hearts Delight Bento Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 },
      { weight: "3 kg", price: 2500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 189,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-heart-shaped-red-velvet-cake-half-kg--190857-m.jpg",
    caption: "Heart Shaped Red Velvet Cake",
    name: "Heart Shaped Red Velvet Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 },
      { weight: "3 kg", price: 2500 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 190,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-moon-and-stars-cake-1-kg--192458-m.jpg",
    caption: "Moon and Stars Cake",
    name: "Moon and Stars Cake",
    weightOptions: [ 
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 },
      { weight: "3 kg", price: 2500 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 191,
    src: "https://heavenleighcakes.co.uk/wp-content/uploads/2023/03/geode1.jpg",
    caption: "Heaven Light Cake",
    name: "Heaven Light Cake",
    weightOptions: [  
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 192,
    src: "https://i2.wp.com/buttercream.info/wp-content/uploads/2012/07/0156c5a66124144bcd69d8ea6a2e7d7f00a820ec12.jpg?ssl=1",
    caption: "Favorite Cream Cake",
    name: "Favorite Cream Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 },
      { weight: "3 kg", price: 2500 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 193,
   src:"https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-roses-aplenty-fresh-cream-valentine-cake-half-kg--153313-m.jpg",
    caption: "Roses Aplenty Cake",
    name: "Roses Aplenty Cake",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1000 },
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 },
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 194,
    src: "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-awesome-oreo-chocolate-cream-cake-for-dad-half-kg--179974-m.jpg",
    caption: "Awesome Oreo Cake",
    name: "Awesome Oreo Cake",
    weightOptions: [  
      { weight: "1/2 kg", price: 450 },
      { weight: "1 kg", price: 900 },
      { weight: "2 kg", price: 1800 },
      { weight: "3 kg", price: 2500 },
    ],
    reviews: 12,
    rating: 4
  },
]; 

export const donuts = [
  {
    id: 195,
    src: "https://th.bing.com/th/id/OIP.AfgAxoXXDcvMVLpPqrsEIwHaF7?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Sprinkle Donut",
    name: "Sprinkle Donut",
    weightOptions: [
      { weight: "1 piece", price: 40 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 196,
    src: "https://cafecakeguru.com/wp-content/uploads/2021/06/Choco-Chips-Donut.jpg",
    caption: "Choco Chips Donut",
    name: "Choco Chips Donut",
    weightOptions: [
      { weight: "1 piece", price: 40 },
    ],
    reviews: 12,
    rating: 4
  },
];
export const brownie = [
  {
    id: 197,
    src: "https://natashaskitchen.com/wp-content/uploads/2020/08/Chocolate-Brownie-Recipe-4.jpg",
    caption: "Choco Chip Brownie",
    name: "Choco Chip Brownie",
    weightOptions: [
      { weight: "1 piece", price: 50 },
    
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 198,
    src: "https://richanddelish.com/wp-content/uploads/2022/07/sprinkle-brownies.jpg",
    caption: "Sprinkle Brownie",
    name: "Sprinkle Brownie",
    weightOptions: [
      { weight: "1 piece", price: 50 },
    ],
    reviews: 16,
    rating: 5
  },
]
export const cupcakes = [
  {
    id: 199,
    src: "https://th.bing.com/th?id=OSK.b2287571f7c20c908b39de1adec387e9&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    caption: "Strawberry Cupcakes",
    name: "Strawberry Cupcakes",
    weightOptions: [
      { weight: "1 piece", price: 40 },
    
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 200,
    src: "https://theobroma.in/cdn/shop/files/VanillaandBlueberryCupcake.jpg?v=1711515195",
    caption: "BlueBerry Cupcakes",
    name: "BlueBerry Cupcakes",
    weightOptions: [
      { weight: "1 piece", price: 40 },
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 201,
    src: "https://th.bing.com/th/id/OIP.A7-j9RNp0rS2R88aSCQFsgAAAA?rs=1&pid=ImgDetMain",
    caption: "Vanilla Cupcakes",
    name: "Vanilla Cupcakes",
    weightOptions: [
      { weight: "1 piece", price: 40 },
    
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 202,
    src: "https://theobroma.in/cdn/shop/files/ChocolateCupcake.jpg?v=1711514719",
    caption: "Chocolate Cupcakes",
    name: "Chocolate Cupcakes",
    weightOptions: [
      { weight: "1 piece", price: 50 },
    ],
    reviews: 16,
    rating: 5
  },
]