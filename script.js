document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const magaca = document.getElementById('name').value;

    if(magaca){
        const responseDiv = document.getElementById('responseMsg');

        responseDiv.innerHTML =
        "Waan ku adeegi doonnaa <b>" + magaca + "</b>, mahadsanid 🤝";

        responseDiv.classList.remove('hidden');

        this.reset();
    }
});