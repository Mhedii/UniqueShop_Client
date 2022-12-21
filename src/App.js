import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Pages/Registration/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
