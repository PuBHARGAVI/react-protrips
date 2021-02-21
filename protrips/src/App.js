import './App.css';
import HomeComponents from './Components/HomeComponents';
import AddComponents from './Components/AddComponents';
import ListComponents from './Components/ListComponents';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Router><div><Header/></div>
    <div className="App">
     <Switch>
       <Route exact path="/" component={HomeComponents}/>
       <Route path="/AddComponents" component={AddComponents}/>
       <Route path="/ListComponents" component={ListComponents}/>
     </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;