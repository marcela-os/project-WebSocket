const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.querySelector('username');;
const messageContentInput = document.getElementById('message-contentconst');


let userName;


function login(event) {
    event.preventDefault();

    if (userNameInput.value !== '') {
      userName = userNameInput.value;
      loginForm.classList.remove('show');
      messagesSection.classList.add('show');
    } 
    else {
      alert("Name can't be left blank!");
    }
}

loginForm.addEventListener('submit', login);


