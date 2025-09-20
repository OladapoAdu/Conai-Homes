window.addEventListener("load", function(){
    let loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.style.display = "none", 500);
});