import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';



function App() {

  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={UserDetails} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
