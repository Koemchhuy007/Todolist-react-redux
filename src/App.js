
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddList from './components/AddList';
import CompletedList from './components/CompletedList';
import Home from './components/Home';
import ListDetail from './components/ListDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add-List" component={AddList}/>
        <Route path="/list-detail" component={ListDetail}/>
        <Route path= "/completed-list" component={CompletedList}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
