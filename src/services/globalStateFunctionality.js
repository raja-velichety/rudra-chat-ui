//Initial chat state for the application
const baseChatState = {
  isLoggedIn: false,
  isDarkMode: false,
  isRegistered: false,
  searchString: "",
  loginInfo: {},
  registerInfo: {},
  chatList: [],
  currentUserMessageList: [],
};

//reducer function for updating of the state values
function centralReducerFunction(currentState, action) {
  switch (action.type) {
    case "setIsLoggedIn":
      return setIsLoggedIn(currentState, action.payload);
    case "setIsRegistered":
      return setIsRegistered(currentState, action.payload);
    case "setIsDarkMode":
      return setIsDarkMode(currentState, action.payload);
    case "setSearchString":
      return setSearchString(currentState, action.payload);
    case "setLoginInfo":
      return setLoginInfo(currentState, action.payload);
    case "setRegisterInfo":
      return setRegisterInfo(currentState, action.payload);
    case "getMessagesByChatID":
      return getMessagesByChatID(currentState, action.payload);
    case "getChats":
      return getChats(currentState, action.payload);
    case "registerChatUser":
      return registerChatUser(currentState, action.payload);
    default:
      return "";
  }
}

function setIsLoggedIn(currentState, payload) {
  return { ...currentState, isLoggedIn: payload };
}

function setIsRegistered(currentState, payload) {
  return { ...currentState, isRegistered: payload };
}

function setIsDarkMode(currentState) {
  return { ...currentState, isDarkMode: !currentState?.isDarkMode };
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

function getChats(currentState, payload) {
  return { ...currentState, chatList: [...payload] };
}

function getMessagesByChatID(currentState, payload) {}

function registerChatUser(currentState, payload) {}

export { baseChatState, centralReducerFunction };
