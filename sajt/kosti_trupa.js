let nextbtn=document.querySelector('#next');
let td=document.querySelector('#td');
let img=document.querySelector('#img');

let niz=['slike/1.jpg','slike/thorax.jpg','slike/grudnakost.jpg','slike/spine_update.jpg'];
let i=0;	//brojac
nextbtn.addEventListener('click', function(){
			i++;
			img.src=niz[i];
			if(i==3){
				i=-1;
			}
})