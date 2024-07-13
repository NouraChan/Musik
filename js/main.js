//********************************************Countdown function********************************************************


var musicday = new Date('08/06/2024');

var sec = 1000;
var min = sec * 60;
var h = min * 60;
var d = h * 24;
var countdown;

function comingSoon() {
    var atm = new Date();
    var waytogo = musicday - atm;
    if (waytogo < 0) {

        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Welcome!';

        return;
    }
    var days = Math.floor(waytogo / d);
    var hours = Math.floor((waytogo % d) / h);
    var minutes = Math.floor((waytogo % h) / min);
    var seconds = Math.floor((waytogo % min) / sec);

    document.getElementById('countdown').innerHTML = days + 'd ';
    document.getElementById('countdown').innerHTML += hours + 'h  ';
    document.getElementById('countdown').innerHTML += minutes + 'm ';
    document.getElementById('countdown').innerHTML += seconds + 's';
}

countdown = setInterval(comingSoon, 1000);




//********************************************Tableshow function********************************************************


// function showTable(btnID) {

// let activeBtn = document.getElementById(btnID);
// document.getElementById('day1Btn').setAttribute("class", "datenonselected");
// document.getElementById('day2Btn').setAttribute("class", "datenonselected");
// document.getElementById('day3Btn').setAttribute("class", "datenonselected");
// activeBtn.setAttribute("class", "dateselected");



const daybtn = document.querySelectorAll('.datenonselected');
const daysched = document.querySelectorAll('.contentall');

daybtn.forEach((dBtn, index) => {
    dBtn.addEventListener('click', () => {
        daybtn.forEach(dBtn => dBtn.classList.remove('dateselected'));
        dBtn.classList.add('dateselected');

        daysched.forEach(contentall => contentall.classList.remove('showtable'));
        daysched[index].classList.add('showtable');
    })
})



//********************************************Testimonials function********************************************************


$('#testimonsel').owlCarousel({
    stagePadding: 300,
    loop: true,
    startPosition: 1,
    items: 3,
    autoplay: true,
    autoplayTimeout: 4000,
    // autoplayHoverPause:true,
    autoplaySpeed: 2000,
    // touchDrag: false,
    // mouseDrag: false,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
        0: {
            stagePadding: 1,
            items: 1,
        },
        400: {
            items: 1,
            margin: 100,
            stagePadding: 0,
        },
        600: {
            items: 1,
            stagePadding: 20,
        },
        800: {
            items: 1,
            margin: 50,
            stagePadding: 28,
        },
        1000: {
            items: 1,
            margin: 50,
            stagePadding: 75,
        },
        1400: {
            items: 1,
            margin: 50,
            stagePadding: 320,


        }
    }
})


//********************************************Shots function********************************************************


$('#shotsel').owlCarousel({
    center: true,
    loop: true,
    startPosition: 2,
    items: 5,
    autoplay: true,
    // autoplayTimeout: 4000,
    // autoplayHoverPause:true,
    // autoplaySpeed: 2000,
    // touchDrag: false,
    // mouseDrag: false,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
        0: {
            stagePadding: 30,
            items: 1,
        },
        400: {
            items: 1,
            margin: 100,
            stagePadding: 10,
        },
        600: {
            margin: 100,
            items: 2,
            stagePadding: 0,
        },
        700: {
            items: 2,
            margin: 200,
            stagePadding: 20,
        },
        800: {
            items: 3,
            margin: 120,
            stagePadding: 5,
        },
        1000: {
            items: 3,
            margin: 50,
            stagePadding: 40,
        },
        1400: {
            items: 3,
            margin: 50,
            stagePadding: 270,


        }
    }
})

//********************************************Validation function********************************************************


var nameRegex = /^[a-zA-Z]{1,}$/;
var emailRegex = /^(([^<>()[\]\\\\.,;:\s@"]+(\.[^<>()[\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function nameValid() {
    let name = document.querySelector('#name');
    let nameValid = nameRegex.test(name.value);
    if (nameValid) {
        document.querySelector('#error_name').innerHTML = "";
        name.classList.remove('formalarm');
        return true;
    } else {
        document.querySelector('#error_name').innerHTML = "You cannot leave this field empty";        
        name.classList.add('formalarm');
        return null;
    }
}

function emailValid() {
    let email = document.querySelector('#email');
    let emailValid = emailRegex.test(email.value);
    if (emailValid) {
        document.querySelector('#error_email').innerHTML = "";
        email.classList.remove('formalarm');
        return true;
    } else {
        document.querySelector('#error_email').innerHTML = "Please enter a valid email.";
        email.classList.add('formalarm');
        return null;
    }
}


//confirms if empty 

function noSpam() {
    let msg = document.querySelector('#msg');
    if (msg.value == "") {
        document.querySelector('#error_msg').innerHTML = "You cannot leave this field empty";
        msg.classList.add('formalarm');
        return null;
    }
    else {
        document.querySelector('#error_msg').innerHTML = "";
        msg.classList.add('formalarm');
        return true
    }
}


function formValidate() {

    nameValid();
    emailValid();
    noSpam();


    if (nameValid()  && emailValid() && noSpam()) {
        return true
    } else {
        // alert('Error.');
        return false;
    }
}
