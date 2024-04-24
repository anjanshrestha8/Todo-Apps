import React from "react";
import Header from "./component/Header";
import "./assets/css/index.css";
import Input from "./component/Input";
import Button from "./component/Button";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "first state",
    };
  }
  render() {
    return (
      <>
        <main className="main-container">
          <section className="header-wrapper">
            <Header title="Todo App" />
          </section>
          <section className="form-wrapper">
            <Input placeholder="Enter some task that can be done" name="todo" />
            <Button className="btn-dark" value="Add" type="submit" />
          </section>
        </main>
      </>
    );
  }
}

export default App;
