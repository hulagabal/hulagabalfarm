/* script.js */

/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

function closeMenu() {
    document.querySelector("nav ul").classList.remove("show");
}

// Close menu when any navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});

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
            "ಹುಲಗಬಾಳ ನ್ಯಾಚುರಲ್ ಫಾರ್ಮ್ ಗೆ ಸ್ವಾಗತ.";
        document.getElementById("heroText").innerText =
            "ಸುಸ್ಥಿರ ಕೃಷಿ • ಮೇಕೆ ಸಾಕಣೆ • ನೈಸರ್ಗಿಕ ಜೀವನ";
        document.getElementById("heroBtn").innerText =
            "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬೆಲೆ ತಿಳಿಯಿರಿ";
        document.getElementById("trustText").innerHTML =
            "✅ ಅದೇ ದಿನ ಉತ್ತರ | ✅ ನೇರ ರೈತ ಬೆಲೆ | ✅ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ";

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

        document.getElementById("galleryTitle").innerText = "ನಮ್ಮ ಫಾರ್ಮ್ ಗ್ಯಾಲರಿ";
        document.getElementById("galleryText").innerText = "ತಾಜಾ, ನೈಸರ್ಗಿಕ ಮತ್ತು ಕಾಳಜಿಯಿಂದ ಬೆಳೆದವು 🌱";    

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

        document.getElementById("ctaTitle").innerText = "ತಾಜಾ ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ನೇರವಾಗಿ ಬೇಕೇ?";
        document.getElementById("ctaText").innerText = "ಈಗಲೇ ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ ಮತ್ತು ಇಂದಿನ ಅತ್ಯುತ್ತಮ ಬೆಲೆಯನ್ನು ಪಡೆಯಿರಿ";
        document.getElementById("ctaButton").innerText = "ವಾಟ್ಸಾಪ್ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ";


        document.getElementById("contactTitle").innerText = "ಸಂಪರ್ಕಿಸಿ";
        
        document.querySelector("#addressTitle h3").innerText = "📍 ವಿಳಾಸ";
        document.getElementById("farmAddress").innerHTML = "<strong>ಹುಲಗಬಾಳ ನ್ಯಾಚುರಲ್ ಫಾರ್ಮ್</strong><br>ಅಥರ್ಗಾ-586112, ಇಂಡಿ ತಾಲ್ಲೂಕು<br>ವಿಜಯಪುರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ";


        document.getElementById("callTitle").innerText = "📞 ಕರೆ";
        document.getElementById("whatsappTitle").innerText = "💬 ವಾಟ್ಸಾಪ್";
        document.getElementById("whatsappText").innerText = "ಈಗಲೇ ಚಾಟ್ ಮಾಡಿ";
        document.getElementById("visitText").innerText = "“ಫಾರ್ಮ್‌ಗೆ ಭೇಟಿ ನೀಡುತ್ತೀರಾ? ದಯವಿಟ್ಟು ಮೊದಲು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ, ನಾವು ನಿಮಗೆ ಲಭ್ಯವಿದ್ದೇವೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ!”";

        
        document.getElementById("goatModalTitle").innerText = "🐐 ಹುಲಗಬಾಳದಲ್ಲಿ ಮೇಕೆ ಸಾಕಣೆ";
        document.getElementById("goatModalDesc").innerText = "ನಮ್ಮ ಮೇಕೆಗಳು ವಿಜಯಪುರದಲ್ಲಿ ನೈಸರ್ಗಿಕ ಮತ್ತು ಉತ್ತಮ ಆರೈಕೆಯೊಂದಿಗೆ ಸಾಕಲ್ಪಡುತ್ತವೆ.";

        document.getElementById("breedLabel").innerText = "ಜಾತಿಗಳು:";
        document.getElementById("breedText").innerText = "ಆರೋಗ್ಯಕರ ಸ್ಥಳೀಯ ಮತ್ತು ಒಸ್ಮಾನಾಬಾದಿ ಜಾತಿಗಳು.";

        document.getElementById("dietLabel").innerText = "ಆಹಾರ:";
        document.getElementById("dietText").innerText = "ನಮ್ಮದೇ 5 ಏಕರಲ್ಲಿ ಬೆಳೆದ ನೈಸರ್ಗಿಕ ಮೇವು ಮತ್ತು ಧಾನ್ಯಗಳು.";

        document.getElementById("careLabel").innerText = "ಆರೈಕೆ:";
        document.getElementById("careText").innerText = "ಒತ್ತಡರಹಿತ ವಾತಾವರಣ ಮತ್ತು ನಿಯಮಿತ ಪಶುವೈದ್ಯರ ತಪಾಸಣೆ.";

        document.getElementById("availLabel").innerText = "ಲಭ್ಯತೆ:";
        document.getElementById("availText").innerText = "ಸಂಕರಣಕ್ಕಾಗಿ ಮೇಕೆಗಳು ಹಾಗೂ ಸಾವಯವ ಗೊಬ್ಬರ ಲಭ್ಯ.";

        document.getElementById("goatWhatsappBtn").innerText = " 🐐 ಮೇಕೆಗಳ ಬೆಲೆ ತಿಳಿಯಿರಿ";

        document.getElementById("cropModalTitle").innerText = "🌾 ಹುಲಗಬಾಳದಲ್ಲಿ ನಾವು ಬೆಳೆಸುವ ಬೆಳೆಗಳು";
        document.getElementById("cropModalDesc").innerText = "ನಾವು ವಿಜಯಪುರದಲ್ಲಿ ನೈಸರ್ಗಿಕ ಕೃಷಿ ವಿಧಾನಗಳಿಂದ ಪೌಷ್ಟಿಕ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಸುತ್ತೇವೆ.";

        document.getElementById("crop1Label").innerText = "🌱 ಕಡಲೆ ಬೇಳೆ:";
        document.getElementById("crop1Text").innerText = "ಆರೋಗ್ಯಕರ ಮಣ್ಣಿನಲ್ಲಿ ಬೆಳೆದ ಪ್ರೋಟೀನ್ ಸಮೃದ್ಧ ಬೇಳೆ.";

        document.getElementById("crop2Label").innerText = "🌽 ಮೆಕ್ಕೆ ಜೋಳ:";
        document.getElementById("crop2Text").innerText = "ಸಮತೋಲನ ನೀರಾವರಿಯಿಂದ ಬೆಳೆದ ತಾಜಾ ಬೆಳೆ.";

        document.getElementById("crop3Label").innerText = "🌾 ಗೋಧಿ:";
        document.getElementById("crop3Text").innerText = "ಆರೋಗ್ಯಕರ ಧಾನ್ಯ ಮತ್ತು ಹಿಟ್ಟಿಗಾಗಿ ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ಗೋಧಿ.";

        document.getElementById("crop4Label").innerText = "🌿 ಜೋಳ:";
        document.getElementById("crop4Text").innerText = "ಆಹಾರ ಮತ್ತು ಮೇವುಗಾಗಿ ಪರಂಪರೆಯ ಧಾನ್ಯ ಬೆಳೆ.";

        document.getElementById("crop5Label").innerText = "🧅 ಈರುಳ್ಳಿ:";
        document.getElementById("crop5Text").innerText = "ತಾಜಾತನ ಮತ್ತು ಸಂಗ್ರಹಕ್ಕೆ ಸೂಕ್ತ ಗುಣಮಟ್ಟದ ಈರುಳ್ಳಿ.";

        document.getElementById("crop6Label").innerText = "🌍 ವಿಧಾನ:";
        document.getElementById("crop6Text").innerText = "ಕಡಿಮೆ ರಾಸಾಯನಿಕ ಬಳಕೆ ಮತ್ತು ಮಣ್ಣಿನ ಆರೈಕೆಯ ಸುಸ್ಥಿರ ಕೃಷಿ.";

        document.getElementById("cropWhatsappBtn").innerText = "🌾 ಬೆಳೆಗಳ ಬೆಲೆ ತಿಳಿಯಿರಿ";

        


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
            "Get Price on WhatsApp";
        document.getElementById("trustText").innerHTML =
            "✅ Same Day Response | ✅ Direct Farmer Pricing | ✅ No Middlemen Margin";

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
        
        document.getElementById("galleryTitle").innerText = "Our Farm Gallery";
        document.getElementById("galleryText").innerText = "Fresh, natural, and grown with care 🌱";


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

        document.getElementById("ctaTitle").innerText = "Want Fresh Farm Products Directly?";
        document.getElementById("ctaText").innerText = "Chat with us now and get today's best price";
        document.getElementById("ctaButton").innerText = "Chat on WhatsApp";

        document.getElementById("contactTitle").innerText = "Contact Us";
        document.querySelector("#addressTitle h3").innerText = "📍 Address";
        document.getElementById("farmAddress").innerHTML = "<strong>Hulagabal Natural Farm</strong><br>Atharga-586112, Indi Taluk<br>Vijayapura District, Karnataka";

        document.getElementById("callTitle").innerText = "📞 Call";
        document.getElementById("whatsappTitle").innerText = "💬 WhatsApp";
        document.getElementById("whatsappText").innerText = "Chat With Us Now";
        document.getElementById("visitText").innerText = "“Visiting the farm? Please message us on WhatsApp first to ensure we are available to show you around!”";

        document.getElementById("goatModalTitle").innerText = "🐐 Goat Rearing at Hulagabal";
        document.getElementById("goatModalDesc").innerText = "Our goats are raised with the highest standards of natural care in Bijapur.";

        document.getElementById("breedLabel").innerText = "Breeds:";
        document.getElementById("breedText").innerText = "Healthy local and Osmanabadi breeds.";

        document.getElementById("dietLabel").innerText = "Diet:";
        document.getElementById("dietText").innerText = "100% natural fodder and grains grown on our own 5 acres.";

        document.getElementById("careLabel").innerText = "Care:";
        document.getElementById("careText").innerText = "Stress-free environment with regular veterinary check-ups.";

        document.getElementById("availLabel").innerText = "Availability:";
        document.getElementById("availText").innerText = "We provide goats for breeding and organic manure for farms.";

        document.getElementById("goatWhatsappBtn").innerText = "🐐 Get Goat Price";

        document.getElementById("cropModalTitle").innerText = "🌾 Crops We Grow at Hulagabal";
        document.getElementById("cropModalDesc").innerText = "We cultivate nutritious and quality crops using natural farming methods in Bijapur.";

        document.getElementById("crop1Label").innerText = "🌱 Chana Dal:";
        document.getElementById("crop1Text").innerText = "Protein-rich pulses grown with healthy soil practices.";

        document.getElementById("crop2Label").innerText = "🌽 Maize:";
        document.getElementById("crop2Text").innerText = "Fresh maize cultivated with balanced water management.";

        document.getElementById("crop3Label").innerText = "🌾 Wheat:";
        document.getElementById("crop3Text").innerText = "Premium wheat grown naturally for healthy grains and flour.";

        document.getElementById("crop4Label").innerText = "🌿 Jowar:";
        document.getElementById("crop4Text").innerText = "Traditional grain grown for food and fodder purposes.";

        document.getElementById("crop5Label").innerText = "🧅 Onion:";
        document.getElementById("crop5Text").innerText = "Quality onions cultivated with care for freshness and storage.";

        document.getElementById("crop6Label").innerText = "🌍 Method:";
        document.getElementById("crop6Text").innerText = "Sustainable farming with minimal chemicals and soil care.";

        document.getElementById("cropWhatsappBtn").innerText = "🌾 Get Crop Price";
        document.getElementById("switchLang").innerText = "ಕನ್ನಡ";
        
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



/* =========================
   CROP POPUP MODAL
========================= */
function openCropModal() {
    document.getElementById("cropModal").style.display = "block";
}

function closeCropModal() {
    document.getElementById("cropModal").style.display = "none";
}

window.onclick = function (event) {
    let goatModal = document.getElementById("goatModal");
    let cropModal = document.getElementById("cropModal");

    if (event.target === goatModal) {
        goatModal.style.display = "none";
    }

    if (event.target === cropModal) {
        cropModal.style.display = "none";
    }
};
const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

let currentIndex = 0;

// Open modal
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        currentIndex = index;
    });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";

// Next image
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
};

// Previous image
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
};

// Close when clicking outside
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
