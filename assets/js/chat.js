var send = document.getElementById("send");
const url = 'http://localhost:5000'
var stompClient = null;
var username = null;

function chatOpen() {
  document.getElementById("chat-open").style.display = "none";
  document.getElementById("chat-close").style.display = "block";
  document.getElementById("chat-window1").style.display = "block";
}

function chatClose() {
  document.getElementById("chat-open").style.display = "block";
  document.getElementById("chat-close").style.display = "none";
  document.getElementById("chat-window1").style.display = "none";
  document.getElementById("chat-window2").style.display = "none";
}

function connect(event, input) {
  username = input;
  if (stompClient == null){
      var socket = new SockJS(url+ '/ws');
      stompClient = Stomp.over(socket);
      stompClient.connect({}, function(){
        stompClient.subscribe('/topic/' + input, onMessageReceived); 
      }, onError);
  
  event.preventDefault();
    }
}

function validateUser(event){
  input = document.getElementById("textInput").value;
  fetch(url + '/is-user-registered', {
    method: 'POST',
    body: input,
  })
  .then(response => {
    console.log('User is valid: ' + response.ok);
    if (response.ok == true){
      document.getElementById("chat-window2").style.display = "block";
      document.getElementById("chat-window1").style.display = "none";
      connect(event, input);

     homeMsg = 'If you are not registered, contact me first <a href="mailto:manesjona@gmail.com?subject=Ai Chat Bot&body=Hello, I would like to test your chat bot.">here</a>, with your professional email.'
     document.getElementById("message-error").innerHTML = `${homeMsg}`;

    } else{
      errorMsg = 'I am sorry, this OTP is not valid. Please contact the admin <a href="mailto:manesjona@gmail.com?subject=Ai Chat Bot&body=Hello, I would like to test your chat bot.">here</a>, with your professional email.'
      document.getElementById("message-error").style.color = "red";
      document.getElementById("message-error").innerHTML = `${errorMsg}`;
     
      var objDiv = document.getElementById("messageBox2");
      objDiv.scrollTop = objDiv.scrollHeight;
    } 
         });  
  
  event.preventDefault();

}

function onError(error) {
    console.log(error);
}

function sendMessage() {
  input = document.getElementById("textInput2").value;

if (input){

  var chatMessage = {
    sender: username,
    content: input,
    type: 'CHAT'
};
document.getElementById("messageBox2").innerHTML += `<div class="first-chat">
        <p>${chatMessage.content}</p>
        <div class="arrow"></div>
        </div>`;

stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));

document.getElementById("textInput2").value = "";
              var objDiv = document.getElementById("messageBox2");
              objDiv.scrollTop = objDiv.scrollHeight;
}
}

function onMessageReceived(payload) {
  console.log(payload);
    document.getElementById("messageBox2").innerHTML += `<div class="second-chat">
              <div class="circle" id="circle-mar">AI</div>
              <p>${payload.body}</p>
              <div class="arrow"></div>
            </div>`;

    var objDiv = document.getElementById("messageBox2");
    objDiv.scrollTop = objDiv.scrollHeight;
}

//press enter on keyboard and send message
addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {

    const e = document.getElementById("textInput2");
    if (e === document.activeElement) {
      sendMessage();
    }
  }
});

send.addEventListener('submit', connect, true)