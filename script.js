document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Soo qaad xogta
    const magaca = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const degmada = document.getElementById('district').value;

    // Hubi haddii xogta la buuxiyay
    if(magaca && phone && degmada) {
        // Muuji farriinta guusha
        const responseDiv = document.getElementById('responseMsg');
        responseDiv.innerHTML = "Waad mahadsantahay <b>" + magaca + "</b>, farriintaada waa aragnay waxana kugu adeego doona sida ugu dhaqsiyaha badan.";
        responseDiv.classList.remove('hidden');

        // Nadiifi form-ka
        document.getElementById('contactForm').reset();
        
        // Qari form-ka ka dib marka la diro (ikhtiyaari)
        document.getElementById('contactForm').style.display = 'none';
    }
});

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}