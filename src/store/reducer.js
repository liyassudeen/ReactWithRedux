const initialState = {
  counter: 0,
  listElement: [],
  nonStrikeOutCount: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TEXT": {
      if (action.textInput.current.value != "") {
        //this.textInput.current.value = '';
        return Object.assign({}, state, {
          listElement: [...state.listElement, action.textInput.current.value],
          nonStrikeOutCount: state.nonStrikeOutCount + 1
        });
      }
    }
    case "STRIKE_OUT_TEXT": {
      if (action.event.target.style.textDecoration != "line-through") {
        action.event.target.style.textDecoration = "line-through";
        return Object.assign({}, state, {
          nonStrikeOutCount: state.nonStrikeOutCount - 1
        });
      }
      action.event.target.style.textDecoration = "unset";
      return Object.assign({}, state, {
        nonStrikeOutCount: state.nonStrikeOutCount + 1
      });
    }
    default:
      return state;
  }
}
