let userArray = []; // Existing array to store usernames
        
let signUp = confirm("Do you want to sign up?");
if (signUp) {
  let userName = prompt("Please enter your name:");
  let Email = prompt("Please enter your E-Mail:"); 
  let password = prompt("Please enter your password:");
  userArray.push(userName);
  alert("User added successfully! Updated array: " + userArray);
} else {
  alert("Sign up canceled. Array remains unchanged.");
}
