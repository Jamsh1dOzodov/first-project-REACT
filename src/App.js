import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import ErrorPage from './pages/Error-page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Catalog' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
