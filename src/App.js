import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addcourse from './components/Addcourse';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addcourse/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/v' element={<View/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
