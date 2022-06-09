function App() {
    return (
      <Hello name="licat"/>
    );
  }
  
  function Hello(props) {
      const name = props.name;
    const num = [6,7,8,9]
    return(
      <div>
         <h1>안녕, {name} 1호</h1>
        <h1>안녕, {name} 2호</h1>
        <h1>안녕, {name} 3호</h1>
        <h1>안녕, {name} 4호</h1>
        <h1>안녕, {name} 5호</h1>
        {num.map(i => <h1 key={i} >안녕.{name} {i}호</h1>)}
      </div>
    )
  }
  
  export default App;