// import ChatFunctionality from "./chatFunctionality";

let currSessionStorageIsLoggedIn = sessionStorage.getItem("isLoggedIn");
let currSessionStorageIsRegisteredIn = sessionStorage.getItem("isRegistered");
let currSessionStorageShowChatbox = sessionStorage.getItem("showChatbox");

const baseChatState = {
  isLoggedIn: currSessionStorageIsLoggedIn ?? false,
  isDarkMode: false,
  isRegistered: currSessionStorageIsRegisteredIn ?? false,
  searchString: "",
  showChatbox: currSessionStorageShowChatbox ?? false,
  chatUserLoginInfo: {},
  chatUserRegisterInfo: {},
  chatList: [],
  currentUserMessageList: [],
};

//reducer function for updating of the state values
function centralReducerFunction(currentState, action) {
  // const chatService = new ChatFunctionality(currentState, action.payload);

  switch (action.type) {
    case "setIsLoggedIn":
      return setIsLoggedIn(currentState, action.payload);
    case "setIsRegistered":
      return setIsRegistered(currentState, action.payload);
    case "setIsDarkMode":
      return setIsDarkMode(currentState, action.payload);
    case "setSearchString":
      return setSearchString(currentState, action.payload);

    // case "newChat":
    //   return chatService.setNewChat(currentState, action.payload);
    case "getMessagesByChatID":
      return getMessagesByChatID(currentState, action.payload);
    case "getChats":
      return getChats(currentState, action.payload);
    case "setShowChatbox":
      return setShowChatbox(currentState, action.payload);
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

// function setLoginInfo(currentState, payload) {
//   return { ...currentState, loginInfo: { ...payload } };
// }

// function setRegisterInfo(currentState, payload) {
//   return { ...currentState, registerInfo: { ...payload } };
// }

function getChats(currentState, payload) {
  return { ...currentState, chatList: [...payload] };
}

function setShowChatbox(currentState, payload) {
  sessionStorage.setItem("showChatbox", payload);
  return { ...currentState, showChatbox: payload };
}

function getMessagesByChatID(currentState, payload) {}

export { baseChatState, centralReducerFunction };
