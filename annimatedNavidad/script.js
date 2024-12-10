 // Funcción para traducir
 function translate(){
    let title = document.querySelectorAll(".title");
    if (title.innerHTML == "Web de Navidad Animada") {
        title.innerHTML = "Site web de Noel annimé";
    } else {
        title.innerHTML = "Web de Navidad Animada";
    }
    let description = document.querySelector(".hidden")

}
function seeSect(){
    const section = document.querySelector("section");

}

// Añadir un ecuchador de evento para el bóton
document.getElementById('translateButton').addEventListener('click', translate);