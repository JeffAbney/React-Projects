//Start importing variables ********************************
import React, { Component } from 'react';
import './App.css';
import logo from './JA_white.png'

const APIURL = 'https://talaikis.com/api/quotes';
const tweetUrl = "https://twitter.com/intent/tweet?text=";
let randomNumber = () => Math.floor((Math.random() * 4)) + 1;
//End importing *********************************************


//Start App Component *************************************************

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colorCount: randomNumber(),
      quoteCount: "",
      data: [],
      quote: "Your quote is loading",
      author: "Random Quote Machine",
      btnDisabled: true,
      ready: false 
    };
    this.handleClick = this.handleClick.bind(this);
    this.APIFetch = this.APIFetch.bind(this);
    this.reset = this.reset.bind(this);
  }

  APIFetch() {
      fetch(APIURL)
        .then(response => response.json())
        .then(data => this.setState({

          quoteCount: 0,
          cache: data,
          quote: data[0].quote,
          author: data[0].author,
          btnDisabled: false,
          ready: true
        }))
    }

  reset() {
    this.setState({
      btnDisabled: true,
    })
    this.APIFetch();
  }

  handleClick(){
      this.state.quoteCount === 100 ? this.reset() 
      :
        this.setState({
          colorCount: Math.floor((Math.random() * 4) + 1),
          quoteCount: this.state.quoteCount+1,
          quote: this.state.cache[this.state.quoteCount+1].quote,
          author: this.state.cache[this.state.quoteCount+1].author, 
         });
  }


//Start API call****************************************

  componentDidMount() {
    this.APIFetch();
  }
//End API call*******************************************

//Start render HTML ****************************************************
  render() {
    const {colorCount} = this.state;

    return (  
      <div className= {`page color-${colorCount}`}>
        <div className="logo-container">
          <img src={logo} alt="Jeff Abney logo" className="logo"/>
        </div>
    <div
      className={"grid-container color-"+this.state.colorCount}
      id="quote-box"
    >
      <p className="quote-mark quote-mark-start">“</p>
      <div className="text-container">
        {
          this.state.ready ? 
            <p
              className={"quote-text color-"+this.state.colorCount}
              id ="text">{this.state.quote}</p>
          :
            <div
              className="lds-ellipsis"
            >
              <div></div><div></div><div></div><div></div>
            </div>
        }
        
        
      </div>
      <p className="quote-mark quote-mark-stop">”</p>
      <div className="author-container">
        <p className={"auto-text color-"+this.state.colorCount} id="author">
        {this.state.author}
        </p>
      </div>
      <div className="twitter-link-container">
        <div className="twitter-icon">
          <a
            className="twitter-share-button"
            id="tweet-quote" 
            href={tweetUrl+this.state.quote+" -"+this.state.author} 
            target ="_blank"
          >
            <i className={"fab fa-twitter color-"+this.state.colorCount}></i>
          </a> 
        </div>
      </div>
      <button
        disabled={this.state.btnDisabled}
        className={"new-quote-btn color-"+this.state.colorCount}
        id="new-quote"
        onClick = {this.handleClick}>New Quote</button>
    </div>
    <footer className="credit">
      <p
        className={"color-"+this.state.colorCount}
      >
        Designed by&nbsp;
        <a
          href="http://daniela-trujillo.com/"
        >Daniela Trujillo 
        </a>
        &nbsp;and Developed by&nbsp;
        <a
          href="mailto: jeffmabney@gmail.com"
        >
          Jeff Abney
        </a>
      </p>
    </footer>
    </div>  
    );
  }
}

export default App;


//End App Component **********************************************

