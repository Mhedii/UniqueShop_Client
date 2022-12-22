import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Pages/Registration/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Components/Pages/Shared/Header/Header';
import Footer from './Components/Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {/* <Header /> */}
          {/* <Login /> */}
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
