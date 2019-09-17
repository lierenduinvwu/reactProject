import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        };
    }

    componentDidMount() {
        this.countDown = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.countDown)
    }

    tick() {
        // this.setState({
        //     date: new Date()
        // })
        this.setState((state, props) => ({
            date: new Date(),
            counter: state.counter + props.increment
        }))
    }

    render() {
        return <div>{this.state.date.toLocaleTimeString()}--------{this.state.counter}</div>
    }
}

export default Clock