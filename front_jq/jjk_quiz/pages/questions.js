"use client";

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { setScore } from '@/store/slicePData';

function Questionnaire() {
    
    const router = useRouter()
    const dispatch = useDispatch();
    const fullName = useSelector((s)=>s.pData.fullName)
    const email = useSelector(s => s.pData.email)

    const [loading, setLoading] = useState(true)
    const downloadQs = async () =>{
        try {
            const response = await fetch("http://127.0.0.1:8000/test")
            const fetchedQs = await response.json()
            setTestQs(fetchedQs)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            router.replace('/500')
        }
        
    }

    const sendEmail =  (score) => {
        score = score/5*100
        fetch("http://127.0.0.1:8000/compute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({fullName, email, score})
        }).then(res => res.json())
    }

    const [hydrated, setHydrated] = useState(false);
    const [testQs, setTestQs] = useState([])
    useEffect(() => {
        setHydrated(true);
        downloadQs();
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    const scorePerQ = new Array(5).fill(0);
    const giveScoreForEachQ = [e => scorePerQ[0]=parseInt(e.currentTarget.value), e => scorePerQ[1]=parseInt(e.currentTarget.value),
    e => scorePerQ[2]=parseInt(e.currentTarget.value), e => scorePerQ[3]=parseInt(e.currentTarget.value),e => scorePerQ[4]=parseInt(e.currentTarget.value), ]
    
    

    const qsSubmit = e => {
        e.preventDefault();
        //calculate total score
        const totalScore = scorePerQ.reduce((partialSum, a) => partialSum + a)
        dispatch(setScore(totalScore))
        sendEmail(totalScore)
        router.replace('/result')
    }
  

    
    return loading == true? <img src="/assets/pics/loading-splash.gif" alt="Loading logo" /> : (
        <main>
            <h1>Nah, You'll lose</h1>
            <form onSubmit={qsSubmit}>
                {testQs.map((q, i)=>{
                    const list = [q['answer'], q['wrong1'], q['wrong2'], q['wrong3']]
                    const orderShuffled = [0,1,2,3].map((a) => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value); 

                    const answerValue = (option) => option===q['answer']? 1:0;

                    return (
                    <div key={i}>
                        <h3>{q['question']}</h3>
                        <div>
                            <input type="radio" id={"choice1"+i} name={i} onChange={giveScoreForEachQ[i]} value={answerValue(list[orderShuffled[0]])} />
                            <label htmlFor={"choice1"+i}>{list[orderShuffled[0]]}</label>

                            <input type="radio" id={"choice2"+i} name={i} onChange={giveScoreForEachQ[i]} value={answerValue(list[orderShuffled[1]])} />
                            <label htmlFor={"choice2"+i}>{list[orderShuffled[1]]}</label>

                            <input type="radio" id={"choice3"+i} name={i} onChange={giveScoreForEachQ[i]} value={answerValue(list[orderShuffled[2]])}/>
                            <label htmlFor={"choice3"+i}>{list[orderShuffled[2]]}</label>

                            <input type="radio" id={"choice4"+i} name={i} onChange={giveScoreForEachQ[i]} value={answerValue(list[orderShuffled[3]])}/>
                            <label htmlFor={"choice4"+i}>{list[orderShuffled[3]]}</label>
                        </div>
                    </div>)
                })}
                <button>I'm the Strongest</button>
            </form>
        </main>
    )
}

export default Questionnaire;