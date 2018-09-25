import React, { Component } from 'react';
import './App.css';
import TopBarComponent from './Components/TopBar';
import FilterBarComponent from './Components/FilterBar';
import ListContainerComponent from './Components/ListContainer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <TopBarComponent logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Roamler_Logo.svg/1200px-Roamler_Logo.svg.png'}/>
        <FilterBarComponent/>
        <ListContainerComponent/>
      
      </div>
    );
  }
}

export default App;
