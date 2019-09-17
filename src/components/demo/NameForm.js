import React from 'react'
import './style.css'
import './style.scss'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <form className="red">
                <p className="color">
                    <span>span</span>
                </p>
            </form>
        )
    }
}

export default NameForm