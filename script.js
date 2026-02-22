document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const magaca = document.getElementById('name').value;

    if(magaca){
        const responseDiv = document.getElementById('responseMsg');

        responseDiv.innerHTML =
        "mahadsanid macmiil Waxan kugu adeegi doonnaa sida ugu dhaqsiyaha badan  🤝 ";

        responseDiv.classList.remove('hidden');

        this.reset();
    }
});