// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyB32-o4GcpHk5SDYzXkCAUk9x9utulRg0Q",
  authDomain: "contact-form-35eea.firebaseapp.com",
  databaseURL: "https://contact-form-35eea.firebaseio.com",
  projectId: "contact-form-35ees",
  storageBucket: "",
  messagingSenderId: "534738432534"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    phone:phone,
    message:message
  });
}