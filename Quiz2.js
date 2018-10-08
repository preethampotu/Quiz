var current=0;
var score=0;
var totques=questions.length;
var container=document.getElementById('quizContainer');
var questionel=document.getElementById('question');
var option1=document.getElementById('opt1');
var option2=document.getElementById('opt2');
var option3=document.getElementById('opt3');
var option4=document.getElementById('opt4');
var nxtbtn=document.getElementById('next');
var res=document.getElementById('result');
var btn =document.getElementById('reset');
loadques(current);

function loadques(questionindex)
{
    var q=questions[questionindex];
    questionel.textContent=(questionindex+1)+"."+q.question;
    option1.textContent=q.option1;
    option2.textContent=q.option2;
    option3.textContent=q.option3;
    option4.textContent=q.option4;
};
function loadnxt()
{
    var selectedopt=document.querySelector('input[type=radio]:checked');
    if(!selectedopt){
       alert("please choose an option");
       
    }
    var ans=selectedopt.value;
    if(questions[current].answer==ans)
    {
        score+=10;
    }
    selectedopt.checked=false;
    current++;
    if(current==totques)
    {
        container.style.display='none';
        res.style.display="";
        res.textContent="your score:"+score+"/100";
        btn.style.display = 'block';   
    }
    loadques(current);
 }


function resetQuestions(){
    current=0;
    score=0;
    res.style.display="none";
    container.style.display='block';
    loadques(current);
    btn.style.display = 'none';
}


