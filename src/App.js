import "./App.css";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import React from 'react';
import TextForm from "./Components/TextForms";
// import Alert from "./Components/Alert";

function App() {
 
  return (
    <div>
      <Header title="Text UTILIS" />
      <div className="container my-3 ">
        <TextForm heading="Enter the text here" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
