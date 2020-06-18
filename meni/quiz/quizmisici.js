window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1. Poprečnoprugasti mišići ili...' : ['srčani', 'skeletni', 'mišići ruke', 1],
        
        '2. Biceps ima ovaj naziv jer...' : ['je sačinjen od 2 glave', 'čine ga 2 mišića' ,'nalazi se oko 2 kosti' , 0],
        
        '3. Da li možemo da utičemo na rad glatkih mišića? ' : ['Da, zato ih zovemo i voljni mišići', 'Ne, zato ih zovemo i nevoljni mišići', 1],

        '4. Srčani mišić se sastoji od... ' : [ 'isključivo glatkih mišićnih vlakana', 'razgranatih poprečno prugastih mišićnih vlakana', 1],

        '5. Mjesto spajanja mišića i nervnog završetka je...?' : ['tetiva', 'nervno-mišićna sintaksa', 'nervno-mišićna sinapsa', 2],
        
        '6. Koji je najjači mišić u ljudskom tijelu ?' : ['jezik', 'biceps' , 'list' , 0],
        
        '7. Koji mišić ljudskog tijela je najveći ? ' : ['triceps', 'list', 'gluteus', 2],

        '8. Koja oblast medicine se bavi tretiranjem povreda u sportu? ' : ['biomedicina', 'sportska medicina', 'narodna medicina', 1],

        '9. Stanje mišićne napetosti je? ' : ['mišićna tenzija', 'mišićna opreznost', 'mišićni tonus', 2],

        '10. Grčenje mišića ili... ' : ['konkatenacija', 'kontrakcija', 'kontakcija', 1]



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
          odg.innerHTML="<ul><li>1. skeletni,</li> <li>2. je sačinjen od 2 glave,</li> <li> 3. Ne,zato ih zovemo nevoljni mišići,</li> <li> 4. razgranatih poprečno prugastih mišićnih vlakana,</li> <li> 5. nervno-mišićna sinapsa,</li> <li> 6. jezik,</li> <li> 7. gluteus,</li> <li> 8. sportska medicina,</li> <li> 9. mišićni tonus,</li> <li> 10. kontrakcija</li></ul>";
          
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