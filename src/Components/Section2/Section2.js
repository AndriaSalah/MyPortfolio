import React from 'react';

import "./Section2.css"
import {useTransform} from 'framer-motion';

import AnimatedText from "../AnimatedText";

const Section2 = ({Y_progress}) => {
    const opacity = useTransform(Y_progress, [0.11, 0.14,0.17,0.19], [0, 1,1,0])
    return (
        <div className={"Section2"}>
            <div className={"TextContainer"}>
                <AnimatedText
                    text={"I'm excited to introduce myself and showcase my work and my passion for Frontend development."}
                    style={{opacity: opacity}}
                    Stagger={0.03}
                >
                </AnimatedText>
            </div>
        </div>
    );
};

export default Section2;
