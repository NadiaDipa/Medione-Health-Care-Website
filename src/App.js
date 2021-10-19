import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Home from './components/Home/Home';
// import Courses from './components/Courses/Courses';
// import NotFound from './components/NotFound/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Services from './components/Services/Services';
// import Contact from './components/Contact/Contact';
// import About from './components/AboutUs/About';



function App() {
  // useEffect(() =>{
  //   fetch('./info.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }, [])
  return (
    <div>
      <Router>
        <Header></Header>
      <Switch>
        {/* <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path = "/Home" >
          <Home></Home>
        </Route>
        <Route exact path = "/Courses" >
          <Courses></Courses>
        </Route>
        <Route exact path = "/Services" >
          <Services></Services>
        </Route>
        <Route exact path = "/Contact" >
          <Contact></Contact>
        </Route> */}
        <Route path = "/login" >
          <Login></Login>
        </Route>
         <Route exact path = "/register" >
          <Register></Register>
        </Route>
        {/* <Route exact path="*">
          <NotFound></NotFound>
        </Route> */}
      </Switch>
      {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
