import React, { useEffect, useRef } from "react";

export const Result =({dispatch,totalScore, highScore,totalPoints })=>{

    

    const percentageScore = (totalScore/totalPoints)*100;
    

    useEffect(()=>{
        if(totalScore>highScore){
            dispatch({type:"setHighScore"})
            

        }
    },[dispatch, highScore, totalScore])
    
    return(
        <div>
            
            <p className="result">You scored <strong> {totalScore} out of {totalPoints} </strong>({percentageScore.toFixed(0)}%)</p>

            {totalScore===highScore?
                <p className="highscore">
                    Congratulations!!!<br/>NEW HIGH SCORE<br />{highScore} points 
                </p>:
                <p className="highscore">
                    Highscore: {highScore} points
                </p>}

                <button className="btn" onClick={()=>dispatch({type:"start"})}>
                    Restart
                </button>
            

        </div>
    )
}