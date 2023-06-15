import {useState} from 'react'
import Number from './components/Number'
import Button from './components/Button'

function Counter(){
    const [count, setCount] = useState(0)

    /*
    const state = useState(0)
    const count = state[0]
    const setCount = state[1]*/

    function handleAdd(){
        setCount(count+1)
    }

    function handleSubstract(){
        setCount(count-1)
    }

    return(
        <section id="counter">
            <h1>Counter:</h1>
            <Button symbol={"+"} handleClick={handleAdd}/>
            <Number number={count}/>
            <Button symbol={"-"} handleClick={handleSubstract}/>
        </section>
    )
}

export default Counter;