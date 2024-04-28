import React from "react";
import Header from "./component/Header";
import "./assets/css/index.css";
import Input from "./component/Input";
import Button from "./component/Button";

import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./component/Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      task: ["Eat Healthy", "Go to Gym"],
    };
  }
  changeHandel = (event) => {
    this.setState({
      inputValue: event.target.value + " task is added",
      kam: event.target.value,
    });
  };

  notify = () => toast.success(this.state.inputValue);

  addTask = () => {
    this.setState({
      task: [...this.state.task, this.state.kam],
    });
    this.notify();
  };

  render() {
    console.log(this.state.task);
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
              action={this.addTask}
            />
            <ToastContainer
              position="bottom-right"
              pauseOnHover
              newestOnTop={true}
              closeOnClick
            />
          </section>

          <section>
            {this.state.task.map((element, index) => {
              return <Card task={element} />;
            })}
          </section>
        </main>
      </>
    );
  }
}

export default App;
