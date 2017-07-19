<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
					
<html xmlns="http://www.w3.org/1999/xhtml">
	
	<head>
		<title>SneakerLoverz</title>
		
		<!--lee codigo javascript-->
		<script type="text/javascript" src="js/javascript.js"></script>
		
		<!--lee codigo css-->
		<link type="text/css" href="css/style.css" rel="stylesheet" media="screen"/>
	</head>


	<body>
	
		<br/><br/>
	
		<div align="center">
		
		<img src="img/otros/logo3.png" alt="sneakerloverz" />
		
		</div>
	
	
		<div id="todo" class="todoNo">
			<div id="menu" class="menuNo">
				
				
				<!--Producto del 1 al 9-->
				<div id="div1" name="DIVS"></div>
				<div id="div2" name="DIVS"></div>
				<div id="div3" name="DIVS"></div>
				<div id="div4" name="DIVS"></div>
				<div id="div5" name="DIVS"></div>
				<div id="div6" name="DIVS"></div>
				<div id="div7" name="DIVS"></div>
				<div id="div8" name="DIVS"></div>
				<div id="div9" name="DIVS"></div>
		
				
				<!--Botones de compra-->
				<div id="divbotones">
					<input type="button" id="botonTotal" value="Calcular total"/>
					<input type="button" id="botonDatos" value="Datos personales"/>
					<input type="button" id="botonPago" value="Pago" />
					<input type="button" id="botonConfirmar" value="Confirmar pedido"/>
				 </div>

				
				<!--zona de compra, tablas, formularios, etc.-->
				<div id="divZonaCompra" class="divZonaCompraNo">

				
					<!--Carrito de la compra-->
					<div id="divTotal" class="divsNo">
						<p><font size="5" color="#D84848">CARRO COMPRA</font><br/><br/><font size="3">Si quiere hacer alguna modificacion aun esta a tiempo:</font><br/><br/></p>
						<table id="tablaTotal"></table>
					</div>
				
				
					<!--Datos personales-->				
					<div id="divDatos" class="divsNo">
						<p><b>Introduzca sus datos personales:</b></p>

							<div id="divDatosPersonales0">
								<div id="divDatosPersonales1">
									<label>Nombre completo:</label><br/>
									<input type="text" id="nombre" value="Luis" size="26" /><br/>
									
									
									<label>DNI:</label><br/>
									<input type="text" id="dni" value="49008702A" size="8" maxlength="9" /><br/>
									
									
									<label>Fecha de nacimiento:</label><br/>
									<select id="fechaNacimientoDia">
										<option value="">�dia�</option>
									</select>
									<select id="fechaNacimientoMes">
										<option value="">������mes</option>
										<option value="1">Enero</option>
										<option value="2">Febrero</option>
										<option value="3">Marzo</option>
										<option value="4">Abril</option>
										<option value="5">Mayo</option>
										<option value="6">Junio</option>
										<option value="7">Julio</option>
										<option value="8">Agosto</option>
										<option value="9">Septiembre</option>
										<option value="10">Octubre</option>
										<option value="11">Noviembre</option>
										<option value="12">Diciembre</option>
									</select>			
									<select id="fechaNacimientoAnio">
										<option value="1984">��a�o�</option>
									</select><br/>
								</div>
								
								<div id="divDatosPersonales2">
									<label>Telefono movil:</label><br/>
									<input type="text" id="movil" value="676545676" size="8" maxlength="9"/><br/>

									<label>Email:</label><br/>
									<input type="text" id="email1" value="luis@gmail.com" size="25" /><br/>
									
									<label>Repita el email:</label><br/>
									<input type="text" id="email2" value="luis@gmail.com" size="25" />							
								</div>
							</div>

							
						<div id="divDomicilio">
							<label>Tipo de via:</label>
							<select id="tipoDeVia">
								<option value="Avenida">Avenida</option>
								<option value="Calle"selected="selected">Calle</option>
								<option value="Camino">Camino</option>
								<option value="Carretera">Carretera</option>
								<option value="Pasaje">Pasaje</option>
								<option value="Plaza">Plaza</option>
								<option value="Residencia">Residencia</option>
								<option value="Ronda">Ronda</option>
								<option value="Travesia">Travesia</option>
								<option value="Urbanizacion">Urbanizacion</option>
							</select>�����
							
							<label>Nombre via:</label>
							<input type="text" id="viaNombre" value="Fuenlabrada" size="20" /><br/>
							
							<label>N�/km:</label>
							<input type="text" id="viaNumero" value="23" size="2" />��
								
							<label>Bloque:</label>
							<input type="text" id="viaBloque" value="" size="2" />���������

							<label>Escalera:</label>
							<input type="text" id="viaEscalera" value="" size="2" />��
								
							<label>Piso:</label>
							<input type="text" id="viaPiso" value="9B" size="2" /><br/>
							
							
							<label>Localidad:</label>
							<input type="text" id="localidad" value="Madrid" size="13"/>��
							
							<label>Codigo Postal:</label>
							<input type="text" id="codigoPostal" value="" size="5" maxlength="5"/>��
							
							<label>Provincia:</label>
							<select id="provincia">
								<option value="">����������provincia</option>
								<option value="15">A coru�a</option>
								<option value="1">�lava</option>
								<option value="2">Albacete</option>
								<option value="3">Alicante</option>
								<option value="4">Almer�a</option>
								<option value="33">Asturias</option>
								<option value="5">�vila</option>
								<option value="6">Badajoz</option>
								<option value="7">Baleares</option>
								<option value="8">Barcelona</option>
								<option value="9">Burgos</option>
								<option value="10">C�ceres</option>
								<option value="11">C�diz</option>
								<option value="39">Cantabria</option>
								<option value="12">Castell�n</option>
								<option value="51">Ceuta</option>
								<option value="13">Ciudad Real</option>
								<option value="14">C�rdoba</option>
								<option value="16">Cuenca</option>
								<option value="99">Extranjero</option>
								<option value="17">Girona</option>
								<option value="18">Granada</option>
								<option value="19">Guadalajara</option>
								<option value="20">Guip�zcoa</option>
								<option value="21">Huelva</option>
								<option value="22">Huesca</option>
								<option value="23">Ja�n</option>
								<option value="26">La rioja</option>
								<option value="35">Las palmas</option>
								<option value="24">Le�n</option>
								<option value="25">Lleida</option>
								<option value="27">Lugo</option>
								<option value="28">Madrid</option>
								<option value="29">M�laga</option>
								<option value="52">Melilla</option>
								<option value="30">Murcia</option>
								<option value="31">Navarra</option>
								<option value="32">Ourense</option>
								<option value="34">Palencia</option>
								<option value="36">Pontevedra</option>
								<option value="37">Salamanca</option>
								<option value="38">Santa cruz de tenerife</option>
								<option value="40">Segovia</option>
								<option value="41">Sevilla</option>
								<option value="42">Soria</option>
								<option value="43">Tarragona</option>
								<option value="44">Teruel</option>
								<option value="45">Toledo</option>
								<option value="46">Valencia</option>
								<option value="47">Valladolid</option>
								<option value="48">Vizcaya</option>
								<option value="49">Zamora</option>
								<option value="50">Zaragoza</option>
							</select>
						</div>								
					</div>					
					
					
					<!--Datos de pago-->
					<div id="divPago" class="divsNo">
						<p><b>Introduzca los datos de la tarjeta de credito/debito donde se cargara el cobro:</b></p>

						
						<label>Titular de la tarjeta:</label><br/>
						<input type="text" id="titular" value="" size="26" /><br/>

						
						<div id="metodosDePago">
							<label><span  id="alertTipoDeTarjeta">Tipo de tarjeta:</span></label><br/>
							<label for="visa">
								<input type="radio" id="visa" name="tarjetas" class="logoTarjetas" value="Visa">
								<img src="img/pago/visa.gif"></img>
							</label>
							  
							<label for="masterCard">
								<input type="radio" id="masterCard" name="tarjetas" class="logoTarjetas" value="MasterCard">
								<img src="img/pago/mastercard.gif"></img>
							</label>
							  
							<label for="amex">
								<input type="radio" id="amex" name="tarjetas" class="logoTarjetas" value="American Express">
								<img src="img/pago/amex.gif"></img>
							</label>
							  
							<label for="aurora">
								<input type="radio" id="aurora" name="tarjetas" class="logoTarjetas" value="Aurora">
								<img src="img/pago/aurora.gif"></img>
							</label>
					
						</div>
						
						
						<div id="divNumeroTarjeta">
							<label>N�mero tarjeta y CVC:</label><br/>
							<input type="text" id="numeroTarjeta" value="" size="15" maxlength="16" />
							<input type="text" id="cvcTarjeta" value="" size="2" maxlength="3" /><br/>
							
							
							<select id="mesTarjeta">
								<option value="">��mes�</option>
							</select>

							<select id="anioTarjeta">
								<option value="">��a�o�</option>
							</select>
						</div>
					</div>						
				</div>
			</div>	
		</div>
		<br/><br/>
<!-- 		<div style="size: ">
			<img alt="nike" src="" align="left">
			<br/>
			<img alt="adidas" src="" align="left">
			<br/>
			<img alt="reebok" src="" align="left">
			<br/>
			<img alt="asics" src="" align="right">
			<br/>
			<img alt="vans" src="" align="right">
			<br/>
			<img alt="sneakerloverz" src="logo2.jpg" align="right">	
			
		</div> -->
		<div align="center">
			<font size="4" face="fantasy" class="pie">SneakerLoverz&reg;</font>
			<div align="right">
			
				<a href="https://www.instagram.com/nike/?hl=es"><img src="/img/social/nikelogo.png" alt="IGnike"/></a>
			
			</div>
		</div>
		<br/><br/>
	</body>
</html>