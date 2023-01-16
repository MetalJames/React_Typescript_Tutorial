import { Component } from 'react';

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

//the counter value is 5
export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        return (
            <div>
                <br />
                <button onClick={this.handleClick}>Increment</button>&#160;&#160;
                {this.props.message} {this.state.count}
            </div>
        )
    }
}