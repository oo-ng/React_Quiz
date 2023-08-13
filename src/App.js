import React, { useReducer } from "react"
import Header from "./Header"
import { Main } from "./Main"
import { useEffect, useRef} from "react"
import {Loader} from "./Loader"
import Error from "./Error"
import { StartScreen } from "./Start_screen"
import { Questions } from "./Questions"
import { Result } from "./Result"

const reducer = ( state, action) =>{
    switch (action.type){
        case "fetchData":
            return{ ...state, questions: action.payload, status: "ready" }
        case "isLoading":
            return{...state, status: "loading"}
        case "error":
            return{...state, status: "error"}   
        case"start":
            return{...state, status:"start",currentIndex:0,selectedOption:null,totalScore:0,timer:10*60,}   
        case "nextIndex":
            return {...state, selectedOption:null,currentIndex: state.currentIndex+1}
        case "answerSelected":
            console.log(action.payload)
            return {...state, selectedOption: action.payload }
        case "setScore":
            console.log("Total score(prev):", state.totalScore)
            return{...state, totalScore:state.totalScore+action.payload}
        case "finishQuiz":
             return{...state, status:"finished"}
        case "setHighScore":
            localStorage.setItem('highScore', JSON.stringify(state.totalScore))
            return {...state,highScore:state.totalScore}
        case "timerCount":
            return{...state, timer:state.timer-1}
        
            
        
        default:
            throw new Error("unknown action")
    }
}

export const App =()=>{

    const initialState={
        questions:[],
        timer:(10*60),
        status:"idle",
        currentIndex:0,
        selectedOption:null,
        totalScore:0,
        highScore: localStorage.getItem('highScore'),
    }
    const [state, dispatch] = useReducer(reducer, 
    initialState)
    const {questions, status,timer, currentIndex, selectedOption, totalScore, highScore} = state;


    useEffect(()=>{
        const fetchingData = async ()=>{
            try{

                dispatch({type: "isLoading"})
                const response = await fetch("http://localhost:3001/questions")

                if(!response.ok){
                    dispatch({type: "error"})
                    throw new Error("questions can't be fetched")
                    
                   
                }

                const jsonData=await response.json ();

                dispatch({type: "fetchData",payload:jsonData })
                console.log(jsonData)

            }catch (error){
                dispatch({type:error})
                console.error("Error:", error.message)
                
            }
        }
    fetchingData();

        

    },[])
    const numOfquestions = questions.length

    const totalPoints = questions.reduce((accumulator, totalPoints)=>{
        return accumulator + totalPoints.points
    },0)

    return (
        <div className="app">
            <Header/>
            <Main>
                {status==="loading"&&<Loader/>}

                {status==="error"&&<Error/>}
                
                {(status==="ready"&&
                <StartScreen 
                numOfquestions={numOfquestions} 
                dispatch={dispatch}/>)}

                {status==="start"&& 
                <Questions
                totalPoints={totalPoints}
                totalScore={totalScore}
                selectedOption={selectedOption}
                dispatch={dispatch} 
                questions={questions}
                currentIndex={currentIndex}
                timer={timer}
                />}

                {status==="finished"&&
                <Result
                totalPoints={totalPoints}
                totalScore={totalScore}
                dispatch={dispatch} 
                highScore={highScore}
                />}

            </Main>
        </div>
    )
}