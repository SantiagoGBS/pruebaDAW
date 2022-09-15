const registro = ()=> {
    if(confirm("Registrese para estar al día de las novedades")){
        window.location.href="pages/formulario.html"
    }
}
//prueba
setTimeout(() => {
    registro()
}, 5000);