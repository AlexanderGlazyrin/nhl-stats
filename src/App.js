import React from 'react';
import List from "./components/List";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="container">
      <Nav/>
      <Form/>
      <Alert/>
      <List/>
    </div>
  );
}

export default App;
