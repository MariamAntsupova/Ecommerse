import MainPage from "./Pages/Main/MainPage";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Admin, HomePage, SinglePage } from "./Routes/Routes";
import DetailsPage from "./Pages/Details/DetailsPage";
import AdminPage from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <Router>
        <Switch>
          <div>
            <Route exact path={HomePage} component={MainPage}/>
            <Route path={SinglePage} component={DetailsPage}/>
            <Route path={Admin} component={AdminPage}/>
          </div>
        </Switch>
      </Router>

  );
}

export default App;
