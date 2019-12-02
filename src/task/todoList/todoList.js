import React from "react";
import { connect } from "react-redux";
import { addText, strikeOutText } from "./action";
import "./styles.scss";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit = () => {
    this.props.addText(this.textInput);
    this.textInput.current.value = "";
  };

  render() {
    const list = this.props.listElement.map(item => (
      <li onClick={e => this.props.strikeOutText(e)}>{item}</li>
    ));
    return (
      <div className="container">
        <h1>Welcome to Todo List</h1>
        <div className="form-wrapper">
          <input
            type="text"
            placeholder="Type text to add list..."
            ref={this.textInput}
          />
          <input
            type="button"
            value="AddText"
            onClick={() => this.handleSubmit()}
          />
        </div>
        <ul>{list}</ul>
        <div className="result-group">
          <span className="non-strike-list">
            {this.props.nonStrikeOutCount}
          </span>{" "}
          out of
          <span className="total-list"> {this.props.listElement.length}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    listElement: state.listElement,
    nonStrikeOutCount: state.nonStrikeOutCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addText: text => dispatch(addText(text)),
    strikeOutText: e => dispatch(strikeOutText(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
