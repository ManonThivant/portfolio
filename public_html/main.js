

document.addEventListener("DOMContentLoaded", function(){

	// -------------------- Menu
	var isActive = false;
	var bMenu = document.querySelector("#burgerMenu");
	console.log(bMenu.childNodes);
	var menu = document.querySelector("#menu");
	bMenu.addEventListener("click", function() 
	{
		if(isActive)
		{
			menu.style.transform = "rotate3d(0,2,0,90deg)";

			bMenu.childNodes[3].style.transform = "rotate(0deg)";

			bMenu.childNodes[1].style.width = "75%";

			bMenu.childNodes[5].style.transform = "rotate(0deg)";
			bMenu.childNodes[5].style.bottom = "0px";

			document.querySelector("*").classList.remove("overflowHidden");

			isActive = false;
		}
		else
		{
			let chooseCat = Math.floor((Math.random()*4) + 1);
			let menu_background_link = "img/cat" + chooseCat + ".gif";
			menu.style.backgroundImage = "url(" + menu_background_link + ")";

			menu.style.transform = "rotate3d(0,0,0,90deg)";

			bMenu.childNodes[3].style.transform = "rotate(-135deg)";

			bMenu.childNodes[1].style.width = "0";

			bMenu.childNodes[5].style.transform = "rotate(135deg)";
			bMenu.childNodes[5].style.bottom = "10px";

			document.querySelector("*").classList.add("overflowHidden");

			isActive = true;
		}
	});


	
	let fleche = document.createElement("div")
	let arrow_go_top = document.createElement("img")
	let button_go_top = document.createElement("a")

	fleche.id = "fleche"
	fleche.classList.add("display_none")

	button_go_top.id = "button_go_top"
	button_go_top.href = "#header"

	arrow_go_top.src = "img/arrow_go_top.png"
	arrow_go_top.id = "image_go_top"
	
	
	let body = document.querySelector("body")
	let html = document.querySelector("html")
	let skills = document.querySelector("#Skills")
	let header = document.querySelector('#header')
	let about = document.querySelector('#About')

	let skillsDisplayed = false;

	body.appendChild(fleche)
	fleche.appendChild(button_go_top)
	button_go_top.appendChild(arrow_go_top)
	console.log(window.innerWidth);

	/*function resize() { 
		console.log("oui");
    if( window.innerWidth >= 900) {
		arrow_go_top.style.width = 90;
		}
	}*/
  	//resize bouton remonter 
  	//au chargement de la page
  	if( window.innerWidth >= 900) {
  		document.getElementById("image_go_top").style.width = "90px";
  		document.getElementById("image_go_top").style.height = "90px";
  		document.getElementById("fleche").style.width = "90px";
  		document.getElementById("fleche").style.height = "90px";
  		document.getElementById("fleche").style.lineHeight = "90px";
  	}else{
  		document.getElementById("image_go_top").style.width = "10vw";
  		document.getElementById("image_go_top").style.height = "10vw";
  		document.getElementById("fleche").style.width = "10vw";
  		document.getElementById("fleche").style.height = "10vw";
  		document.getElementById("fleche").style.lineHeight = "10vw";
  	}
	//au resize de la page
	window.addEventListener("resize", function(){
		console.log(window.innerWidth);
		if( window.innerWidth >= 900) {

			document.getElementById("image_go_top").style.width = "100%";
			document.getElementById("image_go_top").style.height = "100%";
			document.getElementById("fleche").style.lineHeight = "90px";
		}else if( window.innerWidth <= 400) {

			document.getElementById("image_go_top").style.width = "100%";
			document.getElementById("image_go_top").style.height = "100%";
			document.getElementById("fleche").style.width = "40px";
			document.getElementById("fleche").style.height = "40px";
			document.getElementById("fleche").style.lineHeight = "40px";
		}else {
			document.getElementById("image_go_top").style.width = "100%";
			document.getElementById("image_go_top").style.height = "100%";
			document.getElementById("fleche").style.width = "10vw";
			document.getElementById("fleche").style.height = "10vw";
			document.getElementById("fleche").style.lineHeight = "10vw";
		}
	});
  	//fin du resize du bouton
  	window.addEventListener("scroll", function() {
  		if (skills.getBoundingClientRect().y < 200 && !skillsDisplayed) {

  			skillsDisplayed = true;
  			let loads = skills.querySelectorAll(".load");
  			for(let load of loads) {
  				load.style.width =  load.innerHTML+"%";
  			}
  		}

  		if (about.getBoundingClientRect().y < 300) {
  			fleche.classList.remove("display_none");

  		}
  		else 
  		{
  			fleche.classList.add("display_none");
  		}
  	})

  	var list_cv = [
  	"french",
  	"international",
  	"spanish",
  	]

	// Voir le pdf du CV
	for (cv of list_cv)
	{
		let a = document.createElement("a");
		document.querySelector("#About").appendChild(a);
		a.classList.add("cv");
		a.classList.add("fadecv");
		a.href = "pdf/CV-"+ cv +"_Manon.pdf";
		a.innerHTML = "See my "+ cv +" CV";
	}

//afficher les dessins
   
	for (i=1; i<=22; i++)
	{
		let img = document.createElement("img");
		document.querySelector("#drawings").appendChild(img);
		img.classList.add("drawing");
		img.src = "img/drawing/draw"+ i +".jpg";
	}


	let ul_menu = document.getElementById("ul_menu");

	ul_menu.addEventListener("click", function (event) {
		document.getElementById( event.target.id.replace("a_", "") ).scrollIntoView();
		menu.style.transform = "rotate3d(0,2,0,90deg)";

		bMenu.childNodes[3].style.transform = "rotate(0deg)";

		bMenu.childNodes[1].style.width = "75%";

		bMenu.childNodes[5].style.transform = "rotate(0deg)";
		bMenu.childNodes[5].style.bottom = "0px";

		document.querySelector("*").classList.remove("overflowHidden");

		isActive = false;
	})



})

