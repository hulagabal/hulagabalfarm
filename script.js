/* script.js */

/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

/* =========================
   LANGUAGE SWITCH
========================= */
let kannada = false;

function switchLanguage() {
    kannada = !kannada;

    if (kannada) {
        document.documentElement.lang = "kn";

        document.getElementById("switchLang").innerText = "English";
        document.getElementById("navHome").innerText = "ಮುಖಪುಟ";
        document.getElementById("navMission").innerText = "ಧ್ಯೇಯ";
        document.getElementById("navServices").innerText = "ನಾವು ಮಾಡುವದು";
        document.getElementById("navHighlights").innerText = "ವಿಶೇಷತೆಗಳು";
        document.getElementById("navContact").innerText = "ಸಂಪರ್ಕ";
        document.getElementById("waBtn").innerText = "ವಾಟ್ಸಾಪ್";

        document.getElementById("heroTitle").innerHTML =
            "ಸ್ವಾಗತ<br>ಹುಲಗಬಾಳ ನ್ಯಾಚುರಲ್ ಫಾರ್ಮ್";
        document.getElementById("heroText").innerText =
            "ಸುಸ್ಥಿರ ಕೃಷಿ • ಮೇಕೆ ಸಾಕಣೆ • ನೈಸರ್ಗಿಕ ಜೀವನ";
        document.getElementById("heroBtn").innerText =
            "ವಾಟ್ಸಾಪ್ ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ";

        document.getElementById("missionTitle").innerText = "ನಮ್ಮ ಧ್ಯೇಯ";
        document.getElementById("missionText").innerText =
            "ಭೂಮಿಗೆ ಗೌರವ ನೀಡುತ್ತಾ, ಸಮುದಾಯದ ಕಲ್ಯಾಣವನ್ನು ಉತ್ತೇಜಿಸುವ ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಮೂಲಕ ತಾಜಾ ಸಾವಯವ ಆಹಾರವನ್ನು ಉತ್ಪಾದಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯ.";

        document.getElementById("servicesTitle").innerText = "ನಾವು ಮಾಡುವದು";

        document.getElementById("card1Title").innerText = "🐐 ಮೇಕೆ ಸಾಕಣೆ";
        document.getElementById("card1Text").innerText =
            "ಆರೋಗ್ಯಕರ ಮೇಕೆಗಳು ಮತ್ತು ನೈಸರ್ಗಿಕ ಆಹಾರ.";

        document.getElementById("card2Title").innerText = "🌱 ಸಾವಯವ ಬೆಳೆಗಳು";
        document.getElementById("card2Text").innerText =
            "ರಾಸಾಯನಿಕ ರಹಿತ ತಾಜಾ ಬೆಳೆಗಳು.";

        document.getElementById("card3Title").innerText = "💧 ನೀರಿನ ನಿರ್ವಹಣೆ";
        document.getElementById("card3Text").innerText =
            "ಭವಿಷ್ಯಕ್ಕಾಗಿ ನೀರಿನ ಸಂರಕ್ಷಣೆ.";

        document.getElementById("highlightTitle").innerText =
            "ಫಾರ್ಮ್ ವಿಶೇಷತೆಗಳು";

        document.getElementById("high1Title").innerText = "🌾 5 ಏಕರೆ";
        document.getElementById("high1Text").innerText =
            "ಹಸಿರು ಉತ್ಪಾದಕ ಭೂಮಿ";

        document.getElementById("high2Title").innerText = "🐐 20+ ಮೇಕೆಗಳು";
        document.getElementById("high2Text").innerText =
            "ಆರೋಗ್ಯಕರವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಹಿಂಡು";

        document.getElementById("high3Title").innerText = "💧 ನೈಸರ್ಗಿಕ ನೀರು";
        document.getElementById("high3Text").innerText =
            "ಶುದ್ಧ ಮತ್ತು ಶಾಶ್ವತ ಮೂಲ";

        document.getElementById("high4Title").innerText = "🌳 ಬಹುಬೆಳೆ";
        document.getElementById("high4Text").innerText =
            "ವೈವಿಧ್ಯಮಯ ತೋಟ";

        document.getElementById("contactTitle").innerText = "ಸಂಪರ್ಕಿಸಿ";
        document.getElementById("addressTitle").innerText = "📍 ವಿಳಾಸ";
        document.getElementById("callTitle").innerText = "📞 ಕರೆ";
        document.getElementById("emailTitle").innerText = "✉ ಇಮೇಲ್";

    } else {
        document.documentElement.lang = "en";

        document.getElementById("switchLang").innerText = "ಕನ್ನಡ";
        document.getElementById("navHome").innerText = "Home";
        document.getElementById("navMission").innerText = "Mission";
        document.getElementById("navServices").innerText = "What We Do";
        document.getElementById("navHighlights").innerText = "Highlights";
        document.getElementById("navContact").innerText = "Contact";
        document.getElementById("waBtn").innerText = "WhatsApp Us";

        document.getElementById("heroTitle").innerHTML =
            "Welcome to<br>Hulagabal Natural Farm";
        document.getElementById("heroText").innerText =
            "Sustainable Farming • Goat Rearing • Natural Living";
        document.getElementById("heroBtn").innerText =
            "Chat on WhatsApp";

        document.getElementById("missionTitle").innerText = "Our Mission";
        document.getElementById("missionText").innerText =
            "Our mission is to produce fresh, organic food through sustainable farming practices that honor the earth and promote community well-being.";

        document.getElementById("servicesTitle").innerText = "What We Do";

        document.getElementById("card1Title").innerText = "🐐 Goat Farming";
        document.getElementById("card1Text").innerText =
            "Healthy goats with ethical care and natural feed.";

        document.getElementById("card2Title").innerText = "🌱 Organic Crops";
        document.getElementById("card2Text").innerText =
            "Fresh chemical-free crops grown with love.";

        document.getElementById("card3Title").innerText = "💧 Water Management";
        document.getElementById("card3Text").innerText =
            "Conserving water for a better tomorrow.";

        document.getElementById("highlightTitle").innerText =
            "Farm Highlights";

        document.getElementById("high1Title").innerText = "🌾 5 Acres";
        document.getElementById("high1Text").innerText =
            "Green productive farmland";

        document.getElementById("high2Title").innerText = "🐐 20+ Goats";
        document.getElementById("high2Text").innerText =
            "Healthy and growing herd";

        document.getElementById("high3Title").innerText = "💧 Natural Water";
        document.getElementById("high3Text").innerText =
            "Pure and sustainable source";

        document.getElementById("high4Title").innerText = "🌳 Multi-crop";
        document.getElementById("high4Text").innerText =
            "Diverse natural plantation";

        document.getElementById("contactTitle").innerText = "Contact Us";
        document.getElementById("addressTitle").innerText = "📍 Address";
        document.getElementById("callTitle").innerText = "📞 Call";
        document.getElementById("emailTitle").innerText = "✉ Email";
    }
}

/* =========================
   GOAT POPUP MODAL
========================= */
function openModal() {
    document.getElementById("goatModal").style.display = "block";
}

function closeModal() {
    document.getElementById("goatModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("goatModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};