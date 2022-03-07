import React from "react";
import MainGenresListStyle from "../styles/MainGenresListStyle.module.css"

function MainGenresList(props) {
    return (
        <ul className={MainGenresListStyle.main__genres_list}>
            {props.children}
        </ul>
    )
}

export default MainGenresList 