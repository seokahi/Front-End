function App() {
  return (
    <Hello />
  );
}

function Hello(props) {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };
  return(
    <div>
      {productList.products.map((value,index) => (
      <li key={index} style={{listStyle:"none"}}>
        <h2>{index} {value.title}</h2>
        <p>{value.price}</p>
      </li>))}
    </div>
  )
}

export default App;