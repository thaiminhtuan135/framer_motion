'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {fadeIn, staggerContainer} from "../utils/motion";
import {TitleText, TypingText} from "../components";
const World = () => (
  <section>
      <motion.div
          variants={staggerContainer}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{once : false, amount:0.25}}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
         <TypingText title={"| People on the world"} textStyle={'text-center'} />
          <TitleText title={<>Track friend around you and invite them to play together in the same world</>} textStyle={'text-center'} />
      </motion.div>
      <motion.div
          variants={fadeIn('up','tween',0.3,1)}
          className={'relative mt-[68px] flex w-full h-[550px]'}
      >
          <img src="/map.png" alt="map" className={"w-full h-full object-cover"}/>
          <div className={'absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'}>
              <img src="/people-01.png" alt="people1" className={'w-full h-full'}/>
          </div>
          <div className={'absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'}>
              <img src="/people-02.png" alt="people2" className={'w-full h-full'}/>
          </div>
          <div className={'absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'}>
              <img src="/people-03.png" alt="people3" className={'w-full h-full'}/>
          </div>
      </motion.div>
    World section
  </section>
);

export default World;
