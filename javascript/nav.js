const hamburger = document.querySelector ('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const mobile_item = document.querySelectorAll('.header .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}
)

mobile_item.forEach((mobile_item) => {
        mobile_item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');  
    })  
})

