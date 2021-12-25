import Image from 'next/image';
import styles from '../styles/Slider.module.css';
import { useState } from 'react';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        '/img/slider1.jpg',
        '/img/slider2.jpg',
        '/img/slider3.jpg'
    ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
                <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => {
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt='' width='100px' height='100px' />
                    </div>
                })}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
                <Image src='/img/arrowr.png' alt='' layout='fill' objectFit='contain' />
            </div>
        </div>
    )
}

export default Slider;
