 angular.module('pachaDrinks', ['ngSanitize', 'ngTouch']).controller('drinksController', function ($scope, $sce, $window) {
    $scope.bebidas = [
		{familyName:'Vodka', familyCode:'1', hasPremium: '1', tieneEnlace: '1', enlaceUno: '1', enlaceDos: '1', enlaceTres:'1', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Grey goose 70 cl', precio: '400', cantidad: '0', premium: '1' },
				{ titulo: 'Grey goose 1,5l', precio: '875', cantidad: '0', premium: '1' },
				{ titulo: 'Grey goose 3l', precio: '1600', cantidad: '0', premium: '1' },
				{ titulo: 'Grey goose 4,5l', precio: '2300', cantidad: '0', premium: '1' },
				{ titulo: 'Grey goose 6l', precio: '3200', cantidad: '0', premium: '1' },
				{ titulo: 'Grey goose VX', precio: '750', cantidad: '0', premium: '1' },
				{ titulo: 'Belvedere 70 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere Unfiltered 70 cl', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere Luminous 1,75L', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere Silver Sabre Special Edition Ibiza 1,75L', precio: '925', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere Unfiltered 1,75L', precio: '925', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere 3 L', precio: '1600', cantidad: '0', premium: '0' },
				{ titulo: 'Belvedere Luminous Mathusalem 6L', precio: '3200', cantidad: '0', premium: '0' },
				{ titulo: 'Stolichnaya', precio: '325', cantidad: '0', premium: '0' },
				{ titulo: 'Stolichnaya Elite', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Stolichnaya Elit Magnum 1,75L', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'Stolichnaya Elit JeROBOAM 3L', precio: '1600', cantidad: '0', premium: '0' },
				{ titulo: 'Stolichnaya Elit Pristine Water Series 70 cl', precio: '5000', cantidad: '0', premium: '0' },
				{ titulo: 'Ciroc 70 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Ciroc 1,75L', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'Ciroc 3L', precio: '1600', cantidad: '0', premium: '0' },
				{ titulo: 'Ciroc 6L', precio: '3200', cantidad: '0', premium: '0' },
				{ titulo: 'Absolut Elyx 70 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Absolut Elyx 1,5L', precio: '875', cantidad: '0', premium: '0' },
				{ titulo: 'Absolut Elyx 3L', precio: '1600', cantidad: '0', premium: '0' },
				{ titulo: 'Absolut Elyx 6L', precio: '3200', cantidad: '0', premium: '0' },
				{ titulo: 'Beluga 70 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Beluga Gold 70 cl', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'Eristoff Red', precio: '275', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Gin', familyCode:'2', hasPremium: '1', tieneEnlace: '1', enlaceUno: '2', enlaceDos: '2', enlaceTres:'2', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Bombay Sapphire', precio: '375', cantidad: '0', premium: '1' },
				{ titulo: 'Star Bombay', precio: '375', cantidad: '0', premium: '1' },
				{ titulo: 'Beefeater 24', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'Hendrick\'s', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'G Vine', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Gin Mare', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Bulldog', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Gin Num3', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Williams Chase Elegant Crisp', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Martin Millers', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Bayswater', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Oxley Gin', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Monkey 47', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Mombasa Gin', precio: '350', cantidad: '0', premium: '0' },
			] }
		]},
		
		{familyName:'Tequila', familyCode:'3', hasPremium: '1', tieneEnlace: '1', enlaceUno: '3', enlaceDos: '3', enlaceTres:'3', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Patron Silver', precio: '450', cantidad: '0', premium: '1' },
				{ titulo: 'Patron a&ntilde;ejo', precio: '500', cantidad: '0', premium: '1' },
				{ titulo: 'Patron Cafe', precio: '400', cantidad: '0', premium: '1' },
				{ titulo: 'Patron platinium', precio: '900', cantidad: '0', premium: '1' },
				{ titulo: 'Herradura A&ntilde;ejo', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Herradura Suprema', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'Don Julio reposado', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Don Julio 1942', precio: '825', cantidad: '0', premium: '0' },
				{ titulo: 'Clase Azul Plata 70 cl', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'Clase Azul Reposado 70 cl', precio: '800', cantidad: '0', premium: '0' },
				{ titulo: 'Clase Azul Ultra 70 cl', precio: '4500', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Rum', familyCode:'4', hasPremium: '1', tieneEnlace: '0', enlaceUno: '1', enlaceDos: '2', enlaceTres:'3', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Bacardi', precio: '325', cantidad: '0', premium: '1' },
				{ titulo: 'Bacardi 8 years', precio: '375', cantidad: '0', premium: '1' },
				{ titulo: 'Barcelo', precio: '325', cantidad: '0', premium: '0' },
				{ titulo: 'Barcelo Imperial', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'Barcelo Imperial 1,5L', precio: '800', cantidad: '0', premium: '0' },
				{ titulo: 'Havana club 5 years', precio: '325', cantidad: '0', premium: '0' },
				{ titulo: 'Havana Club 7 years', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'Brugal XV 70 cl', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'Zacapa XO', precio: '500', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Whisky', familyCode:'5', hasPremium: '1', tieneEnlace: '0', enlaceUno: '1', enlaceDos: '2', enlaceTres:'3', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Dewards 12 years', precio: '350', cantidad: '0', premium: '1' },
				{ titulo: 'Chivas Regal', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Chivas 21 years', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'Jack Daniels', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Jack Daniels Honey', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'Cardhu Cask Reserve', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Lagavulin', precio: '475', cantidad: '0', premium: '0' },
				{ titulo: 'Macallan Amber', precio: '325', cantidad: '0', premium: '0' },
				{ titulo: 'Macallan Sienna', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'Macallan Ruby', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'Johnnie Walker Black Label', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Johnnie Walker Blue Label', precio: '650', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Red Bull', familyCode:'6', hasPremium: '0', tieneEnlace: '1', enlaceUno: '1', enlaceDos: '2', enlaceTres:'3', families: [
			{ subFamilyName: 'More', products: [
				{ titulo: 'Red Bull Energy Drink', precio: '15', cantidad: '0', premium: '0' },
				{ titulo: 'Red Bull Sugarfre', precio: '15', cantidad: '0', premium: '0' },
				{ titulo: 'THE Red Edition FROM RED BULL', precio: '15', cantidad: '0', premium: '0' },
				{ titulo: 'THE BLUE Edition FROM RED BULL', precio: '15', cantidad: '0', premium: '0' },
				{ titulo: 'THE SILVER Edition FROM RED BULL', precio: '15', cantidad: '0', premium: '0' },
				{ titulo: 'Red Bull Cola', precio: '12', cantidad: '0', premium: '0' }
			] }
		]},
			
		{familyName:'Wine', familyCode:'7', hasPremium: '0', tieneEnlace: '1', enlaceUno: '1', enlaceDos: '2', enlaceTres:'3', families: [
			{ subFamilyName: 'White | Blanco', products: [
				{ titulo: 'Louis Latour Montrached Grand', precio: '1200', cantidad: '0', premium: '0' },
				{ titulo: 'Cloudy Bay 70 cl', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Cloudy Bay 1,5l', precio: '600', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Rose | Rosado', products: [
				{ titulo: 'DOMAINES OTT 70 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Domaines Ott 1,5l', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'Whisperin Angel Rose 70 cl', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Whisperin Angel Rose 1,5l', precio: '600', cantidad: '0', premium: '0' },
				{ titulo: 'Whisperin Angel Rose 3l', precio: '1000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Red Tinto', products: [
				{ titulo: 'Vega Sicilia Valbuena 2010', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Vega Sicilia unico 2004', precio: '800', cantidad: '0', premium: '0' },
				{ titulo: 'Petrus 2008', precio: '5000', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Cava', familyCode:'8', hasPremium: '0', tieneEnlace: '1', enlaceUno: '', enlaceDos: '', enlaceTres:'', families: [
			{ subFamilyName: 'Vi&ntilde;a Fragrance D\'or', products: [
				{ titulo: 'Gold Imperial 23K Brut Gran Reserva 2010 75 cl', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Gold Imperial 23K Brut Gran Reserva 2010 1,5l', precio: '400', cantidad: '0', premium: '0' }
			] }
		]},
		
		{familyName:'Champagne', familyCode:'9', hasPremium: '0', tieneEnlace: '1', enlaceUno: '1', enlaceDos: '2', enlaceTres:'3', families: [
			{ subFamilyName: 'DOM PeRIGNON LUMINOUS', products: [
				{ titulo: 'Dp VINTAGE 75cl', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'Dp VINTAGE MAGNUM 1,5L', precio: '1200', cantidad: '0', premium: '0' },
				{ titulo: 'Dp VINTAGE JeROBOAM 3L', precio: '4000', cantidad: '0', premium: '0' },
				{ titulo: 'Dp VINTAGE MATHUSALEM 6L', precio: '9000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'DOM PeRIGNON ROSe LUMINOUS', products: [
				{ titulo: 'dp ROSe VINTAGE 75cl', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'dp ROSe VINTAGE MAGNUM  1,5L', precio: '2500', cantidad: '0', premium: '0' },
				{ titulo: 'dp ROSe VINTAGE JeROBOAM 3L', precio: '9000', cantidad: '0', premium: '0' },
				{ titulo: 'dp ROSe VINTAGE MATHUSALEM 6L', precio: '25000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'CHEF DE CAVE\'S PRIVATE CELLAR', products: [
				{ titulo: 'dp P2 PLeNITUDE DEUXIEME VINTAGE 1998 75cl', precio: '900', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'DOM PeRIGNON WHITE GOLD', products: [
				{ titulo: 'dp WHITE GOLD JeROBOAM 3L', precio: '20000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'DOM PeRIGNON ROSE GOLD MATHUSALEM', products: [
				{ titulo: 'dp ROSE GOLD MATHUSALEM 6L', precio: '50000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Moet & Chandon', products: [
				{ titulo: 'M&C Brut Imperial 75cl', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'M&C rose 75cl', precio: '475', cantidad: '0', premium: '0' },
				{ titulo: 'M&C Magnum  1,5L', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'M&C Rose Magnum  1,5L', precio: '950', cantidad: '0', premium: '0' },
				{ titulo: 'M&C Rose JeROBOAM 3L', precio: '1900', cantidad: '0', premium: '0' },
				{ titulo: 'M&C JeROBOAM 3L', precio: '1500', cantidad: '0', premium: '0' },
				{ titulo: 'M&C Mathusalem 6L', precio: '3000', cantidad: '0', premium: '0' },
				{ titulo: 'M&C N.I.R Nectar Imperial Rose Dry (Luminous) 75cl', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'M&C N.I.R Nectar Imperial Rose Dry (Luminous)  1,5 L', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'M&C N.I.R Nectar Imperial Rose Dry (Luminous) 6L', precio: '3600', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Ruinart', products: [
				{ titulo: 'Ruinart Blanc de Blancs 75 cl', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Ruinart Brut Rose 75 cl', precio: '450', cantidad: '0', premium: '0' },
				{ titulo: 'Ruinart Blanc de Blancs 1,5L', precio: '975', cantidad: '0', premium: '0' },
				{ titulo: 'Ruinart Brut Rose 1,5L', precio: '975', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Krug', products: [
				{ titulo: 'Krug Grande Cuvee 75 cl', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'Krug Rose 75 cl', precio: '800', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'MUMM', products: [
				{ titulo: 'Mumm Cordon Rouge Brut 75 cl', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Rose 75 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Cordon Rouge Brut 1,5L', precio: '700', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Rose 1,5L', precio: '800', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Cordon Rouge Brut 3L', precio: '1400', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Rose 3L', precio: '1600', cantidad: '0', premium: '0' },
				{ titulo: 'Mumm Cordon Rouge Brut 6L', precio: '2800', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Louis Roederer', products: [
				{ titulo: 'LR Brut Premier 75 cl', precio: '350', cantidad: '0', premium: '0' },
				{ titulo: 'LR Vintage Rose 75 cl', precio: '400', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal 75 cl', precio: '600', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal Rose 75 cl', precio: '1200', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal Rose Magnum 1,5L', precio: '4500', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal Magnum 1,5L', precio: '1300', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal 3L', precio: '5000', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal 6L', precio: '16000', cantidad: '0', premium: '0' },
				{ titulo: 'LR Cristal ORFEVRE 3L', precio: '30000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Belle Epoque', products: [
				{ titulo: 'Belle Epoque 75 cl', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'BE Edicion Premiere 2007 ', precio: '700', cantidad: '0', premium: '0' },
				{ titulo: 'BE BLANC de Blancs 2000 75 CL ', precio: '900', cantidad: '0', premium: '0' },
				{ titulo: 'BE Rose 75 cl', precio: '650', cantidad: '0', premium: '0' },
				{ titulo: 'BE Rose 3L', precio: '4000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Boerl & Kroff', products: [
				{ titulo: 'B de B&K 2003 75 cl', precio: '700', cantidad: '0', premium: '0' },
				{ titulo: 'B&K Brut Rose 1,5L ', precio: '7000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Bollinger', products: [
				{ titulo: 'Bollinger 75 cl', precio: '400', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Laurent perrier', products: [
				{ titulo: 'LP 75 cl', precio: '375', cantidad: '0', premium: '0' },
				{ titulo: 'LP Rose 75 cl', precio: '500', cantidad: '0', premium: '0' },
				{ titulo: 'LP Magnum 1,5L', precio: '750', cantidad: '0', premium: '0' },
				{ titulo: 'LP Magnum 1,5L Rose', precio: '1000', cantidad: '0', premium: '0' }
			] },
			{ subFamilyName: 'Armand Brignac', products: [
				{ titulo: 'AB Rose 12L', precio: '65000', cantidad: '0', premium: '0' },
				{ titulo: 'AB Rose 15L', precio: '85000', cantidad: '0', premium: '0' },
				{ titulo: 'AB Brut 30L', precio: '30000', cantidad: '0', premium: '0' }
			] }
		]}
	];
	
	$scope.seeCart = false;
	$scope.selectedFamily = 1;
	$scope.seePremium = 1;
	$scope.showPremium = 0;
	$scope.maxslides = 0;
	$scope.actualSlide = 1;
	$scope.listClass = 'columned';
	$scope.premiumClass = 'left';
	$scope.portadaClass = 'portada';
	$scope.snippet = $sce.trustAsHtml('<h1>&ntilde;</h1>');
	
	
		
	$scope.getTotal = function(){
		var total = 0;
		//Recorremos bebidas, 
		//dentro de cada familia hay que hacer un segundo bucle recorriendo subfamilias
		//dentro hay que hacer un tercer bucle recorriendo products
		for(var i = 0; i < $scope.bebidas.length; i++){
			
			var familia = $scope.bebidas[i];
			
			for(var k = 0; k < familia.families.length; k++){
				var subfamilia = familia.families[k];
				for(var j = 0; j < subfamilia.products.length; j++){
					var bottle = subfamilia.products[j];
					total += (bottle.precio * bottle.cantidad);
				}
			}
		}
		return total;
	};
	
	$scope.changeFamily = function (newFamily,premium){
		//alert(newFamily);
		selectedFamily = newFamily;
		var numero = 2;
		var auxMax = 0;
		
		if(newFamily!=0 && newFamily<50){
			auxMax = $scope.familyNumberFavorites(newFamily);
			
			if(premium == 1){
				//Si es premium el maximo de slides no va a ser el numero de elementos, sino el numero de elementos entre 3
				//con un minimo de 1
				auxMax = Math.ceil(auxMax / 3);
			}
			$scope.configureSlider(auxMax);
		}
		
		if(!(selectedFamily == 0) && !(selectedFamily == 100) ){
			//alert("Familia normal:"+selectedFamily);
			$scope.selectedFamily = newFamily;
			$scope.seeCart = false;
			$scope.seePremium = premium;
			
			//Hemos de cambiar la clase para si mostramos los favoritos o el listado en 2 columnas
			var myFamily = $scope.bebidas[selectedFamily-1];
			
			//$scope.listClass=myFamily.hasPremium;
			
			
			if(myFamily.hasPremium == '1'){
				$scope.listClass = 'right';
				$scope.premiumClass = 'left';
			}else{
				$scope.listClass = 'columned';
				$scope.premiumClass = 'leftHidden';
			}
			
		}else{
			
			if( selectedFamily == 100){
				//alert("Premium:"+selectedFamily);
				$scope.selectedFamily = 100;
				$scope.seeCart = false;
				$scope.seePremium = 0;
			}else{
				//alert("3:"+selectedFamily);
				$scope.selectedFamily = newFamily;
				$scope.seeCart = true;
				$scope.seePremium = 0;
			}
		}
		
	};
	
	$scope.familyHasFavorite = function (sentFamilyCode){
		
		var premium = false;
		
		for(var i = 0; i < $scope.bebidas.length; i++){
			
			var familiaAux = $scope.bebidas[i];
			if(familiaAux.familyCode == sentFamilyCode){
				
				if(familiaAux.hasPremium == '1' && familiaAux.familyCode == sentFamilyCode){
					//alert("Devuelve 1");
					premium = true;
				}
			}
		}
		
		return premium;
	};
	
	$scope.familyNumberFavorites = function(sentFamilyCode){
		
		var total = 0;
		
		for(var i = 0; i < $scope.bebidas.length; i++){
			
			var familiaAux = $scope.bebidas[i];
			
			if(familiaAux.familyCode == sentFamilyCode){
				
				for(var j = 0; j < familiaAux.families.length; j++){
					var subAux = familiaAux.families[j];
					
					for(var k = 0; k < subAux.products.length; k++){
						var bottle = subAux.products[k];
						//alert(bottle.titulo+' - premium: '+bottle.premium);
						if(bottle.premium == '1'){
							total = total + 1;
						}
					}
				}
			}
		}
		//alert(total);
		return total;
	};

	 $scope.familiaEnlace = function(fc){
		var tieneEnlace = '0';

		 for(var i = 0; i < $scope.bebidas.length; i++){
			 var bebida = $scope.bebidas[i];
			 if(bebida.familyCode == fc){
				 //Estamos en la familia correcta, devolvemos el array de subfamilias

				 if(bebida.tieneEnlace == '1'){
					 return true;
				 }else{
					 return false;
				 }

			 }
		 }

	 };

	 $scope.retrieveSub = function(sentFamilyCode){

		 //Recogemos todas las subfamilias segun el codigo facilitado y las devolvemos
		 var myarray = false;

		 for(var i = 0; i < $scope.bebidas.length; i++){
			 var bebida = $scope.bebidas[i];
			 if(bebida.familyCode == sentFamilyCode){
				 //Estamos en la familia correcta, devolvemos el array de subfamilias
				 var myarray = bebida.families;
			 }
		 }

		 return myarray;
	 };

	 $scope.devuelveFamCompleta = function(sentFamilyCode){

		 for(var i = 0; i < $scope.bebidas.length; i++){
			 var bebida = $scope.bebidas[i];
			 if(bebida.familyCode == sentFamilyCode){
				 //Estamos en la familia correcta, devolvemos el array de subfamilias
				 alert("Code: "+sentFamilyCode);
				 return bebida;
			 }
		 }
	 };
	
	$scope.configureSlider = function(numslides){
		$scope.maxSlides = numslides;
		$scope.actualSlide = 1;
	}
	
	$scope.changeSlide = function(advance){
		
		$scope.actualSlide = $scope.actualSlide + advance;
		
		if($scope.actualSlide > $scope.maxSlides){
			$scope.actualSlide = 1;
		}
		if($scope.actualSlide < 1){
			$scope.actualSlide = $scope.maxSlides;
		}
	}
	
	$scope.changeSlide3 = function(advance){
		
		$scope.actualSlide = $scope.actualSlide + advance;
		
		if($scope.actualSlide > $scope.maxSlides){
			$scope.actualSlide = 1;
		}
		if($scope.actualSlide < 1){
			$scope.actualSlide = $scope.maxSlides;
		}
	}
	
	$scope.getPremiumElements = function(sentFamilyCode){
		var myArray = [];
		
		for(var i = 0; i < $scope.bebidas.length; i++){
			
			var familiaAux = $scope.bebidas[i];
			
			if(familiaAux.familyCode == sentFamilyCode){
				
				for(var j = 0; j < familiaAux.families.length; j++){
					var subAux = familiaAux.families[j];
					
					for(var k = 0; k < subAux.products.length; k++){
						var bottle = subAux.products[k];
						
						if(bottle.premium == '1'){
							myArray.push(bottle);
						}
					}
				}
			}
		}
		
		return myArray;
	}
	
	$scope.getSelectedElements = function(){
		var selectedArray = [];
		
		for(var i = 0; i < $scope.bebidas.length; i++){
			
			var familiaAux = $scope.bebidas[i];
				
			for(var j = 0; j < familiaAux.families.length; j++){
				var subAux = familiaAux.families[j];
				
				for(var k = 0; k < subAux.products.length; k++){
					var bottle = subAux.products[k];
					
					if(bottle.cantidad != '0'){
						selectedArray.push(bottle);
					}
				}
			}
			
		}
		
		return selectedArray;
	}
	
	$scope.allZero = function(){
		var confirmar=confirm("All data will be lost \nAre you sure?"); 
		if (confirmar){
			// si pulsamos en aceptar hacemos un bucle que pone cada cantidad a 0
			for(var i = 0; i < $scope.bebidas.length; i++){
				var familiaAux = $scope.bebidas[i];
				for(var j = 0; j < familiaAux.families.length; j++){
					var subAux = familiaAux.families[j];
					for(var k = 0; k < subAux.products.length; k++){
						var bottle = subAux.products[k];
						bottle.cantidad = '0';
					}
				}
			}
		}
		 
	}

	$scope.convertirHTML = function(valor) {
	   return $sce.trustAsHtml(valor);
	 };
});