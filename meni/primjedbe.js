let textarea=document.querySelector('textarea');
let btn=document.querySelector('#btn');


textarea.addEventListener('click', function(){
			textarea.innerHTML=" ";
			textarea.style="height:300px;";

})
btn.addEventListener('click', function(){

			/*textarea.innerHTML="Primjedba...";
			alert('Hvala što pomažete u unapređenju naše aplikacije. Vaša primjedba će uskoro biti razmatrana.');
*/
			window.location.replace('poruka.html');
})
