import React from 'react'
import { Progress } from "./Progress";
import { Options } from './options'
import { Timer } from './Timer';

export const Questions =({totalScore,timer, totalPoints,questions, currentIndex, dispatch, selectedOption})=>{

    
    

    return(
        <div>
           
           <Progress
           totalScore={totalScore}
           currentIndex={currentIndex}
           numQuestions={questions.length}
           totalPoints={totalPoints}
           selectedOption={selectedOption}/>
           
            <h4>{questions[currentIndex].question}</h4>
            <Options 
            questions={questions}
            currentIndex={currentIndex}
            selectedOption={selectedOption}
            dispatch={dispatch}
            />
            <div className='btn-ui'>
                {selectedOption !== null?
                (currentIndex+1===questions.length?
                    <button
                    onClick={()=>dispatch({type:"finishQuiz"})}
                    className='btn'>
                        Finish
                    </button>:
                <button
                onClick={()=>{
                    dispatch({type:"nextIndex"});
                }} 
                className='btn'>
                    Next
                </button>):""
                }
            </div>

            <Timer
            dispatch={dispatch}
            timer={timer}
            />
            
            
        </div>


    )
}