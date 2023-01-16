import { useReducer } from "react";

type ContainerProps = {
    styles: React.CSSProperties
}

type CounterState = {
    count: number
} 

//discriminated unions - recomended appropach to type the reducer function
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction
//discriminated unions

const initialState = { count: 0 };

function reducer (state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = (props: ContainerProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div style={props.styles}>
            Count: {state.count}
            <div>
                <button onClick={() => dispatch({ type: 'increment', payload: 10})}> Increment 10</button>&nbsp;&#160;
                <button onClick={() => dispatch({ type: 'decrement', payload: 10})}> Decrement 10</button>&nbsp;&#160;
                <button onClick={() => dispatch({ type: 'reset'})}> Reset</button>
            </div>
            <button></button>
        </div>
    )
}

export default Counter