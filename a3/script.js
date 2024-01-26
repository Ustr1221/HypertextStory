$(document).ready(function(){
    $("form").hide();
    $("#heart").hide();
    $("#score").hide();
    $("#Button").click(function(){
        $("form").show();
        $("#heart").show();
        $("#score").show();
        randomNumber();
        $("#Button").hide();
    });

    $("form").submit(function(){
        if(!checkAnswer()) {
            $("#Button").show();
            $("form").hide();
            $("#heart").hide();
            $("#score").hide();
        }
        return false;
    });

    $( ".change" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $( ".change" ).text( "OFF" );
        } else {
            $( "body" ).addClass( "dark" );
            $( ".change" ).text( "ON" );
        }
    });
});

var score = 0;
var health = 3;
var firstNum;
var secondNum;
var answer;

function randomNumber() {
    firstNum = Math.floor((Math.random() * 20) + 1);
    secondNum = Math.floor((Math.random() * 20) + 1);
    answer = firstNum + secondNum;
    document.getElementById("bigText").innerHTML = firstNum + " + " + secondNum;
    document.getElementById("hearts").innerHTML = health;
    document.getElementById('score').innerHTML = score;
}

function checkAnswer(){
    var a = document.getElementById("inputBox");
    if(a.value == answer){
        score++;
    } else {
        //shake text box
        a.classList.add('error');
        setTimeout(function(){
            a.classList.remove('error');
        }, 300);
        health--;
    }
    document.getElementById("answerBox").reset();

    if(health < 1) {
        document.getElementById("gameBox").classList.add('error');
        setTimeout(function(){
            document.getElementById("gameBox").classList.remove('error');
        }, 100);
        document.getElementById("bigText").innerHTML = `Score: ${score}`;
        score = 0;
        health = 3;
        return false;
    } else {
        randomNumber();
        return true;
    }
}
