import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About Us"/>
      
      <div className="container my-3">
      <TextForm heading = "Enter the text"/>
      </div>

      {/* in used default aboutText */}
      {/* <Navbar title = "TextUtils" /> */}
      
      {/* Default Props */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
