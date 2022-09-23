import './App.css';
// import Show from './components/Show';
// import Create from "./components/Create"
// // import Edit from "./components/Edit"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      
      <Login></Login>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Show/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter> */}

     
    </div>
  );
}

export default App;
