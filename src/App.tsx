import React from "react";
import RegisterUser from './components/User/LoginUser';
import LoginUser from './components/User/RegisterUser';
import ArticuloManufacturadoManagement from './components/ArticuloManufacturado/ArticuloManufacturadoManagement'

const App: React.FC = () => {
  return (
    <div>
      <RegisterUser/>
      <LoginUser/>
      <ArticuloManufacturadoManagement/>
    </div>
  );
};

export default App;
