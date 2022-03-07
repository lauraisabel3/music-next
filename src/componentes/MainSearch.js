import React from "react";
import MainSearchStyles from '../styles/MainSearchStyles.module.css'
function MainSearch({searchGenres,setSearchGenres }) {

    const changeValue = (event) => {
        setSearchGenres(event.target.value)
    }
    return(
        <div className={MainSearchStyles.main__search_container}>
            <h1>What are you looking for?</h1>
            <input
                placeholder="Search your favorite genre"
                value={searchGenres}
                onChange={changeValue}>
            </input>
        </div>
    )
}

export default MainSearch