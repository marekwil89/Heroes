angular.module("mainPageServ", [])

.factory('hero', function(){
  return {
    quotes: [
        {
          author: 'Spiderman', 
          text: 'With great power comes great responsibility'
        },
        {
          author: 'Batman',
          text: 'A hero can be anyone even a man doing something as simple and reassuring as putting a coat around a little boy`s shoulder to let him know that the world hadn`t ended'
        },
        {
          author: 'Iron-man',
          text: "That's kind of catchy. It's got a nice ring to it"
        },
        {
          author: 'Cpt America',
          text: "Bla bla bla"
        }
      ],
    randNumb: function(){
       return Math.floor(Math.random() * this.quotes.length) - 0
    } 
  };
})

