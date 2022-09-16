const passwordInput = document.getElementById('password');

function genPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = '';
    for (let i = 1; i <= passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1)
    }
    passwordInput.value = password;
}

function copyPassword() {
     // Get the text field
  const copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  
}