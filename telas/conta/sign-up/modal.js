const button = document.querySelector("#btnDialog");
const btnFecha = document.querySelector("#btnModal");
const modal = document.querySelector("dialog");

button.addEventListener("click", function (){
    modal.showModal();
})

btnFecha.addEventListener("click", function () {
    modal.close()
})