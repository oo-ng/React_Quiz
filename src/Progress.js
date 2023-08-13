import React from "react";

export const Progress =({currentIndex, selectedOption,  totalPoints, numQuestions, totalScore})=>{

    return(
        <header className="progress">
            <progress max={numQuestions} value={currentIndex+Number(selectedOption!==null)}/>
            <p>
                Question <strong>{currentIndex+1}</strong>/{numQuestions}
            </p>
            <h5>Total Score: {totalScore}/{totalPoints}</h5>
        </header>
    )
}