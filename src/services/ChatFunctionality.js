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

//returns list of all the chats
export function getChatList(currentState, payload) {
  const allChatsData = payload.map((chatData) => {
    return {
      chatInfo: { ...chatData.chat_info },
      messageList: [...chatData.message_list],
    };
  });

  return {
    ...currentState,
    chatList: [...currentState.chatList, ...allChatsData],
  };
}

//adds user to the contact list if user is registered
export function addUserToContactList() {}

//returns contact list
export function getContactList() {}
