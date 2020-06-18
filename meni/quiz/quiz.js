window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1. Koliko ima kostiju u ljudskom tijelu?' : ['208', '280', '820', 0],
        
        '2. Sljepoočne kosti su ?' : ['Neparne', 'Parne' , 1],
        
        '3. Koliko pari rebara postoji u ljudskom tijelu? ' : ['14', '9', '12', 2],

        '4. Koja je najduža kost čovjekovog tijela? ' : ['grudna kost', 'butna kost', 'ključna kost', 1],

        '5. Koliko kostiju cini podlakticu?' : ['2', '3', '1', 0],
        
        '6. Rahitis je najčešće posljedica nedostatka kog vitamina ?' : ['B', 'D' , 'C' , 1],
        
        '7. Koja kost jedina nije povezana ni sa jednom drugom kosti? ' : ['čašica', 'podjezična kost', 'grudna kost', 1],

        '8. Koja je najmanja kost čovjekovog tijela? ' : ['uzengija', 'nakovanj', 'grudna kost', 0],

        '9. Koliko ima kičmenih pršljenova? ' : ['13-14', '43-44', '33-34', 2],

        '10. Kosti lobanje su spojene... ' : ['nisu spojene', 'šavovima', 'tetivama', 1]



      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = '';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};


let kviz=document.querySelector('.wrapper');
let btn3=document.querySelector('#btn3');
let odg=document.querySelector('#odgovori');
btn3.addEventListener('click', function(){
          odg.innerHTML="<ul><li>1. 208,</li> <li>2. Parne,</li> <li> 3. 12,</li> <li> 4. butna kost,</li> <li> 5. 2,</li> <li> 6. D,</li> <li> 7. podjezična kost,</li> <li> 8. uzengija,</li> <li> 9. 33-34,</li> <li> 10. šavovima</li></ul>";
          
          kviz.innerHTML='';

});
let reset=document.querySelector('#btn4');
reset.addEventListener('click',function(){
        location.reload();
})
let btn1=document.querySelector('#btn1');
btn1.addEventListener('click',function(){
		window.location.href="../menu.html";
});
let btn2=document.querySelector('#btn2');
btn2.addEventListener('click',function(){
		window.location.href="quizmenu.html";
});