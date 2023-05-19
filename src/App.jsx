import { useState } from 'react'
import './App.css';
import Pages from "./pages/Pages";
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  )
}

export default App;
