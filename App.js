import React from 'react';

class App extends React.Component {                   //creating component, class has a field called state
  render() {
    //return <h1>Hello</h1>                           //2 ways to return HTML element
    //return React.createElement('h1', null, 'Hi');

    //return <div><h1>Hi</h1><h2>hello</h2></div>     //we can "return" more than 1 element when we include them into larger element (e.g. div)
                                                      //in that way we still returning 1 element, but with more elements inside
    return (                                          //if we want to format element which we are returning, we need to take it into the brackets
      <div>
        <h1>Hello</h1>
        <h1>My name is Piotrek</h1>
      </div>
    )
  }
}

//const App = () => <h1>HelloFunction</h1>            //this is also right way, but function doesn't have state field

export default App
