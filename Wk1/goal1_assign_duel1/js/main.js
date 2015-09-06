/**
 * Created by  Matthew Drapchaty on 9/5/15.
 Assignment: Goal1: Duel1
 */


// self-executing function
(function() {

    console.log("Fight!");
//player name
    var player1Name = "Spiderman";
    var player2Name = "Batman";

//player damage
    var player1Damage = 20;
    var player2Damage = 20;

//player health
    var player1Health = 100;
    var player2Health = 100;

    var round = 1;

    function fight() {
        console.log('in the fight function');

        alert(player1Name + ":" + player1Health + " *START* " + player2Name + ":" + player2Health);

        for (var i=0; i < 10; i++){    //Creating a shorthand for loop to count rounds up to 10
          //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //console.log(f1);  testing
            //console.log(f2);

            //inflict damage
            player1Health -= f1;  //decrementing damage from total healths
            player2Health -= f2;

            console.log(player1Name + ":" + player1Health + " " + player2Name + ":" + player2Health); //displaying current healths

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(player1Name + ":" + player1Health + " *ROUND " + round + " OVER* " player2Name + ":" + player2Health);
            }

        };

    };


    function winnerCheck() {     //FN for winner check, checking both players health below 0
        //console.log("in winner check FN"); testing

        var result = "no winner";

        if (player1Health < 1 && player2Health < 1) {
            result = "You Both Die";
        } else if (player1Health < 1) {
            result = player2Name + " WINS!";
        } else if (player2Health < 1) {
            result = player1Name + " WINS!";

        };


        return result;
    };

    /** Program Starts ! **/
    fight();

})();

