// Class Component

import react, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.nickName} aka {this.props.name}</h1>
            {this.props.children}
            </div>
        )
    }
}

export default Welcome