//Start importing variables ********************************
import React, { Component } from 'react';
import './App.css';

const APIURL = 'https://talaikis.com/api/quotes/random';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
//End importing *********************************************


//Start App Component *************************************************

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state ={
  		quote: '"Your quote is loading"',
  		author: "Random Quote Machine" 
  	};
  	this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
	fetch(APIURL)
      	.then(response => response.json())
      	.then(data => this.setState({ 
      		quote: data.quote,
      		author: data.author 
      	 }));
  }
  //Start API call****************************************

  componentDidMount() {
  		fetch(APIURL)
      	.then(response => response.json())
      	.then(data => this.setState({ 
      		quote: data.quote,
      		author: data.author 
      	 }));
  }
    //End API call*******************************************

//Start render HTML ****************************************************
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
				<div className="twitter-icon" id="tweet-quote"><a className="twitter-share-button" href={tweetUrl+this.state.quote+" -"+this.state.author} alt="Twitter icon" target ="_blank">Tweet</a> </div>
			</div>
			<button className="new-quote-btn" id="new-quote" onClick = {this.handleClick}>New Quote</button>
		</div>
    );
  }
}

export default App;


//End App Component **********************************************