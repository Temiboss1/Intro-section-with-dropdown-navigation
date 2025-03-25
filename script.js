document.addEventListener("DOMContentLoaded", function () {
  
    const featuresToggle = document.getElementById("features-toggle");
    const companyToggle = document.getElementById("company-toggle");
    const featuresMenu = document.getElementById("features-menu");
    const companyMenu = document.getElementById("company-menu");
    const featuresArrow = featuresToggle.querySelector("img");
    const companyArrow = companyToggle.querySelector("img");
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("close-menu");
    const menu = document.querySelector(".menu");
    const overlay = document.getElementById("overlay");

   
    function toggleDropdown(menu, arrow) {
        const isOpen = menu.style.display === "block";
        

        if (isOpen) {
            menu.style.display = "none";
            arrow.src = "images/icon-arrow-down.svg"; 
        } else {
            menu.style.display = "block";
            arrow.src = "images/icon-arrow-up.svg"; 
        }
    }

   
    function closeAllDropdowns() {
        featuresMenu.style.display = "none";
        companyMenu.style.display = "none";
        featuresArrow.src = "images/icon-arrow-down.svg";
        companyArrow.src = "images/icon-arrow-down.svg";
    }

 
    featuresToggle.addEventListener("click", function () {
        toggleDropdown(featuresMenu, featuresArrow);
    });

    companyToggle.addEventListener("click", function () {
        toggleDropdown(companyMenu, companyArrow);
    });

    
    document.addEventListener("click", function (event) {
        if (!featuresToggle.contains(event.target) && !featuresMenu.contains(event.target) &&
            !companyToggle.contains(event.target) && !companyMenu.contains(event.target)) {
            closeAllDropdowns();
        }
    });

   
    hamburger.addEventListener("click", function () {
        menu.classList.add("active");
        overlay.style.display = "block";
    });

    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
        overlay.style.display = "none";
    });

   
    overlay.addEventListener("click", function () {
        menu.classList.remove("active");
        overlay.style.display = "none";
    });
});
