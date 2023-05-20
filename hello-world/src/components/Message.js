import react, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome '
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}{this.props.name}</h1>
                <button onClick={() => {
                    this.setState({
                        message: 'Thank you for subcribing '
                    })
                }}>Subcribe</button>
            </div>
        )
    }
}

export default Message