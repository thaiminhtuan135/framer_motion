'use client';
import {motion} from "framer-motion";
import {staggerContainer} from "../utils/motion";
import {exploreWorlds} from "../constants";
import styles from "../styles";
import {ExploreCard, TitleText, TypingText} from "../components";
import world from "./World";
import {useState} from "react";

const Explore = () => {
    const [active, setActive] = useState('world-2');
    return (
        <section className={`${styles.paddings}`} id={'explore'}>
            <div>ds</div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.25}}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title={"| The world"} textStyle={'text-center'}/>
                <TitleText title={
                    <>
                        Choose the word you want
                        <br className={'md:block hidden'}/>to explore
                    </>
                } textStyle={'text-center'}/>
                <div className={'mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'}>
                    {exploreWorlds.map((world,index) => (
                        <ExploreCard key={world.id} {...world} active={active} handClick={setActive}/>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Explore;
