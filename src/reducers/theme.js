export default function theme(state = "darkBlue", action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}
