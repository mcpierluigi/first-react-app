import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ClassComponent from "./components/ClassComponent";
import img from "./components/IMG_8395.JPG";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonComponent ButtonContent="IlMioBottone" />
          <ClassComponent src={logo}/>
       </header>  
      </div>
    </>
  );
}

export default App;

