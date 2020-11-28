import React from 'react';

import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import ContactMe from './components/ContactMe/ContactMe';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    activeTab: 1
  }

  componentDidMount() {
    window.onbeforeunload = (e) => {
      window.scrollTo(0, 0);
    };
  }

  setActiveTab = tab => {
    window.scrollTo({
      top: (tab * window.innerHeight) - window.innerHeight,
      behavior: 'smooth'
    });

    this.setState({ activeTab: tab })
  }

  render() {
    return (
      <div className="App">
        <StarBackground />
        <main>
          <Navbar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />

          <div className="main-container">
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
        </main>
      </div>
    );
  }

}

export default App;
