import React from "react";

class Person extends React.Component {
  state = {
    isDetailsDisplayed: false
  };
  clickForDetails = () => {
    let isDetailsDisplayed = this.state.isDetailsDisplayed;
    isDetailsDisplayed = !isDetailsDisplayed;
    this.setState({ isDetailsDisplayed });
  };
  render() {
    let person = this.props.person;
    return person.map(person => (
      <div key={person.cell} className="person">
        {this.state.isDetailsDisplayed ? (
          <div>
            <div> email : {person.email}</div>
            <div> cell : {person.cell}</div>
            <div> location : {person.location.city}</div>
          </div>
        ) : (
          <div>
            <div> name : {person.name.first} </div>
            <div>
              picture :<img src={person.picture.thumbnail} alt="person" />
            </div>
          </div>
        )}
        <button onClick={() => this.clickForDetails()}>
          {this.state.isDetailsDisplayed ? "hide details" : "show details"}
        </button>
      </div>
    ));
  }
}
export default Person;

//state
//create button with onClick
//onClick triggers isDetailsDisplay boolean function
//button text needs to change
//displayed info needs to appear and disappear
