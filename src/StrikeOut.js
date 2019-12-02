import React from "react";
import { connect } from "react-redux";

function addText(text) {
  return { type: "ADD_TEXT", textInput: text };
}
function strikeOutText(e) {
  return { type: "STRIKE_OUT_TEXT", event: e };
}

class StrikeOut extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit() {
    this.props.addText(this.textInput);
  }

  render() {
    const list = this.props.listElement.map(item => (
      <li onClick={e => this.props.strikeOutText(e)}>{item}</li>
    ));
    return (
      <>
        <h1>Welcome to react with redux</h1>
        <div className="form-wrapper">
          <input
            type="text"
            placeholder="Type text to add list..."
            ref={this.textInput}
          />
          <input
            type="button"
            value="AddText"
            onClick={() => this.handleSubmit}
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
      </>
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
)(StrikeOut);
