import React from "react";
import "../assets/css/components/button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          className={this.props.className}
          type={this.props.type || "button"}
          disabled={this.props.disabled || false}
        >
          {this.props.value || "button"}
        </button>
      </>
    );
  }
}
export default Button;
