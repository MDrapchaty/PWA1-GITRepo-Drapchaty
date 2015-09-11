/**
 * Matthew, Drapchaty on sept. 10.
 Assignment: Goal2: Duel2
 */


// self-executing function
(function() {

    console.log("Fight!");
  //fighter array
    var fighter1 = ["Spiderman",20,100]; //setting player 1 name
    var fighter2 = ["Batman",20,100];   // setting player 2 name



    var round = 0;



    function fight(fighter1, fighter2) {            //FN that applies "fighting"
        //console.log('in the fight function'); testing

        alert(fighter1[0] + ":" + fighter1[2] + " *START* " + fighter2[0] + ":" + fighter2[2]); // initial alert

        for (var i=0; i < 10; i++){    //Creating a shorthand for loop to count rounds up to 10
          //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5;  //creating min damage,half of max
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random() * (fighter1[1] - minDamage1) + minDamage1); //random formula between 10-20 damage
            var f2 = Math.floor(Math.random() * (fighter2[1] - minDamage2) + minDamage2);

            //console.log(f1);  testing
            //console.log(f2);

            //inflict damage
            fighter1[2] -= f1;  //decrementing damage from total healths
            fighter2[2] -= f2;

            console.log(fighter1[0] + ":" + fighter1[2] + " " + fighter2[0] + ":" + fighter2[2]); //displaying current healths

            var results = winnerCheck(fighter1,fighter2); // capturing returned result fomr winner check FN and storing it to a variable
            console.log(results); // displaying that result variable in console

            if(results === "no winner"){  //function to continue rounds if no winner found
                round++;
                alert(fighter1[0] + ":" + fighter1[2] + " *ROUND " + round + " OVER* " + fighter2[0] + ":" + fighter2[2]);
            }else{
                alert(results); // once no winner is false display results
                break; //break out of loop
            };

        };

    };


    function winnerCheck(fighter1,fighter2) {     //FN for winner check, checking both players health below 0
        //console.log("in winner check FN"); testing

        var result = "no winner";  //starting result is no winner

        if (fighter1[2] < 1 && fighter2[2] < 1) {   //check players healths if loop
            result = "You Both Die";
        } else if (fighter1[2] < 1) {
            result = fighter2[0] + " WINS!";
        } else if (fighter2[2] < 1) {
            result = fighter1[0] + " WINS!";

        };


        return result;  // returning out result
    };

    /** Program Starts ! **/
    fight(fighter1,fighter2);  //calling fight function to work

})();

