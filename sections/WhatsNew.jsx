'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {staggerContainer , fadeIn, planetVariants} from "../utils/motion";
import {NewFeatures, StartSteps, TitleText, TypingText} from '../components'
import {newFeatures} from "../constants";

const WhatsNew = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once : false, amount:0.25}}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div variants={fadeIn('left', 'tween', 0, 1)}
                        className={'flex-[0.75s] flex justify-center flex-col'}>
                <TypingText title={"| What's new ?"}/>
                <TitleText title={<>What's new about Metaversus?</>}/>
                <div className={'mt-[48px] flex flex-wrap justify-between gap-[24px]'}>
                    {newFeatures.map((feature) => (
                        <NewFeatures
                            key={feature}
                            {...feature}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div variants={planetVariants('right')} className={`${styles.flexCenter}`}>
                <img src="/whats-new.png" alt="get-start" className={'w-[80%] h-[80%] object-contain'}/>
            </motion.div>
        </motion.div>
    </section>
);

export default WhatsNew;
