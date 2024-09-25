class ChatFunctionality {
  constructor(currentState, payload) {
    this.currentState = currentState;
    this.payload = currentState;
  }

  //checks whether user is registered or not
  checkIfUserIsRegistered() {}

  //create new chat by checking if user is registered and add it to contact list
  setNewChat() {}

  //get chat by ID
  getChatByID() {}

  //adds user to the contact list if user is registered
  addUserToContactList() {}

  //returns contact list
  getContactList() {}

  //returns list of all the chats
  getChatsList() {}
}

export default ChatFunctionality;
