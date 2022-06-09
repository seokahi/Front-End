import React, { useState } from 'react';
function Resume(props) {
  const [like, setLike] = useState(0);

  function clickLike() {
     setLike(like+1);
      console.log(like);
  }


  return(
      <div style={{border:"solid 1px", width:"500px"}}>
          <button onClick={clickLike}>like{like}</button>
      </div>
  )
}


function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;
