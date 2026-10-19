
document.querySelector('.write-to-us form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Replace with your business WhatsApp number, in international format, no + or spaces
    const businessNumber = '23057610230';

    const fullName = document.getElementById('full-name').value.trim();
    const whatsappNumber = document.getElementById('whatsapp-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const arrivalDate = document.getElementById('arrival-date').value;
    const departureDate = document.getElementById('departure-date').value;
    const details = document.getElementById('additional-travel-details').value.trim();

    if (!fullName || !whatsappNumber || !email || !arrivalDate || !departureDate) {
        alert('Please fill in all required fields.');
        return;
    }

    const message =
        `Hello Blaue Mauritius, I'd like to plan my trip:\n\n` +
        `Full name: ${fullName}\n` +
        `WhatsApp number: ${whatsappNumber}\n` +
        `Email: ${email}\n` +
        `Arrival date: ${arrivalDate}\n` +
        `Departure date: ${departureDate}\n` +
        (details ? `Additional details: ${details}\n` : '');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
});
