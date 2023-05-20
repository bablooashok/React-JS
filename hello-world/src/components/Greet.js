// Functional Component

import React from 'react'

// function Greet() {
//     return <h1>Hello Ashok</h1>
// }

export const Greet = (props) => {

    return (
        <div>
            <h1>Hello {props.name} aka {props.nickName}</h1>
            {props.children}
        </div>
    )
}

// export default Greet