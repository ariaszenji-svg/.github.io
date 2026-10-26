
function checkAnswer1(){
    const userInput1 = document.getElementById('firstAnswer').value.toLowerCase().trim();
    

    const answer1 = "roller skating";

    if(userInput1===answer1){
        document.getElementById('secondQuestion').classList.remove('hidden');
        document.getElementById('firstQuestion').classList.add('hidden');
    
    }
    else{
        alert("That's not quiet right");
    }
}
function checkAnswer2(){
    const userInput2 = document.getElementById('secondAnswer').value.toLowerCase().trim();

    const answer2 = "06/28";

   
    if(userInput2===answer2){
                document.getElementById('thirdQuestion').classList.remove('hidden');
        document.getElementById('secondQuestion').classList.add('hidden');
    }
    else{
        alert("That's not quiet right");

    }

}
function checkAnswer3(){
    const userInput3 = document.getElementById('thirdAnswer').value.toLowerCase().trim();

    
    const answer3 = "chicken katsu";

 
    if(userInput3===answer3){
        document.getElementById('thirdQuestion').classList.add('hidden')
        document.getElementById('secret-message').classList.remove('hidden');
    
    }
    else{
        alert("That's not quiet right");

    }
}