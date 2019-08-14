//  to run use 'npm start' in terminal

//JSX Stuff
//-----------------------------------------------------------
//class vs className
/*
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
	<div className="big">  //cant use class here, reserved
    I AM A BIG DIV
  </div>
  
);
ReactDOM.render(
  	myDiv,
    document.getElementById('app')
);
*/
//---------------------------------------------------------
//Self-Closing tags
/*
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);
*/
//------------------------------------------------------------
//Javascript in your JSX in your Javascript {}
/*
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
	<h1>{2 + 3}</h1>,
  document.getElementById('app')
);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = (
	<h1>2 + 3 = {2 + 3}</h1>
);

ReactDOM.render(
	math,
  document.getElementById('app')
);
*/
//-------------------------------------------------------------
//Variables in JSX
/*
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>), document.getElementById('app'));
*/
//------------------------------------------------------------
//Variable attributes
/*
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
	<img src={goose}/>
);

ReactDOM.render(
	gooseImg,
  document.getElementById('app')
);
*/
//--------------------------------------------------------
//Event listeners in JSX
/*
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));
*/
//-----------------------------------------------------------
//JSX conditionals - if statements
/*
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;
let whichPic;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
  				<img src={pics.kitty} />
  			);
  whichPic = ( <h1> heads </h1>);
}
else {
  img = (
    			<img src={pics.doggy} />
  			);  
  whichPic = ( <h1> tails </h1>);
}

ReactDOM.render(
	img,
  document.getElementById('app')
);
ReactDOM.render(
	whichPic,
  document.getElementById('app')
);
*/
//-----------------------------------------------------
//JSX Conditionals - ternary Operator
/*
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);
*/
//----------------------------------------------------
//JSX Conditionals: && - will either do the action if true or nothing at all
/*
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;
const age = 20;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }  //will only show if not judgemental
      { age > 25 && <li>Broiled Grapefruit</li> }
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
*/
//--------------------------------------------------
//JSX Map - if you want to create a list of JSX elements use map
/*
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);  //listItems evaluates to an array

<ul>{listItems}</ul>

*/
//This is fine in JSX, not in an explicit array:
//<ul>
//  <li>item 1</li>
//  <li>item 2</li>
//  <li>item 3</li>
//</ul>
//This is also fine!
//const liArray = [
//  <li>item 1</li>, 
//  <li>item 2<li>, 
//  <li>item 3</li>
//];
//
//<ul>{liArray}</ul>
//*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>);
  // expression goes here:


// ReactDOM.render goes here:
ReactDOM.render(
	<ul>{peopleLis}</ul>,
  document.getElementById('app')
);
*/
//----------------------------------------------------
//JSX Keys
/*
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>);
  // expression goes here:


// ReactDOM.render goes here:
ReactDOM.render(
	<ul>{peopleLis}</ul>,
  document.getElementById('app')
);
*/
//-------------------------------------------------
//These are equal
/*
const greatestDivEver = <div>i am div</div>;

const greatestDivEver = React.createElement(
	"div",
  null,
  "i am div"
);
*/
//-------------------------------------------------
//Create a component instance/render a component
/*
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);
*/
//---------------------------------------------------
//Use multiline JSX in a component
/*
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
*/
//----------------------------------------------------
//Put logic in a render function
/*
import React from 'react'
import ReactDOM from 'react-dom'

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const friend = friends[1];
    return (
    	<div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}

ReactDOM.render (
	<Friend />,
  document.getElementById('app')
);
*/
//-----------------------------------------------------
//Use a conditional in a render function
/*
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);
*/
//--------------------------------------------------
//Use this in a component
/*
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
	get name() {
    return 'Erik'
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
*/
//--------------------------------------------------
//Use an Event Listener in a Component
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
	<Button />,
  document.getElementById('app')
);
*/
//----------------------------------------------
//Authorization form
/*import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let auth;
    const login = (
    	<form action="#" onSubmit={this.authorize}>
      	<input type="password" placeholder="Password"/>
        <input type="submit"/>
      </form>
    );
    if (this.state.authorized) {
      auth = 'Contact'
    }
    else {
      auth = 'Enter the Password'
    }
    const contactInfo = (
    	<ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1>{auth}</h1>
        { this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);*/
//------------------------------------------------
//Component rendering in action with import/export
/*
//ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar'

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
ReactDOM.render(
	<ProfilePage />,
  document.getElementById('app')
);

//NavBar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
*/
//-----------------------------------------------
//PROPS - to see a components props object use this.props.____
//Pass props to a component
/*
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('app'));
*/
//------------------------------------------------
//Render a components props
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='jhgfd' />, 
  document.getElementById('app')
);
*/
//-------------------------------------------------
//Pass props From Component To Component
/*
//Greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Erik"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
*/
//-------------------------------------------
//Render Different UI Based on props
/*
//Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
*/
//--------------------------------------------
//Put an Event Handler in a Component Class
//Talker.js
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';



class Talker extends React.Component {
  talk () {
		let speech = '';
  	for (let i = 0; i < 10000; i++) {
    	speech += 'blah ';
  	}
  	alert(speech);
	}
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker onClick={this.talk}/>,
  document.getElementById('app')
);

//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}
*/
//----------------------------------------------
//Pass an Event Handler as a prop
//Talker.js
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;  //onClick is just an attribute name
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>  //onClick creates an event handler
        Click me!
      </button>
    );
  }
}
//-----------------------------------------------
//Receive an Event Handler as a prop
/*
//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>  //onClick creates an event handler
        Click me!
      </button>
    );
  }
}
//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;  //onClick is just an attribute name
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
*/
//---------------------------------------------------------------
//handleEvent, onEvent, and this.props.onEvent
/*
//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;  //onClick is just an attribute name
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>  //onClick creates an event handler
        Click me!
      </button>
    );
  }
}
//---------------------------------------------
//this.props.children will return everything in between a component’s opening and closing JSX tags.
/*
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>asdf</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//List.js
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
*/
//--------------------------------------------------
//Can set default props
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
  <Button text="bvj"/>, 
  document.getElementById('app')
);
*/
//----------------------------------------------
//State - setting initial state
/*
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);
*/
//-----------------------------------------
//Access a components state
/*
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);
*/
//------------------------------------------
//Update state with this.setState (automatically renders after setting state) - BUTTON THAT CHANGES COLOR (2)
/*
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
*/
//------------------------------------------
//Random Color Picker
/*
//Random.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.js'

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [100, 0, 0] }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick() {
    this.setState({ 
      color: this.chooseColor()
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
					Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button onClick={this.handleClick} light={this.isLight()}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);

//Button.js
import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button 
        onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}
*/
//---------------------------------------------
//Pass a components state from a stateful component to a stateless component
/*
//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name}/>
  }
}

ReactDOM.render(
	<Parent />,
  document.getElementById('app')
);

//Child.js
import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
*/
//---------------------------------------------
/*
A React component should use props to store information that can be changed, but can only be changed by a different component.

A React component should use state to store information that the component itself can change. (this.setState)
*/
//---------------------------------------------
//Change rendered name through a dropdown menu
//Child components (stateless) update their parents state
//1. Define an event handler method within the parent
//2. Pass the event handler - bind this.methodName to the current value of this and store in this.methodName
//                          - this.methodName = this.methodName.bind(this);
//                          - pass the method down to child through attribute in parent render function
//3. Recieve the event handler
/*
//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
	
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);

//Child.js
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
  	super(props);
    this.handleChange = this.handleChange.bind(this);
	}
  
  handleChange(e) {
    const name = e.target.value;  //this gets the value selected from the dropdown
    this.props.onChange(name);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>  //select is a dropdown menu
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
*/
//---------------------------------------------
//Child components update their siblings props through parent
//you should have have one stateless component display information, and a different stateless component offer the ability to change that information
/*
A stateful component class defines a function that calls this.setState.

The stateful component passes that function down to a stateless component.

That stateless component class defines a function that calls the passed-down function, 
and that can take an event object as an argument. (Child.js, lines 10-13)

The stateless component class uses this new function as an event handler. 

When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item)

The stateful component class passes down its state, distinct from the ability to change its state, 
to a different stateless component.

That stateless component class receives the state and displays it.

An instance of the stateful component class is rendered. One stateless child component displays the state, 
and a different stateless child component displays a way to change the state.
*/
/*
//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

//Child.js
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

//Sibling.js
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
*/
//----------------------------------------------------
//Programming pattern~
//Video player - More passing props, parent controls rendering (App.js), child controls menu (Menu.js), sibling controls video (Video.js)
/*
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  
  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//Menu.js
import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }
  
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="button" name="src" value="fast" /> 
        <input type="button" name="src" value="slow" /> 
        <input type="button" name="src" value="cute" /> 
        <input type="button" name="src" value="eek" /> 
      </form>
    );
  }
}

//Video.gif to mp4
*/
//---------------------------------------------------
//In-line CSS styling
/*
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style= {{ background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
*/
//---------------------------------------------------
//Multiple styles can be put into a const variable
/*
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',      //style values (background/color) must be camelcase/one word, no hyphens
  color: 'darkred',
  marginTop: '100px',
  fontSize: '50px'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
*/
//------------------------------------------------------
//Can just put number in style, px is assumed
/*
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);
*/
//-------------------------------------------------------
//Share Styles Across Multiple Components
/*
//Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles'

const divStyle = {
  background: styles.background,
  height: '100%'
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
	<Home />, 
	document.getElementById('app')
);

//styles.js
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize: fontSize,
  padding: padding,
  color: color
};

//AttentionGrabber.js
import React from 'react';
import { styles } from './styles'

const h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

export class AttentionGrabber extends React.Component {
	render() {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
}
*/
//----------------------------------------------------------
//Rotating GuineaPig pictures
//Separating container components from presentational components - programming pattern
//a presentational component will always get rendered by a container component
//GuineaPigs will get rendered by GuineaPigsContainer
/*
//GuineaPigsContainer.js
import React from 'react';
import ReactDOM from 'react-dom';
import {GuineaPigs} from '../components/GuineaPigs'

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentGP: 0 };
    this.interval = null;
    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <GuineaPigs src={src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);

//GuineaPigs.js
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
*/
//------------------------------------------------------
//Stateless Functional Components
/*
If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. 
Instead of using React.Component, you can write it as a JavaScript function!

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
*/
//-------------------------------------------------------
//Stateless Functional Components and Props
/*
// Normal way to display a prop:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}

// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
  	let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
	let title = props.title;
  return <h1>{title}</h1>;
}
*/
/*
import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
  	<div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
  );
}

//EQUIVALENT ***

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
*/
//-------------------------------------------------------
//Proptypes
//If a component class expects a prop, then you can give that component class a propType!
/*
import React from 'react';

export class Runner extends React.Component {
  render() {
  	let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i){
      return <li key={race + i}>{race}</li>;
    });

    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        { this.props.isMetric && 
          <h2>One Time I Ran {km} Kilometers!</h2> }
        { !this.props.isMetric && 
          <h2>One Time I Ran {miles} Miles!</h2> }
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}

Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,
  style:     React.PropTypes.object.isRequired,   //can remove .isRequired
  isMetric:  React.PropTypes.bool.isRequired,     //isRequired promts console warning if prop isnt sent
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};
*/
//-----------------------------------------------------
//Add properties to propTypes
/*
//BookList.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller 
              title="Glory and War Stuff for Dads" 
              author="Sir Eldrich Van Hoorsgaard" 
              weeksOnList={10} />
            <BestSeller 
              title="The Crime Criminals!" 
              author="Brenda Sqrentun" 
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers" 
              author="Malcolm McLaren" 
              weeksOnList={600} />
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BookList />,
  document.getElementById('app')
);

//BestSeller.js
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

ORRRRR

export const BestSeller = (props) => {
  return (
      <li>
        Title: <span>
          {props.title}
        </span><br />
        
        Author: <span>
          {props.author}
        </span><br />
        
        Weeks: <span>
          {props.weeksOnList}
        </span>
    </li>
  );
}

BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired
}
*/
//----------------------------------------------------------
//React Forms - input onChange Event Handler
//shows typed commands in input box realtime
/*
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
		super(props);
		this.state = { userInput: '' };
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(e) {
	  this.setState({
	    userInput: e.target.value
	  });
	}
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />  //Initially set to '', on input update to whatever is typed 
        <h1>{this.state.userInput}</h1>                                                     //in input box
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
*/
//-------------------------------------------------------
//Controlled vs Uncontrolled components
/*
An uncontrolled component is a component that maintains its own internal state. A controlled component is a component
that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.
*/
/*
Accessing info in <input type='text' /> element:
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
*/
//-------------------------------------------------------
// strategy - separating container components from display components
//-------------------------------------------------------
//Mounting Lifecycle Methods
//A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called.
// - componentWillMount - when you want to do stuff before the first render
// - render
// - componentDidMount - when you want to do stuff after render has finished loading - AJAX requests to fetch initial data from an API
//                     - is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks
//                     - also the place to set timers using setTimeout or setInterval.
//When a component mounts, it automatically calls these three methods, in order.
/*
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }
  render() {
    alert('Flashy is rendering!');
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {  //Thanks to setTimeout, <Flashy /> will render twice, with a two-second pause in between.
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);
*/
//--------------------------------------------------
//Updating Lifecycle Methods
//The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.
// - componentWillReceiveProps - when a component instance updates, gets called before the rendering begins
// - shouldComponentUpdate - When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.
//                         - The best way to use shouldComponentUpdate is to have it return false only under certain conditions. 
//                         - If those conditions are met, then your component will not update.
// - componentWillUpdate - You cannot call this.setState from the body of componentWillUpdate
//                       - main purpose of componentWillUpdate is to interact with things outside of the React architecture. 
//                       - If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API
// - render
// - componentDidUpdate - When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading
//                      - usually used for interacting with things outside of the React environment, like the browser or APIs.
//Whenever a component instance updates, it automatically calls all five of these methods, in order.
/*
//---------componentWillRecieveProps example:
//TopNumber.js
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
  
  componentWillReceiveProps(nextProps) {              //When the component recieves a prop, use it to check/update state
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
*/
//------------------------------------------------------------
//---------shouldComponentUpdate example: (returns true or false, true re-renders, false doesnt)
//Target.js
/*
import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.number != nextProps.number;  //if new number to be rendered is same as previous rendered number, dont re-render
  }
  
  render() {
    let visibility = this.props.number ? 'visible' : 'hidden';
    let style = {
      position: 'absolute',
      left: random(0, 100) + '%',
      top: random(0, 100) + '%',
      fontSize: 40,
      cursor: 'pointer',
      visibility: visibility
    };

    return (
      <span style={style} className="target">
        {this.props.number}
      </span>
    )
  }
}

Target.propTypes = {
  number: React.PropTypes.number.isRequired
};
*/
//----------------------------------------------------
//---------componentWillUpdate example:
/*
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillUpdate(nextProps, nextState) {
    if(document.body.style.background != yellow && this.state.highest >= 950*1000) {
      document.body.style.background = yellow;
    }
    else if(!this.props.game && nextProps.game) {
      document.body.style.background = 'white';
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};
*/
//------------------------------------------------
//---------------componentDidUpdate example:
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }
	
  componentDidUpdate(prevProps, prevState) {
  	  if (this.state.latestClick < prevState.latestClick) {  //Check a condition to end the game
  			this.endGame();
			}
  }
  
  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
*/
//-----------------------------------------------------
//Unmounting LifeCycle method
// componentWillUnmount - A component’s unmounting period occurs when the component is removed from the DOM
//                      - This could happen if the DOM is rerendered without the component, or if the user navigates
//                      -  to a different website or closes their web browser
//                      - componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods 
//                      - that require cleanup, then componentWillUnmount is where you should put that cleanup
/*
//Enthused.js
import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }
	
  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './Enthused';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enthused: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEnthusiasm() {
    this.setState({
      enthused: !this.state.enthused
    });
  }

  setText(text) {
    this.setState({ text: text });
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({ text: text });
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.enthused) {
      button = (
        <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
      );
    } else {
      button = (
        <button onClick={this.toggleEnthusiasm}>
          Add Enthusiasm!
        </button>
      );
    }

    return (
      <div>
        <h1>Auto-Enthusiasm</h1>
        <textarea rows="7" cols="40" value={this.state.text} 
          onChange={this.handleChange}>
        </textarea>
        {button}
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
*/
//---------------------------------------------------
