
const dropbutton = document.getElementById("dropbtn");
const dropdownmenu = document.getElementById("dropdown-content");
const menutext = document.getElementById("menu-text");
const dropdown = document.getElementById("dropdown-content");
const bottombar = document.querySelector(".bottom");
const dropdownbottombar = document.getElementById("dropdown-bottom");
const dropdowntopbar = document.getElementById("dropdown-top");
const menuruler = document.getElementById("ruler-svg-menu");
const dropdownruler = document.getElementById("ruler-svg-dropdown");
const servicesbutton = document.querySelector(".service-button");
const servicedescription = document.querySelector(".service-description");
const tilingbutton = document.getElementById("tiling-button");
const tilingdescription= document.getElementById("tiling-description");
const flatroofingbutton = document.getElementById("flat-roofing-button");
const flatroofingdescription= document.getElementById("flat-roofing-description");
const slatebutton = document.getElementById("slate-button");
const slatedescription= document.getElementById("slate-description");
const emergencyrepairbutton = document.getElementById("emergency-repair-button");
const emergencyrepairdescription = document.getElementById("emergency-repair-description");
const serviceimg = document.getElementById("service-img");
const tilingimg = document.getElementById("tiling-img");
const flatroofingimg = document.getElementById("flat-roofing-img");
const slateimg = document.getElementById("slate-img");
const emergencyrepairimg = document.getElementById("emergency-repair-img");
const dots = document.querySelectorAll(".dot");
const submitbtn = document.getElementById("submit-btn");
const inputs = document.querySelectorAll(".form");

dropbutton.addEventListener("click", () => {
    dropdownmenu.classList.toggle("show");
    menutext.classList.toggle("show");
    dropbutton.classList.toggle("active");
    dropdownbottombar.classList.toggle("active");
    dropdowntopbar.classList.toggle("active");
    menuruler.classList.toggle("active");
    dropdownruler.classList.toggle("active");

});

tilingbutton.addEventListener("click", () => {
    tilingdescription.classList.toggle("show");
    tilingbutton.classList.toggle("active");
    tilingimg.classList.toggle("active");

    if (flatroofingimg.classList.contains("active")) {
        flatroofingimg.classList.toggle("active");
        flatroofingdescription.classList.toggle("show");
        flatroofingbutton.classList.toggle("active");
    }

    if (slateimg.classList.contains("active")) {
        slateimg.classList.toggle("active");
        slatedescription.classList.toggle("show");
        slatebutton.classList.toggle("active");
    }

    if (emergencyrepairimg.classList.contains("active")) {
        emergencyrepairimg.classList.toggle("active");
        emergencyrepairdescription.classList.toggle("show");
        emergencyrepairbutton.classList.toggle("active");
    }


})

flatroofingbutton.addEventListener("click", () => {
    flatroofingdescription.classList.toggle("show");
    flatroofingbutton.classList.toggle("active");
    flatroofingimg.classList.toggle("active");

    if (tilingimg.classList.contains("active")) {
        tilingimg.classList.toggle("active");
        tilingdescription.classList.toggle("show");
        tilingbutton.classList.toggle("active");
    }

    if (slateimg.classList.contains("active")) {
        slateimg.classList.toggle("active");
        slatedescription.classList.toggle("show");
        slatebutton.classList.toggle("active");
    }

    if (emergencyrepairimg.classList.contains("active")) {
        emergencyrepairimg.classList.toggle("active");
        emergencyrepairdescription.classList.toggle("show");
        emergencyrepairbutton.classList.toggle("active");
    }

})

slatebutton.addEventListener("click", () => {
    slatedescription.classList.toggle("show");
    slatebutton.classList.toggle("active");
    slateimg.classList.toggle("active");

    if (tilingimg.classList.contains("active")) {
        tilingimg.classList.toggle("active");
        tilingdescription.classList.toggle("show");
        tilingbutton.classList.toggle("active");
    }

    if (flatroofingimg.classList.contains("active")) {
        flatroofingimg.classList.toggle("active");
        flatroofingdescription.classList.toggle("show");
        flatroofingbutton.classList.toggle("active");
    }

    if (emergencyrepairimg.classList.contains("active")) {
        emergencyrepairimg.classList.toggle("active");
        emergencyrepairdescription.classList.toggle("show");
        emergencyrepairbutton.classList.toggle("active");
    }




})

emergencyrepairbutton.addEventListener("click", () => {
    emergencyrepairdescription.classList.toggle("show");
    emergencyrepairbutton.classList.toggle("active");
    emergencyrepairimg.classList.toggle("active");

    if (tilingimg.classList.contains("active")) {
        tilingimg.classList.toggle("active");
        tilingdescription.classList.toggle("show");
        tilingbutton.classList.toggle("active");
    }

    if (slateimg.classList.contains("active")) {
        slateimg.classList.toggle("active");
        slatedescription.classList.toggle("show");
        slatebutton.classList.toggle("active");
    }

    if (flatroofingimg.classList.contains("active")) {
        flatroofingimg.classList.toggle("active");
        flatroofingdescription.classList.toggle("show");
        flatroofingbutton.classList.toggle("active");
    }


})

function updateDots() {
    dots.forEach(dot => {
        dot.classList.remove("active");
    });


    dots[index-1].classList.add("active");
}


const track = document.getElementById("track");
let slides = document.querySelectorAll(".review");

let index = 1;
let width = slides[0].offsetWidth;


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".review");


track.style.transform = `translateX(-${index * width}px)`;

function nextSlide() {
    if (index>= slides.length -1) return;

    index++;
    track.style.transition = "transform 0.5s ease";
    track.style.transform =`translateX(-${index * width}px)`;
    updateDots();
}

function prevSlide() {
    if (index<=0) return;

    index--;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * width}px)`;
    updateDots();
}

track.addEventListener("transitionend", () => {

    if (index === slides.length - 1) {
        track.style.transition = "none";
        index = 1;
    }

    if (index === 0) {
        track.style.transition = "none";
        index = slides.length - 2;
    }

    track.style.transform = `translateX(-${index * width}px)`;
    updateDots();
});


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


let slideTimer = setInterval(() => {
    nextSlide();
}, 5000);

function resetTimer() {
    clearInterval(slideTimer);

    slideTimer = setInterval(() => {
        nextSlide();
    }, 5000);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer()
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer()
});




function updateButton() {

    let hasValue = false;

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            hasValue = true;
        }
    });

    if (hasValue) {
        submitbtn.classList.add("active");
    } else {
        submitbtn.classList.remove("active");
    }
}

inputs.forEach(input => {
    input.addEventListener("input", updateButton);
    input.addEventListener("focus", updateButton);
    input.addEventListener("blur", updateButton);
});