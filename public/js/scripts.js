$(document).foundation()

// Home page script
if (window.location.pathname === "/") {
    /* Tech button filtering functionality */
    const btnContainer = document.querySelector(".tech-btn-wrapper")
    const btns = btnContainer.getElementsByClassName("tech-btn")
    const projectPosters = document.querySelectorAll(".poster")

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            //adds and removes active classes from tech buttons
            if (this.classList.contains("active")) {
                this.classList.remove('active');
            } else {
                this.classList.add('active')
            }

            //removes projects not matching selected buttons
            for (var i = 0; i < projectPosters.length; i++) {
                let projectTechsArray = JSON.parse(projectPosters[i].getAttribute("techs"))
                let activeTechButtons = document.getElementsByClassName('tech-btn active')
                let techButtonTextArray = []

                //reset posters if no buttons are set to active
                if (activeTechButtons.length === 0) {
                    for (var i = 0; i < projectPosters.length; i++) {
                        projectPosters[i].style.display = "inline-block";
                    }
                } else {
                    Array.from(activeTechButtons).forEach((btn) => { techButtonTextArray.push(btn.innerText) })
                    //if techArray incldues technology that is also active, show poster
                    const intersection = projectTechsArray.filter(tech => techButtonTextArray.includes(tech));

                    if (intersection.length === 0) {
                        projectPosters[i].style.display = 'none'
                    } else {
                        projectPosters[i].style.display = 'inline-block'
                    }
                }
            }

        });
    } 
}


//Project Page script
if (window.location.pathname.includes("/project/")) { 
    /* SLIDESHOW SCRIPT */
    var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    } 
}
