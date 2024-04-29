import {useState} from 'react'
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
const [counter, setCounter] = useState(value)
    const handledAdd = (event) => {
        console.log(event)
        setCounter( counter + 1)
        // setCounter((actualValue)=> actualValue + 1) // otra forma de utilizar el hook useState
    }
    
    const handleSubstract= ()=> setCounter(counter - 1)
    
    
    const handleReset = () => setCounter(value)
    return (
        <main>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handledAdd }> + 1</button>
            <button onClick={ handleSubstract }> - 1</button>
            <button onClick={ handleReset }> Reset</button>

        </main>

    )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp