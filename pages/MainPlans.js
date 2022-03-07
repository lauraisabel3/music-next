import React from "react";
import MainPlansStyles from "../styles/MainPlansStyles.module.css"

function MainPlans() {
    return (
        <div className={MainPlansStyles.main__plans_container}>
            <div>
                <i></i>
                <h2>Annual Plan <br></br> <span>$59.99/year</span></h2>
                <a href="./">Change</a>
            </div>
            <div>
                <i></i>
                <h2>Quarterly Plan <br></br> <span>$59.99/year</span></h2>
                <a href="./">Change</a>
            </div>
            <div>
                <i></i>
                <h2>Monthly Plan <br></br><span>$59.99/year</span></h2>
                <a href="./">Change</a>
            </div>
        </div>
    )
}

export { MainPlans }