function handleAgree() {
    var button = document.getElementById("agreeButton");
    var message = document.getElementById("message");

    button.innerHTML = "💍 Yes! I will marry you! 💍";
    message.innerHTML = "I’m the happiest person in the world!";
    
    // Disable the button after clicking
    button.disabled = true;
    button.style.backgroundColor = "#cccccc";
}
