let fallingSpeed=0;
let max=0;
let countgames=1;
let distanceToMonster=Math.random()*90+10;

let upperLimit3;
let guessNumber;
let counter3;
let guessInput;

let guesschar1;
let guesschar2;
let guesschar3;
let pcchar1;
let pcchar2;
let pcchar3;

distanceToMonster=Math.round(distanceToMonster);


function throwTry(){  
        let opentries=max-countgames;
        document.getElementById("count").innerText="You have "+ opentries+" tries";
        speed =speedobject.value;
        angle=angleobject.value;
        console.log(angle)
        angle=angle*(Math.PI/180);
        let throwingDistance=((speed*speed)*Math.sin(2*angle))/fallingSpeed;
        throwingDistance=Math.round(throwingDistance);
        //console.log(distanceToMonster)
        //console.log(throwingDistance)
       
        if (throwingDistance==distanceToMonster){
            document.getElementById("help").innerText="congratualtion";  
        }else{
            console.log("nicht getroffen");
            let difference=distanceToMonster-throwingDistance;
            if (difference<0){
                document.getElementById("help").innerText="too far: "+difference+"m";
            } else{
                document.getElementById("help").innerText="too short: "+difference+"m";
            }
        }
        countgames++;
        if (countgames>max)createPopup("max games",true);    
}
function config() {
        fallingSpeed=document.getElementsByName("planet")[0].value;
        max=game1maxgames.value;
        document.getElementById("count").innerText="you have "+ max+" tries"; 
        //document.getElementById("conf").style.visibility="hidden";
        //document.getElementById("shoot").style.visibility="visible";
        if (fallingSpeed==1.62){
          document.getElementById("backgroundimagegame1").style.backgroundImage="url(./image/moon.jpg)";
         }
        if (fallingSpeed==3.69){
            document.getElementById("backgroundimagegame1").style.backgroundImage="url(./image/mars.jfif)";
          }
        if (fallingSpeed==24.79){
            document.getElementById("backgroundimagegame1").style.backgroundImage="url(./image/jupiter.jfif)";
          }
        let activeDiv=document.getElementsByClassName("active")[0];
        console.log(activeDiv);
        console.log(activeDiv.nextElementSibling);
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
}
//Animation
setInterval(fly,100);
let spin=0;

function fly(){
    $('#handy').css('transform','rotate('+spin+'deg)');
    spin+=10;

}



 /*-----------------------------GAME2-----------------------------------*/
 let pcCounter=0;
 let userCounter=0;
 let winCondition = 3;
 let wincolor="green";

function game2start(symbolUser){
    document.getElementById("stone").classList.add("hidden");
    document.getElementById("paper").classList.add("hidden");
    document.getElementById("scissors").classList.add("hidden");
    document.getElementById("stoneUser").style.backgroundColor="transparent";
    document.getElementById("paperUser").style.backgroundColor="transparent";
    document.getElementById("scissorsUser").style.backgroundColor="transparent";
    let symbolPC=Math.random()*2;
    symbolPC=Math.round(symbolPC);
    switch(symbolPC){
        case 2:
            symbolPC="scissors";
            break;
        case 1:
            symbolPC="paper";
            break;
        case 0:
                symbolPC="stone";
                break;
    }
    console.log("pc "+symbolPC);
    console.log("user "+symbolUser);
    if (symbolPC==symbolUser){
        console.log("the game was draw");
        wincolor="orange";
    } else{
       if ((symbolUser=="scissors")&&(symbolPC=="paper")){
            userCounter++;
            console.log("you won");
            wincolor="green";
       }else{
        if ((symbolUser=="paper")&&(symbolPC=="stone")){
            userCounter++;
            console.log("you won");
            wincolor="green";
        }else{
            if ((symbolUser=="stone")&&(symbolPC=="scissors")){
                userCounter++;
                console.log("you won")
                wincolor="green";
            } else{
                pcCounter++;
                console.log("you loss");
                wincolor="red";
            } 
        }
       }
    
    }
    if (symbolUser=="stone") document.getElementById("stoneUser").style.backgroundColor=wincolor;
    if (symbolUser=="paper") document.getElementById("paperUser").style.backgroundColor=wincolor;
    if (symbolUser=="scissors") document.getElementById("scissorsUser").style.backgroundColor=wincolor;
    if (symbolPC=="stone") document.getElementById("stone").style.backgroundColor=wincolor;
    if (symbolPC=="paper") document.getElementById("paper").style.backgroundColor=wincolor;
    if (symbolPC=="scissors") document.getElementById("scissors").style.backgroundColor=wincolor;
    switch (symbolPC){
        case "stone":
            document.getElementById("stone").classList.remove("hidden");
            break;
        case "paper":
            document.getElementById("paper").classList.remove("hidden");
            break;
        case "scissors":
            document.getElementById("scissors").classList.remove("hidden");
            break;

    }
    document.getElementById("game2result").innerText=userCounter+":"+pcCounter;
    if ((pcCounter==winCondition)||(userCounter==winCondition)){
        //game is over
        if (pcCounter==winCondition){
           console.log("You loss the whole Game");
           createPopup("You loss the whole Game", true);
        } else {
            console.log("You won the whole game");
            createPopup("You won the whole Game", true);
        }
    }
    console.log("----------------------------")
}
 /*-----------------------------GAME3-----------------------------------*/
 


function game3(){
    
    guessInput=game3guess.value;
    console.log("guessNumber: "+guessNumber);
    if (counter3>=countgames){
            if(guessNumber==guessInput){
                createPopup("Congratulation you won", true);
            }else{
                if(guessNumber>guessInput){
                    createPopup("Number is too small");
                }else{
                    createPopup("Number is too big");
                }
            }
        }else createPopup("You loss the game", true);
    countgames++;
}

function  entergame3(){
    counter3=game3maxgames.value;
    upperLimit3=game3range.value;
    countgames=1;
    guessNumber=Math.random()*upperLimit3;
    guessNumber=Math.ceil(guessNumber);
    console.log("Number to guess: "+guessNumber);
    upperLimit3=game3range.value;
    counter3=game3maxgames.value;
    if ((counter3<=0)||(upperLimit3<=1)){
        createPopup("Enter a Number bigger then 1");
    }else{
        let activeDiv=document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
    }

}

  /*-----------------------------GAME4-----------------------------------*/

  
    let pcnumber=Math.random()*900+100;
    pcnumber=String(Math.round(pcnumber));
  //  pcnumber=String(223);
    
    let helptext="";
    let game4counter=0;
    
  
  $("#game4start").click(function(){
    console.log("Number to guess: "+pcnumber);
    let game4guess=String(game4input.value)
    if (game4guess<100||game4guess>1000) {
        createPopup("Enter a number between 100 and 1000 ");
    } else
            {
            guesschar1=game4guess.charAt(0);
            guesschar2=game4guess.charAt(1);
            guesschar3=game4guess.charAt(2);
            pcchar1=pcnumber.charAt(0);
            pcchar2=pcnumber.charAt(1);
            pcchar3=pcnumber.charAt(2);
        /* console.log(guesschar1);
            console.log(guesschar2);
            console.log(guesschar3);
            console.log(pcchar1);
            console.log(pcchar2);
            console.log(pcchar3);*/
            if (pcnumber==game4guess){
                createPopup("Congratulation you win",true);
            } else{
                if (guesschar1==pcchar1) helptext=helptext+"Pos1 is right; ";
                else{
                    if (guesschar1==pcchar2||guesschar1==pcchar3) helptext=helptext+" Number is right but postion is wrong; ";
                }
                if (guesschar2==pcchar2) helptext=helptext+"Pos2 is right; ";
                else{
                    if (guesschar2==pcchar1||guesschar2==pcchar3) helptext=helptext+" Number is right but postion is wrong; ";
                }
                if (guesschar3==pcchar3) helptext=helptext+"Pos3 is right";
                else{
                    if (guesschar3==pcchar2||guesschar3==pcchar1) helptext=helptext+" Number is right but postion is wrong; ";
                }
            }
            let help;
            if (helptext.length==0) helptext="Nothing match";
            help=$("<div class='helptext'>Your guesss:"+game4guess+"-> "+helptext+"</div>");
            if (game4counter==0) {
                $("#game4help").append(help);
            }else  $("#game4help>div:first-child").before(help);
            //Set do default
            helptext="";
            game4counter++;
            game4input.value="";
            if (game4counter>=12)createPopup("You loss",true);
        } 
        
        
  });

