/**
 * CMatthew, Drapchaty on 9/5/15.
 Assignment: Goal1: Duel1
 */


// self-executing function
(function() {

    console.log("Fight!");
//player name
    var player1Name = "Spiderman"; //setting player 1 name
    var player2Name = "Batman";   // setting player 2 name

//player damage
    var player1Damage = 20;  //setting max damage
    var player2Damage = 20;  //setting max damage

//player health
    var player1Health = 100; //max health
    var player2Health = 100; //max health

    var round = 0;

    function fight() {            //FN that applies "fighting"
        //console.log('in the fight function'); testing

        alert(player1Name + ":" + player1Health + " *START* " + player2Name + ":" + player2Health); // initial alert

        for (var i=0; i < 10; i++){    //Creating a shorthand for loop to count rounds up to 10
          //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;  //creating min damage,half of max
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1); //random formula between 10-20 damage
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //console.log(f1);  testing
            //console.log(f2);

            //inflict damage
            player1Health -= f1;  //decrementing damage from total healths
            player2Health -= f2;

            console.log(player1Name + ":" + player1Health + " " + player2Name + ":" + player2Health); //displaying current healths

            var results = winnerCheck(); // capturing returned result fomr winner check FN and storing it to a variable
            console.log(results); // displaying that result variable in console

            if(results === "no winner"){  //function to continue rounds if no winner found
                round++;
                alert(player1Name + ":" + player1Health + " *ROUND " + round + " OVER* " + player2Name + ":" + player2Health);
            }else{
                alert(results); // once no winner is false display results
                break; //break out of loop
            };

        };

    };


    function winnerCheck() {     //FN for winner check, checking both players health below 0
        //console.log("in winner check FN"); testing

        var result = "no winner";  //starting result is no winner

        if (player1Health < 1 && player2Health < 1) {   //check players healths if loop
            result = "You Both Die";
        } else if (player1Health < 1) {
            result = player2Name + " WINS!";
        } else if (player2Health < 1) {
            result = player1Name + " WINS!";

        };


        return result;  // returning out result
    };

    /** Program Starts ! **/
    fight();  //calling fight function to work

})();

