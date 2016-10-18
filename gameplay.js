module.exports = {
  'gameplay': function() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    var player1;
    var player2;
    rl.question('What is the name of player1? ', (answer) => {
      // TODO: Log the answer in a database
      console.log('Thank you ', answer);
      player1 = answer;
      var twoQuestion = function() {
        rl.question('What is the name of player2? ', (answer) => {
          console.log('Thank you ', answer);
          player2 = answer;
        });
      };
      return twoQuestion.then(function(answer) {
        console.log('great, its ', answer, 'turn to go');
      });


      //rl.close();
    });



  }

};
