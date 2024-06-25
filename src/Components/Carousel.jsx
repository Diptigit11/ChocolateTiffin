import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from '/car1.png'
import image2 from '/car2.png'
import image3 from '/car3.png'
import image4 from '/car4.png'
import image5 from '/car5.png'
import image6 from '/car6.png'
import image7 from '/car7.png'

const Carousel = () => {
  return (
    <div className="bg-white-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: image1,
    id: 1,
  },
  {
    url: image2,
    id: 2,
  },
  {
    url: image3,
    id: 3,
  },
  {
    url:image4,
    id: 4,
  },
  {
    url: image5,
    id: 5,
  },
  {
    url: image6,
    id: 6,
  },
  {
    url: image7,
    id: 7,
  },
];