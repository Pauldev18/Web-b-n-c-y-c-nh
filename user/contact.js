document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if(name && email && phone && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you would typically handle form submission to the server
    } else {
        alert("Please fill in all fields.");
    }
});
