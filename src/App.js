import React from 'react';

import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { AboutMe } from './components/AboutMe';

import './App.css';

class App extends React.Component {
  state = {
    activeTab: 1
  }
  
  setActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    return (
      <div className="App">
        <StarBackground />
        <Navbar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
      </div>
    );
  }

}

export default App;
