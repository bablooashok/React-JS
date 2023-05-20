// Functional Component

import React from 'react'

// function Greet() {
//     return <h1>Hello Ashok</h1>
// }

export const Greet = ({name, nickName, children}) => {

    return (
        <div>
            <h1>Hello {name} aka {nickName}</h1>
            {children}
        </div>
    )
}

// export default Greet