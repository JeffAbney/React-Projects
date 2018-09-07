//Start importing variables ********************************
import React, { Component } from 'react';
import './App.css';

const APIURL = 'https://talaikis.com/api/quotes';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
let randomNumber = () => Math.floor((Math.random() * 5) + 1);
const quotes = [];
//End importing *********************************************


//Start App Component *************************************************

class App extends React.Component {

  constructor(props) {
  	super(props);

  	this.state ={
  		colorCount: randomNumber(),
  		quoteCount: 0,
  		data: [],
  		quote: '"Your quote is loading"',
  		author: "Random Quote Machine" 
  	};
  	this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
      	this.setState({
      		colorCount: Math.floor((Math.random() * 5) + 1),
      		quoteCount: this.state.quoteCount+1,
      		quote: this.state.cache[this.state.quoteCount+1].quote,
      		author: this.state.cache[this.state.quoteCount+1].author, 
      	 });
  }


  //Start API call****************************************

  componentDidMount() {
  		document.getElementById("new-quote").disabled = true;

  		fetch(APIURL)
      	.then(response => response.json())
      	.then(data => this.setState({
      		colorCount: randomNumber(),
      		cache: data,
      		quote: data[0].quote,
      		author: data[0].author,
      	}))
      	.then(document.getElementById("new-quote").disabled = false);


  }
    //End API call*******************************************

//Start render HTML ****************************************************
  render() {
    return (	
      <div className="page">	
		<div className={"grid-container color-"+this.state.colorCount} id="quote-box">
			<div className={"text-container"}>
				<div className={"quote-text color-"+this.state.colorCount} id ="text">{this.state.quote}</div>
			</div>
			<div className="author-container">
				<div className={"auto-text color-"+this.state.colorCount} id="author">{this.state.author}</div>
			</div>
			<div className="twitter-link-container">
				<div className="twitter-icon">
					<a className="twitter-share-button" id="tweet-quote" href={tweetUrl+this.state.quote+" -"+this.state.author} target ="_blank"><i class={"fab fa-twitter color-"+this.state.colorCount}></i></a> 
				</div>
			</div>
			<button className={"new-quote-btn color-"+this.state.colorCount} id="new-quote" onClick = {this.handleClick}>New Quote</button>
		</div>
		<div className="credit">
			<p className={"color-"+this.state.colorCount}>Designed and Developed by <a href="mailto: jeffmabney@gmail.com">Jeff Abney</a></p>
		</div>
	  </div>	
    );
  }
}

export default App;


//End App Component **********************************************

