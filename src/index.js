import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer"

import "./styles.css";

const store = createStore(
  reducer
);

class StrikeOut extends React.Component {
  constructor(props) {
	   super(props);
	   this.state = {counter : 0, listElement : [], nonStrikeOutCount: 0};
	   this.textInput = React.createRef();
	   this.listTextInput = this.listTextInput.bind(this);
	   this.strikeOut = this.strikeOut.bind(this);
   }

   listTextInput() {
    if(this.textInput.current.value != '') {
      this.setState({listElement: [...this.state.listElement, this.textInput.current.value], nonStrikeOutCount: this.state.nonStrikeOutCount + 1})
      this.textInput.current.value = '';
    }
   }
   strikeOut(e) {
	   if(e.target.style.textDecoration != 'line-through') {
		e.target.style.textDecoration = 'line-through';
		this.setState({nonStrikeOutCount: this.state.nonStrikeOutCount - 1})
	   }
	   else {
		e.target.style.textDecoration = 'unset';
		this.setState({nonStrikeOutCount: this.state.nonStrikeOutCount + 1})
	   }
   }
  render() {
		const list = this.state.listElement.map((item) => <li onClick={() => this.props.strikeOutText(e)}>{item}</li>)
    return(
      <Provider store={store}>
			 <input type="text" ref={this.textInput} />
			 <input type="button" value="AddText" onClick={() => this.props.addText(this.textInput)} />
			 <ul>
				{list}
			 </ul>
			 <div>{this.state.nonStrikeOutCount} out of {this.state.listElement.length}</div>
		 </Provider>
    )
  }
}

export function addText(payload) {
  return { type: "ADD_TEXT", textInput: payload }
};
export function strikeOutText(payload) {
  return { type: "STRIKE_OUT_TEXT", event: payload }
};

const mapStateToProps = state => {
  return {   
		counter : state.counter,
  	listElement : state.listElement,
  	nonStrikeOutCount: state.nonStrikeOutCount
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addText: data => dispatch(addText(data)),
    strikeOutText: data => dispatch(strikeOutText(data))
  };
}


connect(
  mapStateToProps,
  mapDispatchToProps
)(StrikeOut);

const rootElement = document.getElementById("root");
ReactDOM.render(<StrikeOut />, rootElement);
