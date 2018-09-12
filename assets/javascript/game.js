    //VARIABLES
    var goalNum = Math.floor(Math.random() * 102) + 19;
    var userNum = 0;
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
    var redNum;
    var yellowNum;
    var greenNum;
    var blueNum;
    var loseCount = 0;
    var winCount = 0;

$(document).ready(() => {

    assign();

    $('#red-tube').on('click', () => {
        console.log('red tube click:' + redNum);
        userNum = userNum + redNum;
        winLose();
        $('#userNum').html(userNum);
    });

    $('#yellow-tube').on('click', () => {
        console.log('yellow tube click:' + yellowNum);
        userNum = userNum + yellowNum;
        winLose();
        $('#userNum').html(userNum);
    });

    $('#green-tube').on('click', () => {
        console.log('green tube click:' + greenNum);
        userNum = userNum + greenNum;
        winLose();
        $('#userNum').html(userNum);
    });

    $('#blue-tube').on('click', () => {
        console.log('blue tube click:' + blueNum);
        userNum = userNum + blueNum;
        winLose();
        $('#userNum').html(userNum);
    });


    $('#goalNum').html(goalNum);
    $('#userNum').html(userNum);
    $('#wins').html(winCount);
    $('#losses').html(loseCount);
    


   function winLose () {
    if (userNum === goalNum) {
        alert("You made a successful experiment!");
        winCount ++; 
        reset();
        $('#wins').html(winCount);
        
    }
    else if (userNum > goalNum) {
        var difference = goalNum - userNum;
        alert("You lose!" + difference);
        loseCount ++;
        reset();
        $('#losses').html(loseCount);
    }
   } 

   function reset () {
    goalNum = Math.floor(Math.random() * 102) + 19;
    userNum = 0;
    redNum = numbers[Math.floor(Math.random() * numbers.length)]; 
    yellowNum = numbers[Math.floor(Math.random() * numbers.length)]; 
    greenNum = numbers[Math.floor(Math.random() * numbers.length)];
    blueNum = numbers[Math.floor(Math.random() * numbers.length)];
    $('#goalNum').html(goalNum);
   } 

   function assign () {
       var ri = Math.floor(Math.random() * numbers.length);
       redNum = numbers[ri];
       numbers.splice([ri],1);
       ri = Math.floor(Math.random() * numbers.length);
       yellowNum = numbers[ri];
       numbers.splice([ri],1);
       ri = Math.floor(Math.random() * numbers.length);
       greenNum = numbers[ri];
       numbers.splice([ri],1);
       ri = Math.floor(Math.random() * numbers.length);
       blueNum = numbers[ri];
       ri = Math.floor(Math.random() * numbers.length);
       numbers.splice([ri],1);
       console.log("red:" + redNum);
       console.log("yellow:" + yellowNum);
       console.log("green:" + greenNum);
       console.log("blue:" + blueNum);
       console.log(numbers);
   }

});