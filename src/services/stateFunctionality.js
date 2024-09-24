//Initial chat state for the application
let currSessionStorageIsLoggedIn = sessionStorage.getItem("isLoggedIn");
let currSessionStorageIsRegisteredIn = sessionStorage.getItem("isRegistered");

const baseChatState = {
  isLoggedIn: currSessionStorageIsLoggedIn ?? false,
  isDarkMode: false,
  isRegistered: currSessionStorageIsRegisteredIn ?? false,
  searchString: "",
  chatUserLoginInfo: {},
  chatUserRegisterInfo: {},
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
    // case "setChatUserLoginInfo":
    //   return setChatUserLoginInfo(currentState, action.payload);
    // case "setChatUserRegisterInfo":
    //   return setChatUserRegisterInfo(currentState, action.payload);
    default:
      return "";
  }
}

function setIsLoggedIn(currentState, payload) {
  sessionStorage.setItem("isLoggedIn", payload);
  return { ...currentState, isLoggedIn: payload };
}

function setIsRegistered(currentState, payload) {
  sessionStorage.setItem("isRegistered", payload);
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

// function setChatUserLoginInfo(currentState, payload) {
//   return { ...currentState, chatUserLoginInfo: { ...payload } };
// }

// function setChatUserRegisterInfo(currentState, payload) {
//   return { ...currentState, chatUserRegisterInfo: { ...payload } };
// }

function getMessagesByChatID(currentState, payload) {}

export { baseChatState, centralReducerFunction };
