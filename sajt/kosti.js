/*
let head=document.getElementById("head");
let td=document.getElementById("td");
head.addEventListener("mouseover", function(){
		info_msg.innerHTML="Kosti glave. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";
})
head.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})
//sada za kosti trupa
let body=document.getElementById("body");
body.addEventListener("mouseover", function(){
		info_msg.innerHTML="Kosti trupa. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";

})
body.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})
//kosti gornjih udova
let arm=document.getElementById("arm1");
arm.addEventListener("mouseover", function(){

		info_msg.innerHTML="Kosti ruke. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";
		
})

arm.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})
let arm2=document.getElementById("arm2");
arm2.addEventListener("mouseover", function(){
		info_msg.innerHTML="Kosti ruke. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";
})
arm2.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})
//kosti donjih udova
let leg1=document.getElementById("leg1");
leg1.addEventListener("mouseover", function(){
		info_msg.innerHTML="Kosti noge. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";
})
leg1.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})

let leg2=document.getElementById("leg2");
leg2.addEventListener("mouseover", function(){
		info_msg.innerHTML="Kosti noge. Kliknite za više informacija.";
		info_msg.style="background-color: yellow;";
})
leg2.addEventListener("mouseout", function(){
	info_msg.innerHTML=" ";
	info_msg.style="background-color:white;";
})*/
//globalna promjenljiva
let kolona=document.getElementById('kolona');
let info1=document.getElementById('info1');
let slika1=document.getElementById('slika1');

arm1=document.getElementById('arm1');

arm1.addEventListener("mouseover", function(){
		slika1.src="slike/arm.jpg";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti gornjih udova. Kliknite za više informacija.";
})
arm1.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//sad za drugu ruku
arm2=document.getElementById('arm2');

arm2.addEventListener("mouseover", function(){
		slika1.src="slike/arm.jpg";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti gornjih udova. Kliknite za više informacija.";
})
arm2.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//sad za lobanju
head=document.getElementById('head');

head.addEventListener("mouseover", function(){
		slika1.src="slike/scull.jpg";
		slika1.style="height:400px;";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti glave. Kliknite za više informacija.";
})
head.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//sad za kosti grudi
body=document.getElementById('body');

body.addEventListener("mouseover", function(){
		slika1.src="slike/trup.jpg";
		slika1.style="height:300px;";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti trupa. Kliknite za više informacija.";
})
body.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//sad z kosti nogu
leg1=document.getElementById('leg1');

leg1.addEventListener("mouseover", function(){
		slika1.src="slike/leg.jpg";
		slika1.style="height:400px;";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti donjih udova. Kliknite za više informacija.";
})
leg1.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//druga noga
leg2=document.getElementById('leg2');

leg2.addEventListener("mouseover", function(){
		slika1.src="slike/leg.jpg";
		slika1.style="height:400px;";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti donjih udova. Kliknite za više informacija.";
})
leg2.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})
//sada za karlicu
karlica=document.getElementById('karlica');

karlica.addEventListener("mouseover", function(){
		slika1.src="slike/karlica.jpeg";
		slika1.style="height:300px;";
		//slika1.style="height=250px; width=450px;";
		kolona.classList.remove('hidden');
		kolona.classList.add('visible');
		info1.innerHTML="Kosti karlice. Kliknite za više informacija.";
})
karlica.addEventListener("mouseout", function(){
		kolona.classList.remove('visible');
		kolona.classList.add('hidden');
		info1.innerHTML=" ";
})