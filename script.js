let form = document.querySelector(".hidden");
let no= document.getElementsByClassName("no")[0];
let yes= document.getElementsByClassName("yes")[0];
let hideRole= document.getElementsByClassName("toggle")[0];

no.addEventListener('click', () => {
    form.style.display ="none";
    hideRole.style.display="block";
})

yes.addEventListener('click', () => {
    form.style.display = "block";
    hideRole.style.display="none";  
})
