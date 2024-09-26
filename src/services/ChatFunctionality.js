//add to chatlist
export function addToChatList(currentState, payload) {
  return { ...currentState, chatList: [...payload, ...currentState.chatList] };
}

export function emptyNewChatUserList(currentState, payload) {
  return { ...currentState, newChatUserList: payload };
}

export function addMessageToChatID(currentState, payload) {
  const chat = currentState?.chatList?.filter((chat) => {
    if (chat.id === payload.receiver_id) return "";
    const messageList = [payload];

    chat["messageList"] = messageList;
    return chat;
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
