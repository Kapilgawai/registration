import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import PreviewPage from './PreviewPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     

<ToastContainer></ToastContainer>



{/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
<BrowserRouter>


<Routes>
  <Route path='/' element={<Register/>}>   </Route>
  <Route path='/Login' element={<Login/>}>   </Route>
  <Route path='/Home' element={<Home/>}>   </Route>
  <Route path='/PreviewPage' element={<PreviewPage/>}>   </Route>



  <Route path='/register' element={<Register/>}>   </Route>



</Routes>


</BrowserRouter>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}



    </div>
  );
}

export default App;
