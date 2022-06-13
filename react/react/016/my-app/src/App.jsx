// import HomePage from './pages/HomePage/HomePage'
// import './reset.css'
// import './app.css'

// function App() {
//     // console.log(data)
//     return (
//         <>
//             <HomePage/>
//         </>
//     );
// }

// export default App;
// import React from "react";
// import styled from "styled-components";

// const ContentOne = styled.div`
//     margin: 40px;
// `;

// const ContentTwo = styled.div`
//     color:red;
// `;

// const ContentThree = styled(ContentTwo)`
//     border: 1px solid black;
// `

// const ContentFour = styled(ContentOne, ContentTwo)`
//     border: 1px solid black;
// `

// function App() {
//     return (
//         <div>
//             <ContentOne>hello world</ContentOne>
//             <ContentTwo>hello world</ContentTwo>
//             <ContentThree>hello world</ContentThree>
//             <ContentFour>hello world</ContentFour>
//         </div>
//     );
// }

// export default App;
import React, { useState } from 'react';

const Parent = () => {
    const [ v, setV ] = useState({
        a: 101,
        b: 'hello',
        c: 'world'
    })
    
    return (
        <div>
        <Child one={v.a} two={v.b} three={v.c} onChange={value => {
            console.log("여기는",v);
            console.log("setVs",setV({...v, ...value}))
            return setV({...v, ...value})
        }} />
        {v.id}
        </div>
    )
}

const Child = (props) => { 
    const [input, setInput] = useState();

    const onChange = (event) => {
        console.log(event)

        const {name, value} = event.target
        console.log(name, value)
        // console.log(name)
        // console.log(value)
        // console.log(typeof name)
        // console.log(typeof value)

        setInput({[name]: value}) // [name]은 구조분해할당 아닙니다. 대괄호가 없으면 'name'으로 들어가기 때문에 변수명으로 넣기 위한 코드입니다.
        props.onChange(input)
    }
    return (
        <div>
            <p>{props.one}</p>
            <p>{props.two}</p>
            <p>{props.three}</p>
            <input type="text" name="id" onChange={onChange} />
        </div>
    )
}


function App() {
    return (
        <div>
            <Parent/>
        </div>
    );
}

export default App;