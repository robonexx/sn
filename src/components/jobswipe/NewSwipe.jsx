import React, {useState } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image'
import IMG1 from '/public/images/image1.png'
import IMG2 from '/public/images/image2.png'
import IMG3 from '/public/images/image3.png'
import IMG4 from '/public/images/image4.png'

import styles from './NewSwipe.module.css'

// will be data
export const ImageData = [
    {
      title: 'Skellefteå taxi',
      desc: 'Taxichaufför',
      id: 1,
      img: IMG1,
    },
    {
      title: 'Northvold',
      desc: 'Gruppchef',
      id: 2,
      img: IMG2,
    },
    {
      title: 'Skellefteå Lasarett',
      desc: 'Sjuksköterska',
      id: 3,
      img: IMG3,
    },
    {
      title: 'Skellefteå Kommun',
      desc: 'Förskolepedagog',
      id: 4,
      img: IMG4,
    },
];

const Images = [ImageData[1].img, ImageData[2].img, ImageData[3].img, ImageData[0].img];

// random image for infinite swipe

const randomImage = current => {
  while (true) {
    const index = Math.floor(Math.random() * Images.length);
    if (current != Images[index]) {
      return Images[index];
    } 
  }
}

// the card

const Card = ({ card, style, onDirectionLock, onDragStart, onDragEnd, animate }) => (    
    <motion.div
      className={styles.card}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragDirectionLock
      onDirectionLock={onDirectionLock}
      onDragEnd={onDragEnd}
      animate={animate}
      style={{ ...style }}
      transition={{ ease: [.6, .05, -.01, .9] }}
      whileTap={{ scale: .85 }}
      >
          <div className={styles.info}>
              <h2>{card.title}</h2>
              <h4>{card.desc}</h4>
          </div>
          
          <Image
              className={styles.img}
              src={card.img}
              alt={card.title}
              fill 
              priority
          ></Image>
    </motion.div>
)
  


const NewSwipe = () => {
    const [cards, setCards] = useState([
        { title: ImageData[0].title, desc: ImageData[0].desc, img: Images[0] }, 
      { title: ImageData[1].title, desc: ImageData[1].desc, img: Images[1] }, 
      { title: ImageData[2].title, desc: ImageData[2].desc, img: Images[2] }
    ]);
    const [dragStart, setDragStart] = useState({
      axis: null,
      animation: { x: 0, y: 0 }
    });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(dragStart.axis === 'x' ? x : y, [-360, 0, 360], [1, .5, 1]);
    const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-360, 0, 360], [0, 25, 0]);
    const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-360, 0, 360], [0, .2, 0]);
    const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
    const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
    const animateCardSwipe = animation => {
      setDragStart({ ...dragStart, animation });
        
      setTimeout(() => {
        setDragStart({ axis: null, animation: { x: 0, y: 0 } });
        x.set(0);
        y.set(0);
        setCards([{ 
            title: 'Northvold', 
            desc: 'Industrimontör',
            img: randomImage(cards[0].img) 
          }, ...cards.slice(0, cards.length - 1)]);
      }, 200);
    }
    const onDragEnd = info => {
      if (dragStart.axis === 'x') {
        if (info.offset.x >= 100) 
          animateCardSwipe({ x: 360, y: 0 });
        else if (info.offset.x <= -100)
          animateCardSwipe({ x: -360, y: 0 }); 
      } else {
          if (info.offset.y >= 300) {
              console.log('will delete from deck')
            animateCardSwipe({ x: 0, y: 360 }); 
        }
         
        else if (info.offset.y <= -100) {
            console.log('will save to job')
            animateCardSwipe({ x: 0, y: -360 }); 
        }
      }
      }
      
      const renderCards = () => {
        return cards.map((card, index) => {
          if (index === cards.length - 1) {
            return (
              <Card 
                card={card}
                key={index}
                /* style={{ x, y, zIndex: index }} */
                style={{ x, y, zIndex: 1 }}
                onDirectionLock={axis => onDirectionLock(axis)}
                onDragEnd={(e, info) => onDragEnd(info)}
                animate={dragStart.animation}
              />
            )
          } else return (
            <Card 
                  card={card}
                  img={card.img}
              key={index}
              style={{
                scale, 
                boxShadow,
                zIndex: index
              }}
            />
          )
        })
      }
      return (
        <div className={styles.swipe}>
          {renderCards()}
        </div>
          
          )
}

export default NewSwipe