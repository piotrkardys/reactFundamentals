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

/*  LESSON 4-7  */ /*
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


//const Widget = (props) => {                           //function to show the results (returns updated context)
//  return (                                            //returning element with the class arguments' values
//    <div>
//      <input type="text" onChange={props.update} />
//      <h1>{props.txt}</h1>
//    </div>
//  )
//}


App.propTypes = {                                     //determining the class arguments' types
  txt: React.PropTypes.string,
  int: React.PropTypes.number.isRequired
}

App.defaultProps = {                                  //determining the class arguments' default value
  txt: 'default'
}
*/

/*  LESSON 8-9 */
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {                                     //constructor of the class
    super();
    this.state = { val: 0 }                           //val: 0
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({ val: this.state.val+1 })          //if update then increment field 'val'
  }

  componentWillMount() {                              //if there is no element on the page and will be mounted
    console.log('mounting..')
  }
  componentDidMount() {                               //if the element is mounted
    console.log('mounted!')
  }
  componentWillUnmount() {                            //if there is element on the page and will be unmounted
    console.log('unmounting..')
  }
  render() {                                          //rendering of the element on the page
    //return <Button>React<Heart/></Button>             //classes & functions can be nasted
    console.log('rendering..')
    return <button onClick={this.update}>{this.state.val}</button>  //if clicked call the update method
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {                                       //methods for mounting and unmounting element (class of the element - App)
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (                                        //there are 2 buttons: to mount and unmount the button on the page (if mount - calls mount() method; if unmount - calls unmount() method)
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

//class Button extends React.Component {
//  render() {
//    return <button>{this.props.children}</button>     //this.props.children -> returns what is between marks of the class
//  }
//}

//const Heart = () => <span className="glyphicon glyphicon-heart"></span> //Bootstrap's class

//export default App
export default Wrapper
