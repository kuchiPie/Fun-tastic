import { Route,Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={AuthPage}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
    </div>
  );
}

export default App;
