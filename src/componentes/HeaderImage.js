import React from "react";
import Image from 'next/image';
import headerImg from '../assets/headerImg.svg';
import HeaderImage from '../styles/HeaderImage.module.css';

function HeaderImages() {
    
    return (
        <div className={HeaderImage.HeaderImage}>
            <Image
            src={headerImg}
            alt='Img header'
            className={HeaderImage.image}></Image>
        </div>
    )
}

export default HeaderImages