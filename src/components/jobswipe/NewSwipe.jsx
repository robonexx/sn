import React, {useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image'
import { RiArrowRightLine, RiBookmarkFill } from 'react-icons/ri'
import { Jobs } from '@/data/jobsArray';
import styles from './NewSwipe.module.css'
import SwipeButtons from './SwipeButtons';

// will be data

const Images = [Jobs[0].img, Jobs[1].img, Jobs[2].img, Jobs[3].img];

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

const Card = ({ card, style, onDirectionLock, onDragStart, onDragEnd, animate }) => {
  
    return (    
    <motion.div
        className={styles.card}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragStart={(e) => {
            e.stopPropagation()
            /* console.log(e.target.attributes) */
        }}
        onDragEnd={onDragEnd}
        animate={animate}
        style={{ ...style }}
        transition={{ ease: [.6, .05, -.01, .9] }}
      whileTap={{ scale: .98 }}
    >
        <RiBookmarkFill className={styles.saved}  />
        <div className={styles.info}>
              <h2>{card.employer}</h2>
              <h4>{card.role}</h4>
          </div>
          
        <Image
              className={styles.img}
              src={card.img}
              alt={`${card.role}`}
              fill 
              priority
        />
    </motion.div>
)}

const NewSwipe = ({ data }) => {
    const [cards, setCards] = useState(data);
    
    const [dragStart, setDragStart] = useState({
        axis: null,
        initial: {opacity: 0},
        animation: { x: 0, y: 0 }
    });

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(dragStart.axis === 'x' ? x : y, [-360, 0, 360], [1, .9, 1]);
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


    const onDragEnd = (info) => {
      if (dragStart.axis === 'x') {
        if (info.offset.x >= 100) 
          animateCardSwipe({ x: 360, y: 0 });
        else if (info.offset.x <= -100)
          animateCardSwipe({ x: -360, y: 0 }); 
      } else {
          if (info.offset.y >= 300) {
              console.log('will delete from deck')
            animateCardSwipe({ x: 0, y: 260 }); 
        }
         
        else if (info.offset.y <= -300) {
              console.log('will save to job')
              console.log(info)
            animateCardSwipe({ x: 0, y: -260 }); 
        }
      }
    }
    
    const doSomething = () => {
        console.log('function to remove job from array goes here');
      };
    
      function handleSave() {
        console.log('Function for saving job to db or localstorage, cookie etc');
      }
      
    const renderCards = () => {     

        return cards.map((card, index) => {
            const { employer, role, desc, quali, id, img} = card

            const saveJob = (cardId) => {
                    
                let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
                console.log(myjobs)
                let newJob;
            
                  if (cardId) {
                    newJob = {
                        id,
                        employer,
                        role,
                        desc,
                        quali,
                        img
                    }
                  } else {
                    return
                  }
            
                myjobs.push(newJob)
                
                window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
            }

          if (index === cards.length - 1) {
            return (
              <Card 
                card={card}
                key={index}
                style={{ x, y, zIndex: index }}
                onDirectionLock={axis => onDirectionLock(axis)}
                    onDragEnd={(e, info) => {
                        onDragEnd(info)
                        if (info.offset.y <= -300) {
                            console.log(card.id + ' is the card id to match with data, to save to saved jobs')
                            saveJob(card.id)
                          animateCardSwipe({ x: 0, y: -260 }); 
                      }
                    }}
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
              <p className={styles.save}>Saved</p>
              {renderCards()}
              <p className={styles.throw}>Throw</p>
              <div className={styles.arrowIcon}>
                <RiArrowRightLine />
              </div>  
              <SwipeButtons />
              <div className={styles.overlay}></div>
        </div>
          
          )
}

export default NewSwipe