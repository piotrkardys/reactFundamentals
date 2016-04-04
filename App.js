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

/*  LESSON 4-5  */
import React from 'react';

class App extends React.Component {
  constructor() {                                     //constructor of the class
    super();
    this.state = {                                    //adding new field to the class
      txt: '',                                        //fields of the 'state' field
      int: 0
    }
    this.update = this.update.bind(this)
  }
  update(event) {                                     //if some event on the page has occured
    this.setState({txt: event.target.value})          //sets the 'state' txt field (with the event value)
  }
  render() {
    return (                                                  //calling for the function Widget
                                                              //txt, update - arguments of the Widget
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.props.txt} update={this.update} />
      </div>
    )
    }

}

const Widget = (props) => {                           //function to show the results (returns updated context)
  return (                                            //returning element with the class arguments' values
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}

App.propTypes = {                                     //determining the class arguments' types
  txt: React.PropTypes.string,
  int: React.PropTypes.number.isRequired
}

App.defaultProps = {                                  //determining the class arguments' default value
  txt: 'default'
}

export default App
