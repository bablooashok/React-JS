import React from "react";

const Hello = () => {
    //JSX
    // return (
    //     <div id='hello' className='classname'>
    //         <h1>Hello, I'm JSX code</h1>
    //     </div>
    // )

    //Non-Jsx code
    return React.createElement('div', {id:'hello', className:"classname"},React.createElement('h1',null,`Hello, I'm not JSX code`))
}

export default Hello