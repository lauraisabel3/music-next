import React from "react";
import MainSummaryStyles from "../styles/MainSummary.module.css";

function MainSummary() {
    return(
        <div className={MainSummaryStyles.main__summary}>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and poscasts on any device anywhere you like!</p>
        </div>
    )
}

export default MainSummary