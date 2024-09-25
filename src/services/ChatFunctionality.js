export function checkIfUserIsRegistered(currentState, payload) {
  return {
    ...currentState,
    newChatUserList: [...payload],
  };
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
