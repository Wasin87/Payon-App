// Login Button Logic
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();

    const mobileNumberValue = document.getElementById('mobile-number').value.trim();
    const pinNumberValue = document.getElementById('pin-number').value.trim();

    // Convert Number
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // --- Validation Added Here ---
    if (mobileNumberValue === "" || pinNumberValue === "") {
        alert("⚠️ Mobile number & Pin required!");
        return;
    }

    if (isNaN(mobileNumberValueConverted) || mobileNumberValue.length < 10) {
        alert("❌ Enter a valid mobile number");
        return;
    }

    if (isNaN(pinNumberValueConverted) || pinNumberValue.length < 3) {
        alert("❌ Enter a valid pin number");
        return;
    }

    // --- If validation OK → Login success ---
    window.location.href = "home.html";
});


// Toggle Pin Visibility
const pinInput = document.getElementById("pin-number");
const togglePin = document.getElementById("toggle-pin");
let isVisible = false;

togglePin.addEventListener("click", () => {
    if (isVisible) {
        pinInput.type = "password";
        togglePin.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    } else {
        pinInput.type = "text";
        togglePin.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
    isVisible = !isVisible;
});
