import React from "react";
import Person from './Person'
class App extends React.Component {
  state = {
    userList: [],
    index: 0
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ userList: parsedJSON.results }))
      .catch(error => console.log(error));
  };
  render() {
    let userList = this.state.userList;
    if (userList.length === 0) {
      return <div>Site is loading, please wait</div>;
    }
    return (
      <div className="App">
        <h1>My Address Book</h1>
        <Person person={this.state.userList}/>
      </div>
    );
  }
}
export default App;
