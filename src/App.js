// import React, { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/global.css";
// import ModalLogin from "./Component/Login";
import NavigasiBar from "./Component/NavigasiBar";
// import Information1 from "./Component/Information1";
// import Information2 from "./Component/Information2";
// import Card from "./Component/Card";
import home from "./Pages/home";
import FormFund from "./Pages/FormFund";
import Profile from "./Pages/Profile";
import RaiseFund from "./Pages/RaiseFund";

// function App() {
//   const [isLogin, setLogin] = useState(false);
//   const [modalLogin, setModalLogin] = useState(false);
//   const [modalRegister, setModalRegister] = useState(false);

//   const showModalLogin = () => {
//     setModalLogin(!modalLogin);
//     setModalRegister(false);
//   };

//   const showModalRegister = () => {
//     setModalRegister(!modalRegister);
//     setModalLogin(false);
//   };

//   const handleLogin = () => {
//     setLogin(true);
//     setModalLogin(false);
//   };

//   return (
//     <div className="app">
//       <Router>
//         <NavigasiBar
//           isLogin={isLogin}
//           showModalLogin={showModalLogin}
//           showModalRegister={showModalRegister}
//         />
//         {modalLogin && (
//           <ModalLogin
//             showModalLogin={showModalLogin}
//             handleLogin={handleLogin}
//           />
//         )}
//         {/* {modalRegister && (
//           <ModalRegister showModalRegister={showModalRegister} />
//         )} */}
//         <Information1 />
//         <Information2 />
//         <Card />
//       </Router>
//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <NavigasiBar />
      <Switch>
        <Route exact path="/lala" component={home} />
        <Route exact path="/lili" component={FormFund} />
        <Route exact path="/lulu" component={Profile} />
        <Route exact path="/lele" component={RaiseFund} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
