import React, { useState } from "react";
import reset from "styled-reset"
import { createGlobalStyle } from "styled-components";
import styles from "./App.module.css";
import Reactt from "./Components/Reactt/React";
const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;


function App() {
    return (
      <React.Fragment>
      <GlobalStyle/>
      <NavBar />
      </React.Fragment>
    );
}
  

function Document() {
    return (
        <h2>요건 Document</h2>
    )
}

function Study() {
    return (
        <h2>요건 Study</h2>
    )
}

function Blog() {
    return (
        <h2>요건 Blog</h2>
    )
}

function Community() {
  return (
      <h2>요건 Community</h2>
  )
}

const ContentsContainer = ({ listName }) => {
      if (listName === "react") {
        return <Reactt />;
    }
    else if (listName === "문서") {
        return <Document />;
    } else if (listName === "자습서") {
        return <Study />;
    } else if (listName === "블로그") {
        return <Blog />;
    } else if (listName === "커뮤니티") {
      return <Community />;
    }
};
function NavBar() {
  console.log("어디가 먼저?");
  const [listName, setListName] = useState("About");
  
  // function checkId(e) 
  const checkId = (e) =>{
    console.log(e.target.id);
    console.log(e.target);
    setListName(e.target.id);
  };

    return (
        <>
        <nav className={styles.container}>
            <ul className={styles.list}>
            <li
                id="react"
                onClick={checkId}
            >
                react
            </li>  
            <li
                id="문서"
                onClick={checkId}
            >
                문서
            </li>
            <li
                id="자습서"
                onClick={checkId}
            >
                자습서
            </li>
            <li
                id="블로그"
                onClick={checkId}
            >
                블로그
            </li>
            <li
              id="커뮤니티"
                onClick={checkId}
            >
              커뮤니티
            </li>
            </ul>
        </nav>
        <ContentsContainer listName={listName} />
        </>
        
    )
}

export default App;