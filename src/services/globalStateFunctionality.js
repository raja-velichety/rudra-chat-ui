//Initial chat state for the application
const baseChatState = {
  isLoggedIn: false,
  isDarkMode: false,
  isRegistered: false,
  searchString: "asdalsd",
  loginInfo: {},
  registerInfo: {},
};

//reducer function for updating of the state values
function centralReducerFunction(currentState, action) {
  switch (action.type) {
    case "setIsLoggedIn":
      return setIsLoggedIn(currentState);
    case "setIsRegistered":
      return setIsRegistered(currentState);
    case "setIsDarkMode":
      return setIsDarkMode(currentState);
    case "setSearchString":
      return setSearchString(currentState, action.payload);
    case "setLoginInfo":
      return setLoginInfo(currentState, action.payload);
    case "setRegisterInfo":
      return setRegisterInfo(currentState, action.payload);
    default:
      return "";
  }
}

function setIsLoggedIn(currentState) {
  return { ...currentState, isLoggedIn: !currentState.isLoggedIn };
}

function setIsRegistered(currentState) {
  return { ...currentState, isRegistered: !currentState.isRegistered };
}

function setIsDarkMode(currentState) {
  return { ...currentState, isDarkMode: !currentState.isDarkMode };
}

function setSearchString(currentState, payload) {
  return { ...currentState, searchString: payload };
}

function setLoginInfo(currentState, payload) {
  return { ...currentState, loginInfo: { ...payload } };
}

function setRegisterInfo(currentState, payload) {
  return { ...currentState, registerInfo: { ...payload } };
}

export { baseChatState, centralReducerFunction };
