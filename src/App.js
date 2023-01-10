import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
// import Login from './Components/Pages/Registration/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Components/Pages/Shared/Header/Header';
// import Footer from './Components/Pages/Shared/Footer/Footer';
import Product from './Components/Pages/Product/Product';
import ProductView from './Components/Pages/ProductView/ProductView';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="product/:productId" element={<ProductView />} /> */}
          </Routes>
          {/* <Header /> */}
          <Product />
          {/* <Login /> */}
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
