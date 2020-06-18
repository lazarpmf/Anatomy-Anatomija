let nextbtn=document.querySelector('#nextbtn');
let td=document.querySelector('#td');
let img=document.querySelector('#img');

let niz=['slike/arm.jpg','slike/rameni_pojas.jpg','slike/kljucna_kost.jpg','slike/lopatica.jpg'];
let i=0;	//brojac
nextbtn.addEventListener('click', function(){
			i++;
			img.src=niz[i];
			if(i==3){
				i=-1;
			}
})


