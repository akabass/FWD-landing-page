/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
    const sections=[];
    const section1=document.getElementById("section1") 
    const section2=document.getElementById("section2") 
    const section3=document.getElementById("section3") 
    const section4=document.getElementById("section4") 
    sections.push(section1,section2,section3,section4);
    var VALUE=150;
    // const rect=elem


/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
*/

function makeActive(){
    for (section of sections) {

    const box = section.getBoundingClientRect();

    //Find a value that works best, but 150 seems to be a good start.

    if (box.top <= VALUE && box.bottom >= VALUE) {
        section.classList.add("your-active-class")
    //apply active state on current section and corresponding Nav link
    
    } else {
    //Remove active state from other section and corresponding Nav link
    if(section.classList.contains("your-active-class")){
        section.classList.remove("your-active-class")
    }
    else{
    }

    }
    }
    }
    // function onScroll(event){
    //     var scrollPos = $(document).scrollTop();
    //     $('#menu-center a').each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('#menu-center ul li a').removeClass("active"); //added to remove active class from all a elements
    //             currLink.addClass("active");
    //         }
    //         else{
    //             currLink.removeClass("active");
    //         }
    //     });
    // }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener("scroll", function() { makeActive();});



// Set sections as active



