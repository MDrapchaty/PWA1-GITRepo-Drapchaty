/**
 * Matthew, Drapchaty on sept. 18.
 Assignment: Goal4: Duel3
 */


// self-executing function
(function() {

    console.log("Fight!");
  //fighter array

        var fighter1 = {name:"Spiderman",damage:20,health:100};
        var fighter2 = {name:"Batman",damage:20,health:100};
        var fighters = [fighter1, fighter2];
        var round = 0;


    function fight(fighters) {            //FN that applies "fighting"
        //console.log('in the fight function'); testing


            round++;
          //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighters[0].damage * .5;  //creating min damage,half of max
            var minDamage2 = fighters[1].damage * .5;
            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1); //random formula between 10-20 damage
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

            //console.log(f1);  testing
            //console.log(f2);

            //inflict damage
            fighters[0].health -= f1;  //decrementing damage from total healths
            fighters[1].health -= f2;


            var player1 = document.getElementById("kabal");
            player1.innerHTML = fighters[0].name + ":" + fighters[0].health;


            var player2 = document.getElementById("kratos");
            player2.innerHTML = fighters[1].name + ":" + fighters[1].health;

            roundCnt = document.getElementById("round_number");
            roundCnt.innerHTML = "Round: " + round + "!!!";

            result = winnerCheck(fighters[0],fighters[1]); // capturing returned result fomr winner check FN and storing it to a variable

            if(result !== "no winner"){
                player1.innerHTML = result;
                player2.innerHTML = result;

            };





    };


    function winnerCheck(fighter1,fighter2) {     //FN for winner check, checking both players health below 0
        //console.log("in winner check FN"); testing

        var result = "no winner";  //starting result is no winner

        if (fighter1.health < 1 && fighter2.health < 1) {   //check players healths if loop
            result = "You Both Die";
        } else if (fighter1.health < 1) {
            result = fighter2.name + " WINS!";
        } else if (fighter2.health < 1) {
            result = fighter1.name + " WINS!";

        };


        return result;  // returning out result
    };

    /** Program Starts ! **/

    document.querySelector('#fight_btn a').onclick = function(e){
        fight(fighters);

        if(result !== 'no winner'){
            console.log(1);
            this.onclick = null;
        };


        e.preventDefault();
        return false;
    };



})();

