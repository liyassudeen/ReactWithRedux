export function addText(text) {
  return { type: "ADD_TEXT", textInput: text };
}
export function strikeOutText(e) {
  return { type: "STRIKE_OUT_TEXT", event: e };
}
