import React from 'react';

class App extends React.Component {                   //creating component, class has a field called state
  render() {
    return <h1>Hello</h1>                             //2 ways to return HTML element
    //return React.createElement('h1', null, 'Hi');
  }
}

//const App = () => <h1>HelloFunction</h1>            //this is also right way, but function doesn't have state field

export default App
