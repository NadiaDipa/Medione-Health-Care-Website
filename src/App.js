import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import MainServices from './components/Services/MainServices/MainServices';
import Home from '../src/components/Home/Home/Home';
import OurDoctors from './components/OurDoctors/OurDoctors';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path = "/services" >
          <MainServices></MainServices>
        </Route>
        <Route path = "/doctors" >
          <OurDoctors></OurDoctors>
        </Route>
        <Route path = "/contact" >
          <Contact></Contact>
        </Route>
        <Route path = "/about" >
          <About></About>
        </Route>
        <Route path = "/login" >
          <Login></Login>
        </Route>
         <Route path = "/register" >
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
