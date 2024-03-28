import { useEffect,useState } from "react"

const PracticeEffect = ()=> {
    const [count, setCount] = useState(0)
    const [multiply, setMultiply]=useState(2)
    useEffect(()=>{
        setTimeout(setCount((count)=>count+1),1000)
    },[multiply]

    )
    return(
        <>
        <div>
           <h1 style={{textAlign:"center"}}>{count}</h1>
           <button onClick={()=>{setMultiply((multiply)=>multiply*2)}}>Multiply</button>
           <h4>Multiplication is right:{multiply}</h4>
        </div>
        </>
    )
}

export default PracticeEffect