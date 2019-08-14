//library NOT a framework
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(    //This method renders JSX expression(s),Passes 2 JSX arguments, only updates DOM elements that have changed
                <h1>Hello world</h1>,    //JSX expression, looks like HTML -> gets converted to JS/react, wrap in <div></div> if multiple JSX expressions
                document.getElementById('app')  //where on the screen the above element will appear (puts in body, main id="app" - index.html)
               );  
//---------------------------
const toDoList = (   //Can save a JSX expression(s) to a variable
    <ol>
        <li>Learn React</li>
        <li>Become a developer</li>
    </ol>
);

const myList = (
	<ul>
    <li>Hello</li>
    <li>there</li>
    <li>This is a test</li>
  </ul>
);

ReactDOM.render(   //Can render that variable
    toDoList,
    document.getElementById('app')  //Select an HTML element with an id of 'app'  
);
//--------------------------
const myDiv = (       //Cannot use 'class' as an attribute name, must use className, when rendered className attributes are rendered as class attributes
	<div className="big">   
    I AM A BIG DIV
  </div>
  
);

ReactDOM.render(
  	myDiv,
    document.getElementById('app')
);
//----------------------------
//In JSX, you have to include the forward-slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:
//  <br />   //Fine
//  <br>     //Not fine

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />   //  <--
    <article>
      I LIKE TO SIT
      <br />    //  <--
      JENKINS IS MY NAME
      <br />    //  <--
      THANKS HA LOT
    </article>
  </div>
);
//---------------------------
ReactDOM.render(
  <h1>{2 + 3}</h1>,  //can put Javascript into JSK expressions which will evaluate if wrapped in {}
  document.getElementById('app')
);

const math = (
	<h1>2 + 3 = {2 + 3}</h1>  //  2 + 3 = 5
);

ReactDOM.render(
  math,
  document.getElementById('app')
);
//----------------------------
//Can access variables from within JSX expression
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>), document.getElementById('app'));
//----------------------------
//Can render variables containing JSX containing Javascript variable
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const gooseImg = (
	<img src={goose}/>
);

ReactDOM.render(
	gooseImg,
  document.getElementById('app')
);
//-----------------------------
//onClick/onMouseOver event listeners
function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }
  
  const kitty = (
      <img onClick={makeDoggy}   //Can replace onClick with onMouseOver
          src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
          alt="kitty" />
  );
  
  ReactDOM.render(kitty, document.getElementById('app'));
  //---------------------------
  //if statements must be done outside of JSX expressions
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
  }
  else {
    img = (
            <img src={pics.doggy} />
          );  
  }
  
  ReactDOM.render(
    img,
    document.getElementById('app')
  );
  //-----------------------------
  //Ternary operator   x ? y : z   (if x true -> return y, if x false -> return z)
  function coinToss () {
    // Randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  
  const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
  };
  
  const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;  //[] imply JSX syntax, {} imply javascript syntax 
  
  ReactDOM.render(
      img, 
      document.getElementById('app')
  );
//------------------------------
//Conditionals : &&
//Will run the code if condition is true or show nothing at all if false
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;
const age = 20;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      { age > 25 && <li>Broiled Grapefruit</li> }
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
//----------------------------------------
//can map arrays to array of JSX elements
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>);

// ReactDOM.render goes here:
ReactDOM.render(
	<ul>{peopleLis}</ul>,
  document.getElementById('app')
);

//const liArray = [           =       rendering <ul>{liArray}</ul>       =           <ul>
//  <li>item 1</li>,                                                                   <li>item 1</li>
//  <li>item 2<li>,                                                                    <li> item 2</li> 
//  <li>item 3</li>                                                                  </ul>
//];
//----------------------------------------
//A list in JSX can include keys, a list needs keys if list-items have memory from one render to next or a list's order might be shuffled
/* <ul>
     <li key="li-01">Example1</li>
     <li key="li-02">Example2</li>
     <li key="li-03">Example3</li>
   </ul>  */
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>); //create unique key for each loop
                                                                                                                                                                           //of map
ReactDOM.render(
    <ul>{peopleLis}</ul>,
     document.getElementById('app')
);
//----------------------------------------
//React code can be written without JSX, these two are equivalent:
const greatestDivEver = <div>i am div</div>;

const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
//----------------------------------------
//components are small reusable chunks of code responsible for a job, usaually rendering some HTML
//Every component must come from a component class
//Class name must start with capital letter
import React from 'react';   //Create JavaScript objects
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {  //subclassing React.Component creates new component class
  render() {                                      //Like a factory that produces components
    return <h1>Hello world</h1>;   //Must contain render and return statements
                                   //If multiple lines of JSX use ();
  }
}

ReactDOM.render(
	<MyComponentClass />,  //creates react component, calls MyComponentClass render method, ReactDOM renders 'Hello world'
	document.getElementById('app')
);
//------------------------------------------
class ShowQuote extends React.Component {
    render() {
      return (
          <blockquote>
            <p>
                What is important now is to recover our senses.
            </p>
            <cite>
                <a target="_blank" 
                    href="https://en.wikipedia.org/wiki/Susan_Sontag">
                    Susan Sontag
                </a>
            </cite>
          </blockquote>
      );
    }
  }
  
  ReactDOM.render(
      <ShowQuote />,
    document.getElementById('app')
  );
//------------------------------------------
//Using a variable attribute in a component
const owl = {
    title: 'Excellent Owl',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};
  
// Component class starts here:
class Owl extends React.Component {
    render() {
        return (
          <div>
              <h1>{owl.title}</h1>
               <img src={owl.src} alt={owl.title}/>
          </div>
        );
    }
}
  
ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);
//---------------------------------------
//Putting logic in a render function, calculations should go INSIDE the class render method
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
        const friend = friends[1];  //Calculations go here
        //const n = Math.floor(Math.random() * 10 + 1);
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
//----------------------------------------
//Using a conditional in a render function
//One way
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
//-----------------------------Another way
const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);
//------------------------------------
//this. and get functions
class MyName extends React.Component {
	// name property goes here:
	get name() {  //getter function
      return 'Erik'
    }

  render() {
    return <h1>My name is {this.name}.</h1>;  //this.name calls getter function
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
//-------------------------------------
//Event listener in a component
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
//--------------------------------------
//Contact authorization form, will only show info after correct password is entered
import React from 'react';
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
);
//-----------------------------------
//Can put a component in a render function
class OMG extends React.Component {
    render() {
      return <h1>Whooaa!</h1>;
    }
  }
  
class Crazy extends React.Component {
    render() {
      return <OMG />;
    }
}
//-------------------------------------
//render components/variables in another file by importing the component file
//  NavBar component is in NavBar.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar'   //   <----------------

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
//-----------------------------------------
//when importing a variable/component from a file that is not the current file, import and export must be used
//ProfilePage.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar'  // <--------------

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
//NavBar.js
import React from 'react';

export class NavBar extends React.Component {  // <----------------
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {    //MAP USAGE*******
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
//-------------------------------------
//Can pass 'props' (properties) to a component
//Accessing arrray/component props:
/* A component with an array as a prop */
<SomeComponent arr={["A", "B"]} />  //this goes in the ReactDOM.render()

/* To access the second element of the array */
this.props.arr[1]
//If the prop is an object, you can access a specific value using the corresponding key,

/* A component with an object as a prop */
<SomeComponent obj={{key: "value"}} />

/* To access the value of the key */
this.props.obj["key"]
//--------------------------------------
//Rendering a component prop
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;   // <----- Note the this.props.name-of-info syntax
  }                                                     //this.props.firstName replaced with 'Groberta'
}

ReactDOM.render(
  <Greeting firstName='Groberta' />, 
  document.getElementById('app')
);
//-------------------------------------
//Passing props from one component to another component
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
        <Greeting name="Erik"/>  // use {} when passing props that arnt strings, <Greeting name={1}/>
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
//Greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
//-------------------------------------------
//Render different UI based on props
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
//----------------------------------------
//Put an Event Handler in a Component Class
class Example extends React.Component {
    handleEvent() {
      alert(`I am an event handler.
        If you see this message,
        then I have been called.`);
    }
  
    render() {
      return (
        <h1 onClick={this.handleEvent}>
          Hello world
        </h1>
      );
    }
}
//-----------------------------------------
//Pass an event handler as a prop
//Talker.js
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
      return <Button onClick={this.handleClick}/>;  //onClick is just an attribute name, when called as a prop in Button.js
    }                                               //the handleClick() handler function runs
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
//--------------------------------------
//Every component's props object has a children property
//this.props.children will return everything in between a components opening and closing JSX tags
//multiple children will be returned as an array, single will be returned as single child
//App.js
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
export class List extends React.Component {
    render() {
      let titleText = `Favorite ${this.props.type}`;  // <----- backtic formatting 
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
//-------------------------------------------
//Default props
class Button extends React.Component {
    render() {
      return (
        <button>
          {this.props.text}   //if a 'text' prop isnt passed the button would normally be blank
        </button>
      );
    }
}
  
// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };  //This creates a default if no prop is passed
  
ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
//--------------------------------------------------
//Setting/accesssing component's state
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
//-------------------------------------------------
//Update state within a component with this.setState
//whenever you define an event handler that uses 'this', you need to add this.methodName = this.methodName.bind(this) to your constructor function.
//you can’t call this.setState() from inside of the render function
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);  //since this.something is used in toggleMood() we need this line
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });  //setState call automatically re-renders
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));
//Another example w/out the this.something bind call---------------------------------
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color : green }
  
  }
  
  changeColor() {
  	const newColor = this.state.color == green ? yellow : green;
    this.setState({color : newColor})  //setState call automatically re-renders
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={(e) => this.changeColor()}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
	<Toggle />,
  document.getElementById('app')
);
//------------------------------------------------------
//Random Color Picker
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
//-----------------------------------------
//Stateless componenets inherit can inherit state from stateful components
