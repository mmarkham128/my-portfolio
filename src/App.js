import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import  Post  from "./components/Post";
import  Project  from "./components/Project";
import  SinglePost  from "./components/SinglePost";
import NavBar from "./components/NavBar"
import "tailwindcss/tailwind.css";

function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route component={About} path='/' exact/>
    <Route component={SinglePost} path='/post/:slug'/>
    <Route component={Post} path='/post'/>
    <Route component={Project} path='/project'/>
  </Switch>
  </BrowserRouter>
  )
  
}

export default App;
