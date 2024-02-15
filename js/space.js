document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.querySelector(".arrow-container img");
    var linkList = document.querySelector(".arrow-container .link-list");

    arrow.addEventListener("click", function() {
        if (linkList.style.display === "none") {
            linkList.style.display = "block";
        } else {
            linkList.style.display = "none";
        }
    });
});

ScrollReveal().reveal('#fusee', {
    origin: 'bottom', 
    distance: '100px',
    duration: 1000, 
    delay: 200, 
    easing: 'ease',
    mobile: true,
    reset: false 
});


document.addEventListener("DOMContentLoaded", function() {
    var cotationLink = document.querySelector(".link-list a:first-child");

    cotationLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        var sectionCotation = document.getElementById("cotation");
        var sectionCotationRect = sectionCotation.getBoundingClientRect();
        var offsetTop = sectionCotationRect.top + window.pageYOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth" 
        });
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        var privilegesLink = document.querySelector(".link-list li:nth-child(2) a"); 

        privilegesLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            
            var privilegesSection = document.getElementById("privileges");
            var privilegesSectionRect = privilegesSection.getBoundingClientRect();
            var offsetTop = privilegesSectionRect.top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
