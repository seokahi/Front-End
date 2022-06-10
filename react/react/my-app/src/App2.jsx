import './App.css'
import Homepage from './pages/homepage/homepage'
import Login from './pages/login/Login'

function App() {
  const user = {
    login: true,
    name:"서가희"
  }
  return (
    <div>
      {user.login? <Homepage name={user.name}/>: <Login/>}
      
    </div>
  );
}

export default App;