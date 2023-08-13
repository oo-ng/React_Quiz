import React, { useEffect } from "react";


export const Options = ({ selectedOption, questions, currentIndex, dispatch }) => {
    let correctAnswer = questions[currentIndex].correctOption;

    useEffect(()=>{
        console.log("selected answer:", selectedOption);
        console.log("correct answer:", correctAnswer)
    },[selectedOption, correctAnswer])

   
    return (
        <div className="options">
            {questions[currentIndex].options.map((option, i) => 
                <button 
                    key={i} 
                    disabled={selectedOption!==null}
                    onClick={()=>{
                        dispatch({type:"answerSelected" ,payload:i});
                        dispatch({type:"setScore", payload:(i===correctAnswer?questions[currentIndex].points:0)});
                    }}
                    className={`btn btn-option
                        ${selectedOption === i ? "answer" : ""}
                        ${selectedOption === null?"" :(
                            i === correctAnswer ? " correct" : " wrong")}`}>
                    {option}
                </button>
            )}
        </div>
    );
}

