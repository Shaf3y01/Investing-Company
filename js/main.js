let moonIcon = document.querySelector('.dark-theme');
let sunIcon = document.querySelector('.light-theme')
let stylesheet = document.querySelector('#skin-color');
let image = document.querySelectorAll('.more-img');
let showMore = document.querySelector('.show-more');
let showLess = document.querySelector('.show-less');
console.log(image);
console.log(showMore);
// if(window.localStorage.getItem("Theme") === "") {
//     window.localStorage.setItem("Theme","Light")
// } else if (window.localStorage.getItem("Theme") === "Dark") {
//     stylesheet.setAttribute('href','css/style.css')
//     window.localStorage.setItem("Theme","Dark")
// }
if (window.localStorage.getItem("Theme") === "Dark") {
        stylesheet.setAttribute('href','css/style-dark.css')
}
moonIcon.addEventListener('click', ()=> {
    stylesheet.setAttribute("href", "css/style-dark.css")
    window.localStorage.setItem("Theme","Dark")
})

sunIcon.addEventListener('click', ()=> {
    stylesheet.setAttribute('href','css/style.css')
    window.localStorage.removeItem("Theme")
})

showMore.addEventListener('click', ()=> {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "block";
    }
    showMore.style.display= "none";
    showMore.style.display = "block";
})
showLess.addEventListener('click', ()=> {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "block";
    }
    showMore.style.display= "none";
    showMore.style.display = "block";
})
// window.localStorage.setItem("topic", "html");
// if (window.localStorage.getItem("topic")) {
//     window.localStorage.removeItem("topic")
// } else {
//     console.log('not there')
// };



// EL NAV
let activeLink = document.querySelectorAll('.nav-item .nav-link')
console.log(activeLink)
for (let index = 0; index < activeLink.length; index++) {
    activeLink[index].addEventListener('click', ()=> {
        // for remove
        for (let index = 0; index < activeLink.length; index++) {
            activeLink[index].classList.remove('active')
        }

        activeLink[index].classList.add('active')
    })
} 
// MATENSASH TEFTA7 EL ACCORDION TE3ADELO 
//el second for loop 3ashan tetcheck el items elly fel list w y-remove el active class el awel 

// 
let message = document.querySelector('textarea');
let inputs = document.querySelectorAll('.email-data');
let email = document.querySelectorAll('.email');
let subject = document.querySelectorAll('.subject')
message.disabled = true; 

for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('blur', ()=> {
        if (email.value == "" || subject.value == "") {
            message.disabled = true
        } else {
            message.disabled = false
        }
    }) 
}
