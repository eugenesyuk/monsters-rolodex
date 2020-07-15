import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    this.setState({ monsters: users });
  }

  handleSearchChange = (e) => {
    return this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <Search placeholder='Search Monsters' changeHandler={this.handleSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
