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
    id: 46,
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
    id: 47,
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
  {
    id: 48,
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
    id: 49,
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
export const CakesForHer = [
  {
    id: 1,
    src: "https://www.fnp.com/images/pr/l/v200/black-forest-cake-half-kg_1.jpg",
    caption: "Black Forest Cake",
    name: "Black Forest Cake",
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
    id: 2,
    src: image1,
    caption: "Rose Falooda Cake",
    name: "Rose Falooda Cake",
    description: "Rose Falooda Cake combines the floral sweetness of rose with the rich textures of Falooda, making it a refreshing and unique dessert.",
    weightOptions: [
      { weight: "250g", price: 190 },
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 950 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 3,
    src: image2,
    caption: "Mango Cake",
    name: "Mango Cake",
    description: "Experience the fresh, sweet taste of mango in every bite of our delicious mango cakes.",
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
    name: "Chocolate Truffle",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 5,
    src: "https://assets.winni.in/product/primary/2024/3/94560.jpeg?dpr=1&w=500",
    caption: "Butterscotch Cream Cake",
    name: "Butterscotch Cream Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 6,
    src: "",
    caption: "Delicious Cake",
    name: "Delicious Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 7,
    src: "https://legateaucakes.com/cdn/shop/files/fruit-of-forest-cake-41555060523287.jpg?v=1687465991&width=713",
    caption: "Delicious Cake",
    name: "Delicious Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 100,
    rating: 4
  }
  // Add more cakes here with unique IDs and detailed info
];
export const e = [
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



export const FrozenThemeCakes = [
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

export const GymCakes = [
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

export const PinataCakes = [
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

export const BossBaby = [
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

export const WeddingCakes = [
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

export const AnniversaryCakes = [
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

export const BabyBoy = [
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

export const BabyGirl = [
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

export const SuperheroCakes = [
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







export const DogLovers = [
  {
    id: 20,
    src: "https://bkmedia.bakingo.com/jungle-paradise-theme-cake-them3340flav-A.jpg",
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
    id: 21,
    src: "https://www.fnp.com/images/pr/l/v200/rose-falooda-cake.jpg",
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
export const CarCakes = [
  {
    id: 30,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-princess-barbie-cake-3-5-kg--112527-m.jpg",
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
    id: 31,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-icy-dress-barbie-cream-cake-2-kg--119533-m.jpg",
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
export const CakesForHim = [
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

export const FootballCakes = [
  {
    id: 1,
    src: "https://www.fnp.com/images/pr/l/v200/black-forest-cake-half-kg_1.jpg",
    caption: "Black Forest Cake",
    name: "Black Forest Cake",
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
    id: 2,
    src: image1,
    caption: "Rose Falooda Cake",
    name: "Rose Falooda Cake",
    description: "Rose Falooda Cake combines the floral sweetness of rose with the rich textures of Falooda, making it a refreshing and unique dessert.",
    weightOptions: [
      { weight: "250g", price: 190 },
      { weight: "1/2 kg", price: 350 },
      { weight: "1 kg", price: 700 },
      { weight: "1.5 kg", price: 950 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 3,
    src: image2,
    caption: "Mango Cake",
    name: "Mango Cake",
    description: "Experience the fresh, sweet taste of mango in every bite of our delicious mango cakes.",
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
    name: "Chocolate Truffle",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 5,
    src: "https://assets.winni.in/product/primary/2024/3/94560.jpeg?dpr=1&w=500",
    caption: "Butterscotch Cream Cake",
    name: "Butterscotch Cream Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 6,
    src: "",
    caption: "Delicious Cake",
    name: "Delicious Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 10,
    rating: 4
  },
  {
    id: 7,
    src: "https://legateaucakes.com/cdn/shop/files/fruit-of-forest-cake-41555060523287.jpg?v=1687465991&width=713",
    caption: "Delicious Cake",
    name: "Delicious Cake",
    description: "A classic delicious cake with rich flavors and a delightful texture.",
    weightOptions: [
      { weight: "250g", price: 150 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 550 },
      { weight: "1.5 kg", price: 800 }
    ],
    reviews: 100,
    rating: 4
  }
  // Add more cakes here with unique IDs and detailed info
];
export const HalfYear = [
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

export const Peppa_Pig_Cakes = [
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

export const TravelCakes = [
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


export const unicorn_cakes = [
  {
    id: 300,
    src: "https://bkmedia.bakingo.com/lively-unicorn-cake-them2659flav-A.jpg",
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
    id: 301,
    src: "https://bkmedia.bakingo.com/sq-rainbow-unicorn-fondant-cake-them0493flav-A_0.jpg",
    caption: "Rainbow Unicorn Fondant Cake",
    name: "Rainbow Unicorn Fondant Cake",
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
  {
    id: 302,
    src: "https://bkmedia.bakingo.com/sq-unicorn-pineapple-pinata-cake-630gm-pina2064pine-A_0.jpg",
    caption: "Unicorn Theme Pinata Cake",
    name: "Unicorn Theme Pinata Cake",
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
    id: 303,
    src: "https://bkmedia.bakingo.com/fun-and-colourful-unicorn-cake-them3699flav-A.jpg",
    caption: "Fun & Colourful Cake",
    name: "Fun & Colourful Cake",
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

  {
    id: 304,
    src: "https://bkmedia.bakingo.com/magical-unicorn-cake-phot3865flav-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Magical Unicorn Cake",
    name: "Magical Unicorn Cake",
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
    id: 305,
    src: "https://bkmedia.bakingo.com/starry-unicorn-fondant-cake-them3768flav-A.jpg",
    caption: "Starry Unicorn Fondant Cake",
    name: "Starry Unicorn Fondant Cake",
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

  {
    id: 306,
    src: "https://bkmedia.bakingo.com/pastel-rainbow-unicorn-fondant-cake-them3677flav-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Pastel Rainbow Cake",
    name: "Pastel Rainbow Cake",
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
    id: 307,
    src: "https://www.fnp.com/images/pr/l/v20200901213746/pink-unicorn-chocolate-cake-3-kg_1.jpg",
    caption: "Unicorn Chocolate Cake",
    name: "Unicorn Chocolate Cake",
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

  {
    id: 308,
    src: "https://www.fnp.com/images/pr/l/v20221107183533/unicorn-theme-truffle-cake-2-kg_1.jpg",
    caption: "Unicorn Theme Truffle Cake",
    name: "Unicorn Theme Truffle Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1700 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 309,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-unicorn-chocolate-heart-pinata-cake-750-gm--154326-m.jpg",
    caption: "Unicorn Chocolate Heart Pinata Cake",
    name: "Unicorn Chocolate Heart Pinata Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 310,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-magical-unicorn-semi-fondant-cake-1kg--271466-m.jpg",
    caption: "Magical Cake",
    name: "Magical Semi-Fondant Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 310,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-rainbow-unicorn-half-year-birthday-cake-1-5-kg--149561-m.jpg",
    caption: "Half Year Unicorn Cake",
    name: "Half Year Unicorn Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },

  
  
  // Add more animal theme cakes here with unique IDs and detailed info
];

export const spider_man_cakes = [
  {
    id: 299,
    src: "https://i.pinimg.com/originals/49/44/4b/49444b3cc8687e981243f9f07b3a7dfc.jpg",
    caption: "SpiderMan Theme Cake",
    name: "SpiderMan Theme Cake",
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
    id: 298,
    src: "https://bkmedia.bakingo.com/sq-chocolatey-spiderman-pinata-cake-750-gm-pina2302choc-A_0.jpg",
    caption: "Spiderman Pinata Cake",
    name: "Spiderman Pinata Cake",
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
  {
    id: 297,
    src: "https://bkmedia.bakingo.com/super-spiderman-photo-cake-phot3828flav-A.jpg",
    caption: "SpiderMan Photo Cake",
    name: "SpiderMan Photo Cake",
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
    id: 296,
    src: "https://bkmedia.bakingo.com/fearless-spiderman-fondant-theme-cake-them3373flav-A_0.jpg",
    caption: "Fearless SpiderMan Cake",
    name: "Fearless SpiderMan Cake",
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

  {
    id: 295,
    src: "https://assets.winni.in/product/primary/2014/6/27686.jpeg?dpr=1&w=400",
    caption: "SpiderMan Birthday Cake",
    name: "SpiderMan Birthday Cake",
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
    id: 294,
    src: "https://bkmedia.bakingo.com/sq-adventurous-spidey-hbd-cake-them1557flav-AAA.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Birthday Themed SpiderMan Cake",
    name: "Birthday Themed SpiderMan Cake",
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

  {
    id: 293,
    src: "https://bkmedia.bakingo.com/round-shaped-superhero-cake-them1401flav-AA.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Superheroes United Cake",
    name: "Superheroes United Theme Cake",
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
    id: 292,
    src: "https://bkmedia.bakingo.com/the-iconic-spiderman-fondant-cake--them3374flav-A_0.jpg",
    caption: "Iconic SpiderMan Cake",
    name: "Iconic SpiderMan Cake",
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

  {
    id: 291,
    src: "https://bkmedia.bakingo.com/sq-spiderman_art_work-_1-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Amazing SpiderMan Cake",
    name: "Amazing SpiderMan Theme Truffle Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1700 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 290,
    src: "https://bkmedia.bakingo.com/sq-spiderman-1-them0078flav-A_0.jpg",
    caption: "Spider Man In the City Cake",
    name: "Spider Man In the City Fondant Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 289,
    src: "https://bkmedia.bakingo.com/halloween-spider-web-pineapple-cake-cake3556pine-A.jpg",
    caption: "Spider Web Cake",
    name: "Spider Web Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 288,
    src: "https://bkmedia.bakingo.com/appetizing-spiderman-cake-them2647flav-AA.jpg",
    caption: "Smacking Fondant Spiderman Cake",
    name: "Smacking Fondant Spiderman Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];

export const farewell_cakes = [
  {
    id: 279,
    src: "https://bkmedia.bakingo.com/sq-spiderman_art_work-_1-A.jpg?tr=w-320,h-320,dpr-2,q-70",
    caption: "Amazing SpiderMan Cake",
    name: "Amazing SpiderMan Theme Truffle Cake",
    description: "Black Forest Cake is loved for its combination of chocolate and cherries, making it a delightful treat for special occasions.",
    weightOptions: [
      { weight: "1/2 kg", price: 550 },
      { weight: "1 kg", price: 1200 },
      { weight: "1.5 kg", price: 1700 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 278,
    src: "https://bkmedia.bakingo.com/sq-spiderman-1-them0078flav-A_0.jpg",
    caption: "Spider Man In the City Cake",
    name: "Spider Man In the City Fondant Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 3000 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 276,
    src: "https://bkmedia.bakingo.com/halloween-spider-web-pineapple-cake-cake3556pine-A.jpg",
    caption: "Spider Web Cake",
    name: "Spider Web Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },
  {
    id: 275,
    src: "https://bkmedia.bakingo.com/appetizing-spiderman-cake-them2647flav-AA.jpg",
    caption: "Smacking Fondant Spiderman Cake",
    name: "Smacking Fondant Spiderman Cake",
    description: "A delightful zoo-themed cake perfect for children's parties, featuring various animal designs and flavors.",
    weightOptions: [
      { weight: "2 kg", price: 2000 },
      { weight: "3 kg", price: 2900 }
    ],
    reviews: 12,
    rating: 4
  },
  // Add more animal theme cakes here with unique IDs and detailed info
];

export const Bachelorette_cakes = [
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

export const make_up_cakes = [
  {
    id: 287,
    src: "https://th.bing.com/th/id/OIP.wvtx9fSlrOZn7mXycRBkHAHaJ4?w=142&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Makeup Theme Cake",
    name: "Makeup Theme Cake",
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
    id: 286,
    src: "https://th.bing.com/th/id/OIP.NOPoZckO3C_mpPaoPfQg0gHaJQ?w=153&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    caption: "Makeup Pinata Cake",
    name: "Makeup Pinata Cake",
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
  {
    id: 285,
    src: "https://bkmedia.bakingo.com/sq-but-first-makeup-them0302flav-A_0.jpg",
    caption: "Makeup Fondant Cake",
    name: "Makeup Fondant Cake",
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
    id: 284,
    src: "https://bkmedia.bakingo.com/makeup-enthusiast-cake-them3532flav-A.jpg",
    caption: "Dior Cake",
    name: "Dior Cake",
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

  {
    id: 283,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-makeup-theme-cake-750-gm--192837-m.jpg",
    caption: "Makeup Birthday Cake",
    name: "Makeup Birthday Cake",
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
    id: 282,
    src: "https://assets.winni.in/product/primary/2014/8/34995.jpeg?dpr=1&w=300",
    caption: "Pink Makeup Cake",
    name: "Pink Makeup Cake",
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

  {
    id: 281,
    src: "https://i.pinimg.com/originals/6d/ca/17/6dca17b7ce9272982c088aed7fcb2242.jpg",
    caption: "Cosmetic Cake",
    name: "Cosmetic Cake",
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
    id: 280,
    src: "https://i.pinimg.com/originals/ad/b3/6d/adb36dd74fb9def6d881fba5eaf9510f.jpg",
    caption: "Iconic Cosmetic Cake",
    name: "Iconic Cosmetic Cake",
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

export const ButterFly_Cakes = [
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

export const Baby_Shower_Cakes = [
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

export const cheesecakes = [
  {
    id: 1001,
    src: "https://images.myflowertree.com/live-site-2016/product-image/2023/16948528865-350x350.jpg?w=320&dpr=1.3",
    caption: "Classic Blueberry Cheesecake",
    name: "Classic Blueberry Cheesecake",
    description: "Indulge in a velvety smooth cheesecake topped with a luscious, glossy blueberry glaze, its vibrant hue hinting at the rich and tangy flavor.",
    weightOptions: [
      { weight: "Pastry", price: 120 },
      { weight: "1/2 kg", price: 300 },
      { weight: "1 kg", price: 600 },
      { weight: "1.5 kg", price: 900 }
    ],
    reviews: 16,
    rating: 5
  },
  {
    id: 1002,
    src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-luscious-new-york-cheese-cake-500-gm--262890-m.jpg",
    caption: "New York Cheesecake",
    name: "New York Cheesecake",
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
  {
    id: 1003,
    src: "https://images.myflowertree.com/live-site-2016/product-image/IMG/1602593976cake-600x600.jpeg?w=576&dpr=1.3",
    caption: "Choco Chip Cheesecake",
    name: " Nutella & Choco Chip Cheesecake",
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
    id: 1004,
    src: "https://www.mashed.com/img/gallery/classic-new-york-cheesecake-recipe/l-intro-1631063570.jpg",
    caption: "New York Cheesecake Pastry",
    name: "New York Cheesecake Pastry",
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
  // Add more animal theme cakes here with unique IDs and detailed info
];
export const Pastry = [
  {
    id: 1009,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Red%20Velvet%20Pastry.JPG",
    caption: "Red Velvet Pastry",
    name: "Red Velvet Pastry",
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
    id: 1110,
    src: "https://shreeramsweets.com/wp-content/uploads/2021/08/extravagant-blackforest-past0159blac-A_0.jpg",
    caption: "Black Forest Pastry",
    name: "Black Forest Pastry",
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
  {
    id: 1011,
    src: "https://bkmedia.bakingo.com/sq-ferrero-rocher-chocolate-truffle-past0160choc-A_0.jpg",
    caption: "Ferrero Rocher Chocolate Truffle",
    name: "Ferrero Rocher Chocolate Truffle",
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
    id: 1012,
    src: "data:image/jpeg;base64,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",
    caption: "Rose Falooda Pastry",
    name: "Rose Falooda Pastry",
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
  {
    id: 1015,
    src: "https://girirajbakers.com/wp-content/uploads/2021/12/Choco-Chip-Pastry-e1638882934994.jpg",
    caption: "Choco Chips Pastry",
    name: "Choco Chips Pastry",
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
    id: 80,
    src: "https://b.zmtcdn.com/data/dish_photos/9a7/ce33e7913c2f07e8d3c2f28444d319a7.jpg",
    caption: "Zebra Torte Pastry",
    name: "Zebra Torte Pastry",
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
  {
    id: 81,
    src: "https://th.bing.com/th/id/R.98728edebb09ddb9c22684f2591c6b29?rik=462UR5KhEJWbOg&riu=http%3a%2f%2fs3-ap-southeast-1.amazonaws.com%2fasia.urbanpiper.com%2fmedia%2fbizmedia%2f2021%2f06%2f10%2fRasmalai_Pastry_COMPRESSED.jpg&ehk=Ag2jZjDEsZXSYG2UUFY0BKKjeeCyrHiT63EwKPzNj7Q%3d&risl=&pid=ImgRaw&r=0",
    caption: "Rasmalai Pastry",
    name: "Rasmalai Pastry",
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
    id: 82,
    src: "https://tastenbite.com/wp-content/uploads/2021/06/Butterscotch-Pastry-1-min-scaled.jpg",
    caption: "Butterscotch Pastry",
    name: "Butterscotch Pastry",
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
  {
    id: 83,
    src: "https://www.shugarysweets.com/wp-content/uploads/2021/06/vanilla-cake-recipe.jpg",
    caption: "Vanilla Pastry",
    name: "Vanilla Pastry",
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
  {
    id: 84,
    src: "https://shreeramsweets.com/wp-content/uploads/2021/08/thumb_500_500_strawberry-pastry24Wu.jpg",
    caption: "Strawberry Pastry",
    name: "Strawberry Pastry",
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
    id: 85,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Chocolate%20Truffle%20Pastry.JPG",
    caption: "Dutch Truffle Pastry",
    name: "Dutch Truffle Pastry",
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
  {
    id: 86,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A71yxaHkhMPjHU-VQE7jwNgzFbfMGyjHtQ&s",
    caption: "Chocolate Delight Pastry",
    name: "Chocolate Delight Pastry",
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
  {
    id: 87,
   src:"https://merakcakes.com/cdn/shop/files/ChocoBerryPastry_1.jpg?v=1704280904",
    caption: "Chocolate Strawberry Pastry",
    name: "Chocolate Strawberry Pastry",
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
  {
    id: 88,
    src: "https://www.muffinscakes.com/files/catalog/New%20Photoshoot%20Cakes/Pineapple%20Pastry.JPG",
    caption: "Pineapple Pastry",
    name: "Pineapple Pastry",
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

export const celebration_cakes = [
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