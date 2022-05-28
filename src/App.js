import Navbar from './Components/navbar'
import Home from './Screens/Home';
import Login from './Screens/login.js';
import Register from './Screens/register';
import Viewcourse from "./Screens/viewcourse";
import Create from './Screens/create';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">{ user ?<Home /> : <Register />}</Route>
        <Route path="/register">{ user ?<Register /> : <Register />}</Route>
        <Route path="/login">{ user ?<Login/> : <Login />}</Route>
        <Route path="/viewcourse">{ user ?<Viewcourse /> : <Register />}</Route>
        <Route path="/create">{ user ?<Create /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
