


//BASE DE DATOS
	var productos = ["Nike Huarache", "Nike Air Max 1", "Nike Presto 2017", "Adidas Z Flux", "Adidas NMD R1", "Adidas Yezzy Boost 250", "Reebok club ", "Asisc Gel Lyte Evo", "Vans Old Skool"];
	var imgGrandes = ["img/productos/N001.jpg", "img/productos/N002.png", "img/productos/N003.jpg", "img/productos/A001.jpg", "img/productos/A002.jpg", "img/productos/A003.png", "img/productos/AC001.jpeg", "img/productos/R001.jpg", "img/productos/V001.jpeg"];
	var imgPeque = ["img/productos/Nm001.jpeg", "img/productos/Nm002.jpeg", "img/productos/Nm003.jpeg", "img/productos/Am001.jpg", "img/productos/Am002.jpeg", "img/productos/Am003.jpeg", "img/productos/ACm001.jpg", "img/productos/Rm001.jpg", "img/productos/Vm001.jpeg"];
	var precios = [95, 110, 99, 40, 100, 450, 60, 55, 40];
	var stock = [5, 2, 8, 3, 10, 1, 3, 4, 3];
	var precioTransporte = [6, 12, 20, "gratis"];
	var IVA = 0.21;
	var uniUser;
	
	
	
//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:	
	window.onload = function(){

	
		//Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos de la base de datos:
		var DIVS = document.getElementsByName("DIVS");
		for (i in productos){
			DIVS[i].innerHTML = '<a id="imgG' + i + '" href="' 
			+ imgGrandes[i] +  '"><img id="imgP'+ i + '" class="imagen" src="' 
			+ imgPeque[i] + '"></a><div class="etiquetas"><b><span id="pro' + i + '">' 
			+ productos[i] + '</span>:&nbsp;<span id="pre'+ i + '">' + precios[i] 
			+ '&euro;</span></b></div><div class="stock">Hay en stock <span id="uni'+ i +'">' 
			+ stock[i] + '</span> unidades,<br/>Cuantas quiere?: <input class="uniBien" type="number" id="uniUser' 
			+ i + '" name="uniUser" value="0" size="4" /></div>';
		}
	
	
		//Rellena el campo dia y año, de la fecha de nacimiento y tarjeta de credito:
		//Fecha de nacimiento
		var fecha = new Date();
		var anio = fecha.getFullYear();
				
		for (var i=1;i<=31;i++){
			document.getElementById("fechaNacimientoDia").innerHTML = document.getElementById("fechaNacimientoDia").innerHTML 
			+ '<option value="' + i + '">' + i + '</option>';
		}
				
		for (var i=anio;i>=(anio-110);i--){
			document.getElementById("fechaNacimientoAnio").innerHTML = document.getElementById("fechaNacimientoAnio").innerHTML 
			+ '<option value="' + i + '">' + i + '</option>';
		}

		//Tarjeta de credito:
		for (var i=1;i<=12;i++){
			document.getElementById("mesTarjeta").innerHTML = document.getElementById("mesTarjeta").innerHTML 
			+ '<option value="' + i + '">' + i + '</option>';
		}

		for (var i=anio;i<=(anio+21);i++){
			document.getElementById("anioTarjeta").innerHTML = document.getElementById("anioTarjeta").innerHTML 
			+ '<option value="' + i + '">' + i + '</option>';
		}

		
	
		//Botones que llevaran a cabo la ejecucion de determinadas secuencias de codigo JavaScript:
		document.getElementById("botonTotal").onclick = validaLasUnidades;
		document.getElementById("botonDatos").onclick = pideDatos;
		document.getElementById("botonPago").onclick = validaDatosPersonales;
		document.getElementById("botonConfirmar").onclick = validaDatosPago;
	}

	
	
	
	/*-------------------COMIENZAN LAS FUNCIONES-------------------*/




//FUNCION DE VALIDACION DE UNIDADES:
	function validaLasUnidades(elEvento) {
		
		var todoBien = true;
		uniUser = document.getElementsByName("uniUser");
		
		
		for (i in productos){
		
			if ( uniUser[i].value == "" || uniUser[i].value > stock[i] || uniUser[i].value < 0 ){
				
				todoBien = false;
				uniUser[i].className = "uniMal";
								
				//Modifica el css para quitar los formularios:
				document.getElementById("todo").className = "todoNo";
				document.getElementById("menu").className = "menuNo";
				document.getElementById("divZonaCompra").className = "divZonaCompraNo";
				document.getElementById("divTotal").className = "divsNo";
				document.getElementById("divDatos").className = "divsNo";
				document.getElementById("divPago").className = "divsNo";				
				
				//Deshabilita el boton de datos personales:
				document.getElementById("botonDatos").disabled = true;
				document.getElementById("botonDatos").disabled = true;
				document.getElementById("botonDatos").disabled = true;				
				
				//Con solo un error se para la validacion de unidades:
				return;
			}
			else{
				todoBien = true;
				uniUser[i].className = "uniBien";
			}
		}

		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de cargar el carro de la compra:
		if (todoBien){
			calculaElTotal();
		}
	}

	

	
//FUNCION QUE MUESTRA EL CARRO DE LA COMPRA:
	function calculaElTotal(elEvento) {

	
		//Añade el encabezado de la tabla
		document.getElementById("tablaTotal")
			.innerHTML = '<tr><td class="pro"><b>Producto</b></td><td class="uni"><b>Unidades</b></td><td class="preUni"><b>Precio Unidad</b></td><td class="preTotal"><b>Precio Total</b></td></tr>';
	
	
		//Inicializacion de las variables para esta funcion:
		var carroTotal = 0;
		var numProductos = 0;
		
		
		//Muestra el carrito de la compra
		for (i in productos){

			var tablaTotal = document.getElementById("tablaTotal").innerHTML;
			var preTotal = 0;
		
			
			//Cuenta el numero de productos para saber cuanto costara el transporte
			if (uniUser[i].value != 0){
				numProductos++;
			}
			
			
			if (uniUser[i].value != 0){
			
				//Modifica el css para hacer hueco a los formularios
				document.getElementById("todo").className = "todoSi";
				document.getElementById("menu").className = "menuSi";
				document.getElementById("divZonaCompra").className = "divZonaCompraSi";
				document.getElementById("divTotal").className = "divsSi";
				document.getElementById("divDatos").className = "divsNo";
				document.getElementById("divPago").className = "divsNo";				
				
				//Habilita el boton de datos personales
				document.getElementById("botonDatos").disabled = false;
				
				//Calcula el totalUnidades y rellena el carro de la compra
				preTotal = precios[i] * uniUser[i].value;
				carroTotal = carroTotal + preTotal;
				document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr class="proCarrito"><td>' +productos[i]+ '</td><td>' +uniUser[i].value+ '</td><td>' +precios[i]+ '</td><td id="preTotal' +i+'" name="preTotal">' +preTotal+ '</td></tr>';
			}
		}
		

		//Se calcula el transporte a pagar segun la cantidad de productos comprados:
		var precioTransporteAPagar;
		if (numProductos <= 2){
			precioTransporteAPagar = precioTransporte[0];
		}
		else if (numProductos <= 3){
			precioTransporteAPagar = precioTransporte[1];
		}
		else if (numProductos <= 4){
			precioTransporteAPagar = precioTransporte[2];
		}
		else if (numProductos >= 5){
			precioTransporteAPagar = precioTransporte[3];
		}

		//Se sacan las cuentas del transporte (si lo hubiese), del iva y el total:
		var totalTransporte = precioTransporteAPagar;
		if(totalTransporte == "gratis"){
			var totalIVA = (carroTotal * IVA);
			var totalAPagar = carroTotal + totalIVA;
		}
		else{
			var totalIVA = ((carroTotal + totalTransporte) * IVA);
			var totalAPagar = carroTotal + totalTransporte + totalIVA;
		}

		
		//Limitar a 2 los decimales a mostrar del IVA:
		totalIVA=totalIVA*100;
		totalIVA=Math.floor(totalIVA);
		totalIVA=totalIVA/100;
		//Limitar a 2 los decimales a mostrar del TOTAL A PAGAR:
		totalAPagar=totalAPagar*100;
		totalAPagar=Math.floor(totalAPagar);
		totalAPagar=totalAPagar/100;		
		
		//Se añade a la tabla el TOTAL que suma el carrito:
		tablaTotal = document.getElementById("tablaTotal").innerHTML;
		document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Transporte: </b></td><td class="preTotal"><b>' +totalTransporte+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>IVA ('+(IVA*100)+'%): </b></td><td class="preTotal"><b>' +totalIVA+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Total: </b></td><td class="preTotal" id="totalAPagar"><b>' +totalAPagar+ ' &euro; </b></td></tr>';
	}	
	
	
	
	
//FUNCION DE PEDIR DATOS
	function pideDatos(elEvento) {
		document.getElementById("divDatos").className = "divsSi";
		document.getElementById("divTotal").className = "divsNo";
		document.getElementById("divPago").className = "divsNo";		
		document.getElementById("botonPago").disabled = false;
	}	

	

	
//FUNCION DE VALIDACION DE DATOS PERSONALES:
	function validaDatosPersonales(elEvento) {

		var todoBien = true;
	
	
		 //Nombre:
			var vNombre = document.getElementById("nombre").value;
			if( vNombre == null || vNombre.length == 0 || !isNaN(vNombre)) {
				todoBien=false;
				document.getElementById("nombre").className = "textMal";
				
			}
			else{
				document.getElementById("nombre").className = "textBien";
			
			}	
	
//			alert("1->" + todoBien);
	
		//DNI:	
			var vDNI = document.getElementById("dni").value;
			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
			'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
			
			if( !(/^\d{8}[A-Z]$/.test(vDNI)) ) {
				todoBien=false;
				document.getElementById("dni").className = "textMal";
			}
			else{
				document.getElementById("dni").className = "textBien";
			}
			
			if(vDNI.charAt(8) != letras[(vDNI.substring(0, 8))%23]) {
				todoBien=false;
				document.getElementById("dni").className = "textMal";
				alert("DNI incorrecto")
			}	
			else{
				document.getElementById("dni").className = "textBien";
			}	
			
//			alert("2->" + todoBien);
		//Fecha de nacimiento DIA:
			var vFechaNacimientoDia = document.getElementById("fechaNacimientoDia").selectedIndex;
			if( vFechaNacimientoDia == null || vFechaNacimientoDia == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoDia").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoDia").className = "textBien";
			}
			
//			alert("3->" + todoBien);
			
		//Fecha de nacimiento MES:
			var vFechaNacimientoMes = document.getElementById("fechaNacimientoMes").selectedIndex;
			if( vFechaNacimientoMes == null || vFechaNacimientoMes == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoMes").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoMes").className = "textBien";
			}	
			
//			alert("4->" + todoBien);
			
		//Fecha de nacimiento AÑO:
			var vFechaNacimientoAnio = document.getElementById("fechaNacimientoAnio").selectedIndex;
			if( vFechaNacimientoAnio == null || vFechaNacimientoAnio == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoAnio").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoAnio").className = "textBien";
			}	
	
//			alert("5->" + todoBien);
	
		//Telefono:
			var vMovil = document.getElementById("movil").value;
			if( !(/^\d{9}$/.test(vMovil))  ) {
				todoBien=false;
				document.getElementById("movil").className = "textMal";
			}
			else{
				document.getElementById("movil").className = "textBien";
			}	
			
//			alert("6->" + todoBien);
	
	
		//email:
			var vEmail1 = document.getElementById("email1").value;
			var vEmail2 = document.getElementById("email2").value;

			//email 1
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail1)) ) {
				todoBien=false;
				document.getElementById("email1").className = "textMal";
			}
			else{
				document.getElementById("email1").className = "textBien";
			}
			
			//email 2
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail2)) ) {
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}
			else{
				document.getElementById("email2").className = "textBien";
			}

			//Comparacion email 1 y 2
			if (vEmail1 != vEmail2){
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}

//			alert("7->" + todoBien);
		 //Nombre Via:
			var vViaNombre = document.getElementById("viaNombre").value;
			if( vViaNombre == null || vViaNombre.length == 0 || /^\s+$/.test(vViaNombre) || !isNaN(vViaNombre)) {
				todoBien=false;
				document.getElementById("viaNombre").className = "textMal";
			}
			else{
				document.getElementById("viaNombre").className = "textBien";
			}				

			
//			alert("8->" + todoBien);
			
		//Via Numero:	
			var vViaNumero = document.getElementById("viaNumero").value;
			if( vViaNumero=="" || isNaN(vViaNumero) ) {
				todoBien=false;
				document.getElementById("viaNumero").className = "textMal";
			}	
			else{
				document.getElementById("viaNumero").className = "textBien";
			}	

//			alert("9->" + todoBien);
			
			
		 //Localidad:
			var vLocalidad = document.getElementById("localidad").value;
			if( vLocalidad == null || vLocalidad.length == 0 || /^\s+$/.test(vLocalidad) || !isNaN(vLocalidad)) {
				todoBien=false;
				document.getElementById("localidad").className = "textMal";
			}
			else{
				document.getElementById("localidad").className = "textBien";
			}					

//			alert("10->" + todoBien);
		//Codigo Postal:	
			var vCodigoPostal = document.getElementById("codigoPostal").value;
			if( vCodigoPostal.length!=5 || vCodigoPostal=="" || isNaN(vCodigoPostal) ) {
				todoBien=false;
				document.getElementById("codigoPostal").className = "textMal";
			}	
			else{
				document.getElementById("codigoPostal").className = "textBien";
			}	
	
//			alert("11->" + todoBien);
			
		//Provincia:
			var vProvincia = document.getElementById("provincia").selectedIndex;
			if( vProvincia == null || vProvincia == 0 ) {
				todoBien=false;
				document.getElementById("provincia").className = "textMal";
			}
			else{
				document.getElementById("provincia").className = "textBien";
			}	
	
			
//			alert("FIN DE VALIDACION --> todoBien??? " + todoBien);
			
//			todoBien= true;
			
//			alert("FORZAMOS VALIDACION ... " + todoBien);
			
	
		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de mostrar el formulario de los datos personales:
		if (todoBien){
//			alert("TODO BIEN");
			pideDatosPago(elEvento);

		} else{		
//			alert("NOOOOOOOOOOOO");
			document.getElementById("botonConfirmar").disabled = true;
		}
	}

	
	
	
//FUNCION DE VALIDAR DATOS y PEDIR DATOS PAGO
	function pideDatosPago(elEvento) {
		
		alert("FUNCION PIDE DATOS PAGO");
		
		document.getElementById("divTotal").className = "divsNo";
		document.getElementById("divDatos").className = "divsNo";
		document.getElementById("divPago").className = "divsSi";
		document.getElementById("botonConfirmar").disabled = false;
	}
	
	

	
//FUNCION DE VALIDACION DE DATOS PAGO:
	function validaDatosPago(elEvento) {

		var todoBien = true;
		
		//Titular de la cuenta:
		var vTitular = document.getElementById("titular").value;
		if( vTitular == null || vTitular.length == 0 || /^\s+$/.test(vTitular) || !isNaN(vTitular)) {
			todoBien=false;
			document.getElementById("titular").className = "textMal";
		}
		else{
			document.getElementById("titular").className = "textBien";
		}			
	
	
		//Tipo de tarjeta:
		var vTarjetas = document.getElementsByName("tarjetas");
		var seleccionado = false;
		for(var i=0; i<vTarjetas.length; i++) {
			if(vTarjetas[i].checked) {
				seleccionado = true;
				//break;
			}
		}
		if(!seleccionado) {
			todoBien=false;
			document.getElementById("alertTipoDeTarjeta").className = "alertTipoDeTarjeta";
		}
		else{
			document.getElementById("alertTipoDeTarjeta").className = "";
		}		
	
	
		//Numero de tarjeta:	
		var vNumeroTarjeta = document.getElementById("numeroTarjeta").value;
		if( vNumeroTarjeta.length!=16 || vNumeroTarjeta=="" || isNaN(vNumeroTarjeta) ) {
			todoBien=false;
			document.getElementById("numeroTarjeta").className = "textMal";
		}	
		else{
			document.getElementById("numeroTarjeta").className = "textBien";
		}		

		
		//CVC de la tarjeta:	
		var vCvcTarjeta = document.getElementById("cvcTarjeta").value;
		if( vCvcTarjeta.length!=3 || vCvcTarjeta=="" || isNaN(vCvcTarjeta) ) {
			todoBien=false;
			document.getElementById("cvcTarjeta").className = "textMal";
		}	
		else{
			document.getElementById("cvcTarjeta").className = "textBien";
		}	

		
		//Fecha de tarjeta MES:
		var vMesTarjeta = document.getElementById("mesTarjeta").selectedIndex;
		if( vMesTarjeta == null || vMesTarjeta == 0 ) {
			todoBien=false;
			document.getElementById("mesTarjeta").className = "textMal";
		}
		else{
			document.getElementById("mesTarjeta").className = "textBien";
		}	
		//Fecha de tarjeta A�O:
		var vAnioTarjeta = document.getElementById("anioTarjeta").selectedIndex;
		if( vAnioTarjeta == null || vAnioTarjeta == 0 ) {
			todoBien=false;
			document.getElementById("anioTarjeta").className = "textMal";
		}
		else{
			document.getElementById("anioTarjeta").className = "textBien";
		}				


		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de enviar los datos:
		if (todoBien){
			validaDatosPagoYEnviaCarro();
		}
	}

	


//FUNCION DE VALIDAR DATOS PAGO y ENVIAR DATOS
	function validaDatosPagoYEnviaCarro(elEvento) {
		alert("Gracias por su compra, en 24 horas recibira su pedido\nAhora sera redirigido a la pagina de inicio.");
		window.location.reload()
	}

	
	
	
