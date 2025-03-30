'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Wordchange=()=>{
    const wordsArray=['Funds', 'Quant'];
    const [index, setIndex]= useState(0);


    useEffect(()=>{
        const interval=  setInterval(() => {
            setIndex((previndex)=>(previndex+1)%wordsArray.length);


            
        }, 3000);
        
        return ()=>clearInterval(interval);
    },[])

    return(
    <AnimatePresence mode="wait">

    <motion.span
    key={index}
    initial={{opacity:0, y: 10}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:-10}}
    transition={{duration: 0.8}}
    
    >
        {wordsArray[index]}
    </motion.span>   
    </AnimatePresence>
    )
}