/*  LESSONS 1-3
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
*/

/*  LESSON 4  */
import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (                                          //returning element with the class arguments' values
      <div>
        <h1>{this.props.txt}</h1>
        <h2>{this.props.int}</h2>
      </div>
    )
  }
}

App.propTypes = {                                     //determining the class arguments' types
  txt: React.PropTypes.string,
  int: React.PropTypes.number.isRequired
}

App.defaultProps = {                                  //determining the class arguments' default value
  txt: 'default'
}

ReactDOM.render(<App int={13} />, document.getElementById('app')); //the name of the class with arguments is given as first argument of render function

export default App
