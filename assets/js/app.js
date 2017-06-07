$(function(){
	//Menu responsive

	//Calculamos ancho pagina
	var ancho= $(window).width(),
		links= $("#link"),
		btnMenu= $("#btn-menu"),
		icono= $("#btn-menu #boton");
		//Si la pagina es menor a 700px nos muestra el nuevo menú
		if(ancho < 700){
			links.hide();
			icono.addClass("fa-bars");
		}
		//al darle clik al icono nos despliega o abre el menu
		btnMenu.on("click", function(e){
			links.slideToggle();
			icono.toggleClass("fa-bars");
			icono.toggleClass("fa-times");
		});
		//al aumentar de los 700px vuelve al menu anterior
		$(window).on("resize", function(){
			if($(this).width()<700){
				links.show();
				icono.addClass("fa-times");
				icono.removeClass("fa-bars");
			}
		});
		
});