import React from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Document from "./Components/Document/Document";
import Study from "./Components/Study/Study";
import Blog from "./Components/Blog/Blog";
import Community from "./Components/Community/Community";
const GlobalStyle = createGlobalStyle`
  ${reset}
  h1 {
    font-size: inherit;
    font-weight: inherit;
    padding:0;
    margin:0
  }

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
    <BrowserRouter>
      <GlobalStyle />
      <ul>
      <Link to="/" style={{ margin: "0 5px" }}>
        React
      </Link>
      <Link to="/Document" style={{ margin: "0 5px" }}>
        문서
      </Link>
      <Link to="/Study" style={{ margin: "0 5px" }}>
        자소서
      </Link>
      <Link to="/Blog" style={{ margin: "0 5px" }}>
        블로그
      </Link>
      <Link to="/Community" style={{ margin: "0 5px" }}>
        커뮤니티
      </Link>
      </ul>
      <Route path="/" exact component={Homepage} />
      <Route path="/Document" exact component={Document} />
      <Route path="/Study" exact component={Study} />
      <Route path="/Blog" exact component={Blog} />
      <Route path="/Community" exact component={Community} />
    </BrowserRouter>
  );
}


export default App;