// Class Component

import react, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, nickName, children} = this.props
    // const {state1, state2} = this.state
        return (
            <div>
                <h1>Welcome {nickName} aka {name}</h1>
            {children}
            </div>
        )
    }
}

export default Welcome