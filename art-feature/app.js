var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(expressLayouts)

var questions = {
  'what-age':{
    question: "What age did Kate start drawing?",
    answer: "Sometime around 7 or so! Probably."
  },
  'the-most':{
    question: "What does Kate like to draw the most?",
    answer: "Anything fantasy related."
  },
  'prefer-drawing':{
    question: "Does Kate prefer drawing traditionally or graphically?",
    answer: "She prefers to draw graphically. While she apprecaite pencil and paper, she's grown too accustom to ctrl+z."
  },
  'inspiration':{
    question: "Where does Kate's inspiration for drawing come from?",
    answer: "Her love for fiction and video games--specifically Final Fantasy and any other JRPGs that don't suck."
  },
  'why-not':{
    question: "Why did Kate decide to pursue developing as opposed to drawing?",
    answer: "Drawing is more of a hobby of hers; she was afraid of losing her passion for it if she made it into a career somehow."
  }
};

app.get('/', function (request, response) {
  response.render('index', {'questions': questions});
});
app.get('/trivia/:question', function(request, response){
  var questionKey = request.params.question;
  var triviaQuestion = questions[questionKey];
  response.render('trivia', {'question': triviaQuestion.question, 'answer': triviaQuestion.answer});
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
