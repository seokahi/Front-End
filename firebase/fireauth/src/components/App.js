import MyRouter from "./Router";
import { useState ,useEffect} from "react";
import { authService } from "../fBase";

function App() {
	// isLogin의 초기값으로 유저 상태를 할당합니다.
	const [isLogin, setLogin] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setInit(true);
    });
  })
  return (
    init? <MyRouter isLogin={isLogin}></MyRouter>:'로딩중..'
  );
}

export default App;