import React, { useEffect } from 'react'

export const Timer =({dispatch, timer})=>{

    useEffect(()=>{
        const intervalID=setInterval(()=>{
            dispatch({type:"timerCount"})
        },1000)
        if(timer<=0){
            dispatch({type:"finishQuiz"})
        }

        return ()=> clearInterval(intervalID)
    },[dispatch, timer])

    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    return (
        <div className="timer">
            {`${minutes}:${seconds}`}

        </div>
    )
}