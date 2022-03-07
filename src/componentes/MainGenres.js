import React from "react";
import Image from "next/image";
import MainGenresStyles from "../styles/MainGenresStyles.module.css"



function MainGenres(props) {
    return(
        <div className={MainGenresStyles.main__genres_container}>
            <Image
            src={props.src}
            alt="Ícono Rock"
            width={80}
            height={80}
            className={MainGenresStyles.main__genres_img}></Image>
            <div>
                <h2>{props.tittle}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default MainGenres