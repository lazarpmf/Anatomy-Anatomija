let text=document.querySelector('#text');
let link=document.querySelectorAll('#td2 h1');
let td2=document.querySelector('#td2');


for (let i = 0; i <= 5; i++) {
	link[i].addEventListener('click',function(event){
						//event.target.style.backgroundColor='blue';
						
						td2.innerHTML="";
						console.log(i);
						switch(i){
							case 0:

							
							
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Kretanje</h2><p>Kada promijenimo položaj nekog dijela tijela, napravili smo pokret. Pravljenje različitih pokreta: govor, trčanje uz stepenice, igranje tenisa... omogućavaju kosti i mišići; oni čine sistem organa za kretanje. Skeletni mišići vezani su za kosti tetivama i njihova kontrakcija dovodi do pokreta u zglobovima. Mišići i kosti funkcionišu kao skladna cjelina zahvaljujući nervnim impulsima koji stižu iz mozga, a prenosi ih veliki broj nerava.</p>";
							let back=document.querySelector('#back');
							link[i].addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										window.location.href="rad srca.html";
							});
							break; 
							case 1:
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Mišići rade u parovima</h2><p>Mišići najčešće djeluju u parovima i raspoređeni su na suprotnim stranama zgloba.<b>Antagonističko</b> dejstvo dovodi do pokretanja dijelova tijela.Kada podižemo čašu, biceps se kontrahuje i povlači podlakticu na gore. Triceps je tada relaksiran. Kada ostavljamo čašu na sto triceps se kontrahuje i povlači podlakticu na dolje.Biceps miruje.</p>";
							let back1=document.querySelector('#back');
							back1.addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										location.reload();
							});
							break;
							case 2:
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Za kretanje je potrebna energija</h2><p>Da bi se mišići mogli kontrahovati, potrebna im je energija koju dobijaju oksidacijom hranljivih materija. Glavni izvor energije je glukoza, koja se razlaže u prisustvu kiseonika i tom prilikom oslobađa energiju potrebnu za rad mišića. Dio energije nastale razgradnjom glukoze oslobađa se u vidu toplote. Mjera te toplote je tjelesna temperatura. Ne proizvodi se jednaka količina energije u svim mišićima. Kojom brzinom možemo trčati ili koliki teret možemo podići, zavisi od strukture mišića i uvježbanosti. Fizičkim radom i vježbanjem, uz pravilnu ishranu, povećava se debljina i snaga mišićnih vlakana; to povećava radnu sposobnost mišića.</p>";
							let back2=document.querySelector('#back');
							back2.addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										location.reload();
							});
							break;
							case 3:
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Zašto se umaramo?</h2><p>Pri napornom radu mišićima je potrebno znatno više energije nego pri umjerenom naporu.Iako pri napornom radu ubrzano dišemo, krv ne uspijeva da prenese dovoljnu količinu kiseonika do mišićnih ćelija.Zbog toga glukoza ne može da se oksiduje.Tada počinje razgradnja <b>glikogena</b>,rezervne materije koja se nalazi u mišićima.Razgradnjom glikogena oslobađa se energija ali nastaju i štetne materije, ugljenik(IV)-oksid i mliječna kisjelina. Ukoliko intezivna aktivnost potraje duže, krv ne uspijeva da ukloni štetne materije iz mišića.Njihovo nagomilavanje izaziva zamor i bol.Slabljenje radne sposobnosti, kao i bol mišića su privremeni.Bol mišića prestaje kada krv ukloni višak mliječne kisjeline.</p>";
							let back3=document.querySelector('#back');
							back3.addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										location.reload();
							});
							break;
							case 4:
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Vježbanje pogoduje zdravlju</h2><p>Vježbanje i tjelesne aktivnosti dio su zdravog načina života. Hodanjem, trčanjem, vožnjom bicikla povećava se snaga i gipkost mišića. Ove aktivnosti doprinose pravilnom razvoju kostiju, jačanju zglobova i ligamenata. Gimnastikom, aerobikom ili penjanjem uz stepenice jača se srčani mišić i smanjuje se rizik od nagomilavanja masti u arterijama. Jači srčani mišić može ispumpati veću količinu krvi pri svakom otkucaju, čime se poboljšava snabdjevenost svih organa hranljivim materijama i kiseonikom. Rekreativni sportovi u prirodi povečavaju snagu disajnih mišića, zapreminu alveola u plućima i omogućavaju bolju razmjenu gasova.</p>";
							let back4=document.querySelector('#back');
							back4.addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										location.reload();
							});
							break;
							case 5:
							td2.style="font-size:24px;font-family:'Comic Sans MS', cursive, sans-serif;text-align:center;";
							td2.innerHTML="<button id='back'>Nazad</button><h2>Sportska medicina</h2><p>Bavljenje sportom ima višestruko pozitivan efekat na naš organizam. Sport utiče na jačanje mišića i kostiju, doprinosi pravilnom držanju tijela, poboljšava cirkulaciju, utiče na povećanje kapaciteta pluća, pozitivno utiče na psihički razvoj i socijalizaciju ličnosti. Ali, u svakom sportu postoji rizik od povrede, bilo da se radi o profesionalnim sportistima ili ljudima koji rekreativno treniraju. Zbog toga se razvila posebna grana medicine-sportska medicina. Kao i u drugim granama medicine, tako je i u sportskoj medicini važna prevencija. Tokom treninga ili bavljenja sportom treba koristiti adekvatne sportske rekvizite; u fudbalu kostobrane, u košarci duboke patike zbog zaštite zglobova, u biciklizmu kacigu...Mogu se desiti povrede mišića, kostiju, tetiva. Detaljnije u sekciji <i>bolesti</i>.</p>";
							let back5=document.querySelector('#back');
							back5.addEventListener('click',function(){
										/*td2.innerHTML="<h1>Kretanje</h1><h1>Mišići rade u parovima</h1><h1>Za kretanje je potrebna energija</h1><h1>Zašto se umaramo?</h1><h1>Vježbanje pogoduje zdravlju</h1><h1>Sportska medicina</h1><h2 id='sekcija'></h2><p id='text'></p>";*/
										location.reload();
							});
							break;
						}
	});
}