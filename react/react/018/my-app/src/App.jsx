// // import React, { useEffect, useLayoutEffect, useState } from "react";

// // import ReactDOM from 'react-dom/client';

// // function App() {
// //   const [num, setNum] = useState(0);

// //   const onClick = () => {
// //     setNum(num + 1);
// //   };
  
// //   useLayoutEffect(() => {  // 1 - useEffect
// //     console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!");
// //     return ()=>{
// //       console.log("⏱🧹언마운트될때 단 한번 실행됩니다!")
// //     }
// //   }, []); 

// //     useLayoutEffect(() => {  // 1 - useEffect
// //     console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!");
// //     return ()=>{
// //       console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
// //     }
// //   }); 

// //   useLayoutEffect(() => { // 2 - useEffect
// //     console.log("⏱num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!");
// //     return ()=>{
// //       console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
// //     }
// //   }, [num]);

// //   //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.

// //   useEffect(() => {
// //     console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!");
// //     return ()=>{
// //       console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
// //     }
// //   }, []); 

// //     useEffect(() => {
// //     console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!");
// //     return ()=>{
// //       console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
// //     }
// //   }); 

// //   useEffect(() => {
// //     console.log("🎈num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!");
// //     return ()=>{
// //       console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
// //     }
// //   }, [num]);

// //   return (
// //       <button onClick={onClick}>{num}</button>
// //   );
// // }
// // const Wrap = ()=>{
// //   const [isVisible,setIsVisible] = useState(true)
// //   const handleClick = ()=> setIsVisible(!isVisible)
// //   return (
// //     <>
// //       <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
// //       <br></br>
// //       {isVisible&& <App />}
// //     </>
// //   )
// // }

// // export default App
// import {useState , useRef , useEffect} from "react";
// function App(){
//   const [modalShow,SetmodalShow ] = useState(false);
//   const modal = useRef()
//   const button = useRef()
//   useEffect(() => {
//     console.log(modal.current);
//     console.log(button.current);
//     if(modal.current == null || button.current == null) {
//       return
//     }
//     modal.current.style.color="red"
//     modal.current.style.margin="20px"
//   },[modalShow])
//   return (
//     <div className="App">
//       <button ref={button} onClick={() =>SetmodalShow(!modalShow)}>show me the 모달!!</button>
//       {modalShow && (
//         <div ref={modal}>modal</div>
//       )}
//       <h1>test2</h1>
//     </div>
//   )

// }

// export default App;
import React, { useEffect, useLayoutEffect, useState } from "react";

import ReactDOM from 'react-dom/client';

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log(1)
    return () => {
      console.log('return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log(2)
    return () => {
      console.log('return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log(3)
    return () => {
      console.log('return_3')
    }
  }, [num])

  return (
    <div className="App">
      <button onClick={handleonClick}>{num}</button>
    </div>
  );
}

export default App;