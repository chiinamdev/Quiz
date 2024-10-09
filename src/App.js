import './App.scss';
import Amber from './components/Header/Amber';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
// import Card from './components/card/card';

// import Header from './components/Header/Header';
// import Toggle from './components/state/toggle';
// import Order from './components/tainwindcss/order';
// import { data } from './data.js';


function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-container">
        <div className="slidenav-contianer">
        </div>
        <div className="app-content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
