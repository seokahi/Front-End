import React,{useState} from "react";

function App() {
    return (
        <NavBar />
    );
}
  
function About() {
    return (
        <h2>요건 about</h2>
    )
}

function Product() {
    return (
        <h2>요건 product</h2>
    )
}

function Contact() {
    return (
        <h2>요건 contact</h2>
    )
}

const ContentsContainer = ({ listName }) => {
    if (listName === "About") {
        return <About />;
    } else if (listName === "Product") {
        return <Product />;
    } else if (listName === "Contact") {
        return <Contact />;
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
        <nav>
            <ul>
            <li
                id="About"
                style={
                listName === "About" ? { color: "blue" } : { color: "black" }
                }
                onClick={checkId}
            >
                About
            </li>
            <li
                id="Product"
                onClick={checkId}
                style={listName === "Product" ? { color: "blue" } : { color: "black" }}
            >
                Product
            </li>
            <li
                id="Contact"
                onClick={checkId}
                style={
                listName === "Contact" ? { color: "blue" } : { color: "black" }
                }
            >
                Contact
            </li>
            </ul>
        </nav>
        <ContentsContainer listName={listName} />
        </>
        
    )
}

export default App;