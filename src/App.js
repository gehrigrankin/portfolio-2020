import React from 'react';

import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';

import './App.scss';

class App extends React.Component {
  state = {
    activeTab: 1
  }
  
  setActiveTab = tab => {
    window.scrollTo({
      top: (tab * window.innerHeight) - window.innerHeight,
      behavior: 'smooth'
    });

    this.setState({activeTab: tab})
  }

  render() {
    return (
      <div className="App">
        <StarBackground />
        <main>
          <Navbar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />

          <div className="main-container">
            <AboutMe ref={1}/>
            <Skills ref={2}/>
          </div>
        </main>
      </div>
    );
  }

}

export default App;
