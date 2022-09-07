import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() =>{
          return {monsters: users}
        })
      })
  }
  searchOnChange = (event) => {
    const searchInput = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchInput}
    })
  }

  render(){
    const {monsters, searchInput} = this.state
    const { searchOnChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" className="search-box" onChangeHandler={searchOnChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
