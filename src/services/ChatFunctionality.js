//add to chatlist
export function addToChatList(currentState, payload) {
  return { ...currentState, chatList: [...currentState.chatList, ...payload] };
}

export function emptyNewChatUserList(currentState, payload) {
  return { ...currentState, newChatUserList: payload };
}

export function addMessageToChatID(currentState, payload) {
  let chat = currentState?.chatList?.filter((chat, index) => {
    if (index === 2) {
      const messageList = [...chat.messageList, payload];

      chat["messageList"] = messageList;
      return chat;
    }
    return "";
  });

  return { ...currentState, chatList: [...currentState.chatList, chat] };
}
//create new chat by checking if user is registered and add it to contact list
export function setNewChat() {}

//get chat by ID
export function getChatByID() {}

//adds user to the contact list if user is registered
export function addUserToContactList() {}

//returns contact list
export function getContactList() {}

//returns list of all the chats
export function getChatsList() {}
