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

  render() {
    const list = this.props.listElement.map(item => (
      <li onClick={e => this.props.strikeOutText(e)}>{item}</li>
    ));
    return (
      <>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="AddText"
          onClick={() => this.props.addText(this.textInput)}
        />
        <ul>{list}</ul>
        <div>
          {this.props.nonStrikeOutCount} out of {this.props.listElement.length}
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
