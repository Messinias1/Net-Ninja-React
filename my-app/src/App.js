import React from 'react';
import Ninjas from './ninjas';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome :)</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <br></br>
      <Ninjas name="Yoshi" age="30" belt="red"/>
    </div>
  );
}

export default App;
