import React from 'react';
import Nav    from './Nav';
import Hero   from './Hero';
import Footer from './Footer';
import Bones  from './Bones';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jason Seminara',
    };
  }

  render() {
    return (
      <div className="site">
        <Nav />
        <Hero />
        <div className="container">
          <div className="columns">
            <Bones {...this.state}/>
            <Bones {...this.state}/>
            <Bones {...this.state}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
