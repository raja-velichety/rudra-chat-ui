//add to chatlist
export function addToChatList(currentState, payload) {
  return {
    ...currentState,
    chatList: [
      ...currentState.chatList,
      {
        chatInfo: { ...{ ...JSON.parse(payload.chatInfo)[0] } },
        messageList: [...payload.messageList],
      },
    ],
  };
}

export function emptyNewChatUserList(currentState, payload) {
  return { ...currentState, newChatUserList: payload };
}

export function addMessageToChatID(currentState, payload) {
  const chatList = currentState?.chatList?.map((chat) => {
    if (chat.chatInfo.id === payload.receiver_id) {
      const messageList = [...chat.messageList, payload];
      chat["messageList"] = messageList;
    }
    return chat;
  });

  return { ...currentState, chatList: chatList };
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
