let image=document.querySelector('#new');
let brain=document.querySelector('#brain');
let text=document.querySelector('#text');
let data=document.querySelector('#td2');
brain.style="cursor:pointer;";
brain.addEventListener('mouseover',function(){
			image.style="height:250px;width:250px;";
			image.src="../../sajt/slike/no.jpg";
			text.style="font-family:Verdana, Geneva, sans-serif; font-size:22px; ";
			text.innerHTML="Koristi mozak na pravi način!";
});
brain.addEventListener('mouseout', function(){
			image.style="display:none;";
			text.innerHTML=" ";


});