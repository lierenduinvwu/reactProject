import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.state)
        const listItems = this.props.data.map((item, index) => 
            <li key={index}>{item}</li>
        )
        
        return <ul>
            {listItems}
        </ul>
    }
}

export default List