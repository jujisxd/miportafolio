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

function enviarWhatsapp(){
    //obtengo los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var telefono = document.getElementById("telefono").value;
    var tema = document.getElementById("tema").value;

    //valido los campos obligatorios
    if(nombre === "" || email === "" || mensaje === ""){
        alert("Por favor, complete los campos obligatorios: Nombre, Email y Mensaje.");
        return;
    }

    const numeroWhatsapp = "34640523347"; // Reemplaza con tu número de WhatsApp

    let mensajeWhatsapp = `Hola, mi nombre es ${nombre}.\n`;

    if(telefono !== ""){
        mensajeWhatsapp += `Mi número de teléfono es: ${telefono}.\n`;
    }

    mensajeWhatsapp += `Mi email es: ${email}.\n`;

    if(tema !== ""){
        mensajeWhatsapp += `El tema es: ${tema}.\n`;
    }

    mensajeWhatsapp += `Mensaje: ${mensaje}`;

    //creo el mensaje por whatsapp
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;

    window.open(url, '_blank').focus();

    // Opcional: Limpiar el formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tema').value = '';
    document.getElementById('mensaje').value = '';
}
//detecto el scrolling para aplicar la anumacion de la barra de habs
window.onscroll = function(){
    efectoHabilidades();
}