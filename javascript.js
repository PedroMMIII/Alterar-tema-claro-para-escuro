const btnTema = document.querySelector(".btn-tema");

btnTema.addEventListener("click", function(){
    btnTema.classList.toggle("btn-dark")
    document.body.classList.toggle("dark")
})