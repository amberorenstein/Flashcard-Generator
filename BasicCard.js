// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
// module.exports = BasicCard;
//
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card

var inquirer = require("inquirer");

//Card constuctor
function clozeCard(front,back) {
  this.front = front;
  this.back = back;
  this.partial = function() {
    if(this.front.includes(this.back)) {
      console.log(this.front.replace(this.back, '...'));
    }
  }
}

//array of cards
var cardArray = [
  {front: "George Washington was the first president of the united states", back: "George Washington"
},
{front: "Barack Obama was the forty-fourth president of the united states", back: "Barack Obama"
},
{front: "Zachary Taylor was the twelfth president of the united states", back: "Zachary Taylor"
},
{front: "Calvin Coolidge was the thirtieth president of the united states", back: "Calvin Coolidge"
},
{front: "John F. Kennedy was the thirty-fifth president of the united states", back: "John F. Kennedy"
},
]

var print = {
}
for (var i = 0; i<cardArray.length; i++) {
  print[i] = new clozeCard(cardArray[i].front, cardArray[i].back);

  print[i].partial();
}
