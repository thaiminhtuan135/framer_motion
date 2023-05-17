'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {staggerContainer, fadeIn, planetVariants} from "../utils/motion";
import {InsightCard, StartSteps, TitleText, TypingText} from '../components'
import {insights} from "../constants";

const Insights = () => (
    <section>
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText title={"Insight"} textStyle={'text-center'}/>
            <TitleText title={"Insight about metaversus"} textStyle={'text-center'} />
            <div className={'mt-[50px] flex flex-col gap-[30px]'}>
                {insights.map((insight,index) => (
                    <InsightCard  key={`insight-${index}`} {...insight} index={index+1}/>
                ))}
            </div>
        </motion.div>
    </section>
);

export default Insights;
