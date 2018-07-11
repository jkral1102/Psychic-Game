import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Journal from './Components/Journal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showJournal: false,
      // showReviews: false,
      // showArticles: false,
      // showPhotography: false,
      // showCodeSnips: false,

    }
    this.showJournal = this.showJournal.bind(this);

  }

  showJournal = () => {
    this.setState({showJournal: !this.state.showJournal})
  }


  render() {
    let myJournal = this.state.showJournal === true ? <Journal /> : null
    /* reviews={this.showReviews}
       articles={this.showArticles}
       photography={this.showPhotography}
       codeSnips={this.showCodeSnips} */
    return (
      <div className="App">
        <Header />
          <div id='content'>
            <Sidebar
              journal={this.showJournal}
            />
            <div id='mainContent'>
            {myJournal}
            
            </div>

          </div>



      </div>
    );
  }
}

export default App;
