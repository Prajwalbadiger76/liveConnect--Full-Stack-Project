import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>

    <Router>

      <AuthProvider>

      <Routes>
      {/* <Route path ='/home' element /> */}
        <Route path ='/' element = {<LandingPage/>} />
        <Route path ='/auth' element = {<Authentication/>} />
      </Routes>

      </AuthProvider>
    </Router>
    </>
  )
}

export default App;
