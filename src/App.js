import MainPage from "./Pages/Main/MainPage";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Admin, HomePage, LogIn, SinglePage,SignUp } from "./Routes/Routes";
import DetailsPage from "./Pages/Details/DetailsPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
        <Switch>
          <div>
            <Route exact path={HomePage} component={MainPage}/>
            <Route path={SinglePage} component={DetailsPage}/>
            <Route path={Admin} component={AdminPage}/>
            <Route path={LogIn} component={LogInPage}/>
            <Route path={SignUp} component={SignUpPage}/>
          </div>
        </Switch>
      </Router>

  );
}

export default App;
