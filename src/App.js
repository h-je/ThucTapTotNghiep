import Header from "./components/layout/Header";
import Opac from "./pages/opac";
import Home from "./pages/home";

import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import LoginPage from "./pages/opac/login";
import UserPage from "./pages/userInfoCard/userPage";
import UserBookOrder from "./pages/userInfoCard/userBookOrder";
import Singup from "./pages/opac/singup";
import VerifyEmail from "./pages/opac/verifyEmail";
import ForgotPassword from "./pages/opac/forgotpassword"
import ResetPassword from "./pages/opac/ResetPassword"


// import { useEffect } from "react";
// import bookApi from "./api/bookApi";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/opac" component={Opac} />
        <Route path="/login" component={LoginPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/singup" component={Singup} />
        <Route path="/verify" component={VerifyEmail} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/userbookorder" component={UserBookOrder}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        <Route path="/resetpassword" component={ResetPassword}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
