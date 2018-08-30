//Start importing variables ********************************
import React, { Component } from 'react';
import './App.css';

//End importing *********************************************


//Start App Component *************************************************

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state ={
  		quote: '"Your quote is loading"',
  		author: "Random Quote Machine" 
  	};

  }

  //Define functions****************************************

  //End functions*******************************************

  componentDidMount() {
  	fetch('https://talaikis.com/api/quotes')
      .then(response => response.json())
      .then(data => this.setState({ 
      	quote: data[0].quote,
      	author: data[0].author 
       }));

      console.log(this.state);
  	//Start API call *****************************************************
/* const REQUEST = new XMLHttpRequest();
let count = 0;

REQUEST.open('GET', 'https://talaikis.com/api/quotes', true);

REQUEST.onload = function(){
let quoteCache = JSON.parse(this.response);
this.setState({
	data: quoteCache
})

if(REQUEST.status >= 200 && REQUEST.status <400) {

	console.log(quoteCache[0].author)

	} else {
		console.log('error');
	}
} 
//End API call *********************************************************
//Send API request ******************
REQUEST.send(); */

  }

  render() {
    return (
		<div className="grid-container" id="quote-box">
			<div className="text-container">
				<div className="quote-text" id ="text">{this.state.quote}</div>
			</div>
			<div className="author-container">
				<div className="auto-text" id="author">{this.state.author}</div>
			</div>
			<div className="twitter-link-container">
				<div className="twitter-icon" id="tweet-quote">tweet</div>
			</div>
			<button className="new-quote-btn" id="new-quote">New Quote</button>
		</div>
    );
  }
}

export default App;


//End App Component **********************************************