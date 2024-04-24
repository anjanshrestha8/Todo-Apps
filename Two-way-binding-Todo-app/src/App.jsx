import React from "react";
import Header from "./component/Header";
import "./assets/css/index.css";
import Input from "./component/Input";
import Button from "./component/Button";

import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: [""],
    };
  }
  changeHandel = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  notify = () => toast.success(this.state.inputValue);

  render() {
    return (
      <>
        <main className="main-container">
          <section className="header-wrapper">
            <Header title="Todo App" />
          </section>
          <section className="form-wrapper">
            <Input
              placeholder="Enter some task that can be done"
              name="todo"
              change={this.changeHandel}
            />
            <Button
              className="btn-dark"
              value="Add"
              type="submit"
              action={this.notify}
            />
            <ToastContainer
              position="bottom-right"
              pauseOnHover
              newestOnTop={true}
              closeOnClick
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
