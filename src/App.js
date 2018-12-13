import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Cardlist from './components/CardList';
import Submitform from './components/SubmitForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultChirps: [
        {
          username: "Tony Stark",
          chirp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          username: 'Tyrion Lannister',
          chirp: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          username: 'Bilbo Baggins',
          chirp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }
      ]

    }

    this.postChirp = (event) => {
      let newChirp = {
        username: document.getElementById("username").value,
        chirp: document.getElementById("chirp").value
      };
      this.setState({
        defaultChirps: this.state.defaultChirps.concat([newChirp])
      });
    }
  }




  render() {
    return (
      <div className = "container">
        <Header />
        <Cardlist items = {this.state.defaultChirps} />
        <Submitform postChirp = {this.postChirp}/>
      </div>
    );
  }
}

export default App;
