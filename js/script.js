let menuVisible = false;
//funcion que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez seleccionada una opción
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//funcion que aplica animaciones en las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("filmora");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("superacion");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("responsabilidad");
    }
}

//detecto el scrolling para aplicar la anumacion de la barra de habs
window.onscroll = function(){
    efectoHabilidades();
}