import React from 'react';
import List from "./components/List";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav/>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
