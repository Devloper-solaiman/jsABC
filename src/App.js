import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
