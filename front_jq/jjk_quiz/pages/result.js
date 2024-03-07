import { useSelector } from "react-redux"
import { Fragment } from "react"
import Link from "next/link"

export default function SorcererGrade(){
    const fName = useSelector((s)=>s.pData.fullName)
    let score = parseInt(useSelector((s)=>s.pData.score))
    const email = useSelector(s => s.pData.email)

    
    switch (score){
        case 5:
            var salutations = ["Congratulations Burotha", "Special Grade Sorcerer"]
            break;
        case 4:
            var salutations = ["Stand Proud, Omaeha Tsuyoi", "1st Grade Sorcerer"]
            break;
        case 3:
        case 2:
            var salutations = ["Gambare Gambare", "2nd Grade Sorcerer"]
            break;
        case 1:
        case 0:
            var salutations = ["Ahahaha Dayjobudesho Datte Kimi Yowaimo :D", "3rd or 4th Grade, who really cares?"]
            break;
        
    }

    return (
        <Fragment>
        <main>
            <h1>{salutations[0]}</h1>
            <h2>Sorcerer {fName}, your score is {score}</h2>
                <h3>And you're a {salutations[1]}</h3>
        </main>
        <section>
            <h2>What now?</h2>
            <p>We could hold hands or you can try again :)</p>
            <Link href="/questions">Nah I'll Win!</Link>
            <br />
            <Link href="/">Shobuwa Owari!</Link>
            
        </section>
        </Fragment>
    )
}