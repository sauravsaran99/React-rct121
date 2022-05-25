
import { useContext } from 'react';
import './App.css';
import { Createauth } from './components/Context/Authcontext';
import { Login } from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import { Success } from './components/Success/Success';

function App() {

  const [auth] = useContext(Createauth);

  return (
   <>
   <Navbar></Navbar>
   <Login></Login>
   {auth?<Success></Success>:''}
   </>
  );
}

export default App;
