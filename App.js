/*  LESSONS 1-3  */ /*
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

/*  LESSON 4-7  */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {                                     //constructor of the class
    super();
    this.state = {                                    //adding new field to the class
      red: 50,                                        //fields of the 'state' field
      green: 50,
      blue: 50
    }
    this.update = this.update.bind(this)
  }
  update(event) {                                     //if some event on the page has occured
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value, //searching the node with valid ref (red, green, blue)
      green: ReactDOM.findDOMNode(this.refs.green).value, //and updating fields of the class
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })                                                //updates the 'state' field
  }
  render() {
    return (                                          //three sliders with unique ref values
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    )
    }

}

class Slider extends React.Component {                //class of the Slider (if value of the input changes it calls update method)
  render() {
    return <input type="range" min="0" max="100" onChange={this.props.update} />
  }
}

/*
const Widget = (props) => {                           //function to show the results (returns updated context)
  return (                                            //returning element with the class arguments' values
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}
*/

App.propTypes = {                                     //determining the class arguments' types
  txt: React.PropTypes.string,
  int: React.PropTypes.number.isRequired
}

App.defaultProps = {                                  //determining the class arguments' default value
  txt: 'default'
}

export default App
