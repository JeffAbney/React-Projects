//Start importing variables ********************************
import React, { Component } from 'react';
import './App.css';

const APIURL = 'https://talaikis.com/api/quotes/random';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
//End importing *********************************************


//Start App Component *************************************************

class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state ={
  		count: Math.floor((Math.random() * 5) + 1),
  		quote: '"Your quote is loading"',
  		author: "Random Quote Machine" 
  	};
  	this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
	fetch(APIURL)
      	.then(response => response.json())
      	.then(data => this.setState({ 
      		count: Math.floor((Math.random() * 5) + 1),
      		quote: data.quote,
      		author: data.author 
      	 }));
  }
  //Start API call****************************************

  componentDidMount() {
  		fetch(APIURL)
      	.then(response => response.json())
      	.then(data => this.setState({ 
      		count: Math.floor((Math.random() * 5) + 1),
      		quote: data.quote,
      		author: data.author 
      	 }));
  }
    //End API call*******************************************

//Start render HTML ****************************************************
  render() {
    return (	
      <div className="page">	
		<div className={"grid-container color-"+this.state.count} id="quote-box">
			<div className={"text-container"}>
				<div className={"quote-text color-"+this.state.count} id ="text">{this.state.quote}</div>
			</div>
			<div className="author-container">
				<div className={"auto-text color-"+this.state.count} id="author">{this.state.author}</div>
			</div>
			<div className="twitter-link-container">
				<div className="twitter-icon" id="tweet-quote">
					<a className="twitter-share-button" href={tweetUrl+this.state.quote+" -"+this.state.author} target ="_blank"><i class={"fab fa-twitter color-"+this.state.count}></i></a> 
				</div>
			</div>
			<button className={"new-quote-btn color-"+this.state.count }id="new-quote" onClick = {this.handleClick}>New Quote</button>
		</div>
		<div className="credit">
			<p className={"color-"+this.state.count}>Designed and Developed by <a href="mailto: jeffmabney@gmail.com">Jeff Abney</a></p>
		</div>
	  </div>	
    );
  }
}

export default App;


//End App Component **********************************************

