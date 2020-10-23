import React from 'react';

import { Navbar } from './components/Navbar';

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
        <Navbar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
      </div>
    );
  }

}

export default App;
