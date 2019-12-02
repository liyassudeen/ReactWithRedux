const initialState = {
  counter : 0,
  listElement : [],
  nonStrikeOutCount: 0
}

export default function reducer(state=initialState, action) {
  if(action.type === "ADD_TEXT") {
    if(action.textInput.current.value != '') {
      //this.textInput.current.value = '';
      return Object.assign({},
      state,
        {
          listElement: [...state.listElement, action.textInput.current.value]
        }
      )
    }
  }
  else if(action.type === "STRIKE_OUT_TEXT"){
    if(action.target.style.textDecoration != 'line-through') {
      action.target.style.textDecoration = 'line-through';
      return Object.assign({},
      state,
        {
          nonStrikeOutCount: state.nonStrikeOutCount - 1
        }
      )
	  }
	   else {
      action.target.style.textDecoration = 'unset';
      return Object.assign({},
      state,
        {
          nonStrikeOutCount: state.nonStrikeOutCount + 1
        }
      )
	  }
  }
}