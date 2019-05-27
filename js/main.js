var quiz = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
      "Central Processing Unit"
    ]

  },
  {

    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    answers: ["512", "1024", "500", "1000"]
  },
  {

    question:
      "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    answers: ["Objective-C", "C#", "Ruby", "C++"]
  },
  {

    question:
      "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
    correct_answer: "Binary",
    answers: ["JavaScript", "Binary", "C++", "Python"]
  },
  {

    question: "Which team won the 2017 Champions Trophy?",
    correct_answer:
      "Pakistan",
    answers: [
      "India",
      "Australia",
      "South Africa",
      "Pakistan",

    ]
  },
  {

    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    answers: ["Ice Cream Sandwich", "Jelly Bean", "Nougat", "Marshmallow"]
  },
  {

    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    answers: [".tu", ".tt", ".tl", ".tv"]
  },
  {

    question:
      "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    correct_answer: "Green",
    answers: ["Red", "Green", "Blue", "Yellow"]
  },
  {

    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    answers: ["Hexadecimal", "Binary", "Duodecimal", "Octal"]
  },
  {

    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    answers: ["Android", "iOS", "BlackBerry", "Symbian"]
  }


]

var body = document.getElementsByTagName("body")[0];



for (var i = 0; i < quiz.length; i++) {
  var quest_num = document.createElement("h1");
  quest_num.innerHTML = "Question " + (i + 1);
  body.appendChild(quest_num);
  console.log(quest_num);

  var questions = document.createElement("div");
  questions.setAttribute("id", "quest");
  questions.style.padding = "40px";

  var para = document.createElement("p");
  para.style.marginBottom = "20px";
  para.innerHTML = quiz[i].question;
  questions.appendChild(para);
  console.log(para);

  for (var j = 0; j < quiz[i].answers.length; j++) {
    var label = document.createElement("label");

    var radio = document.createElement("input");
    var line = document.createElement("br");

    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "question" + (i + 1));
    radio.setAttribute("value", quiz[i].answers[j]);



    label.innerText = quiz[i].answers[j];
    label.style.paddingLeft = "10px";
    //label.appendChild(radio);






    questions.appendChild(radio);
    questions.appendChild(label);
    questions.appendChild(line);


    console.log(radio);



  }




  body.appendChild(questions);
}



var btn_div = document.createElement("div");
btn_div.setAttribute("id", "btn");

var sub_btn = document.createElement("button");
sub_btn.innerHTML = "Submit Quiz";
sub_btn.setAttribute("onclick", "check()");
btn_div.appendChild(sub_btn);
body.appendChild(btn_div);

function check() {
  var allRadios = document.getElementsByTagName('input');
  var result = 0;
  var correct = 0;
  for (var i = 0; i < allRadios.length; i++) {
    if (allRadios[i].checked) {

      if (allRadios[i].value === quiz[0].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[1].correct_answer) {
        result++;
        correct++;
      }

      else if (allRadios[i].value === quiz[2].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[3].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[4].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[5].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[6].correct_answer) {
        result++;
        correct++;
      }
      else if (allRadios[i].value === quiz[7].correct_answer) {
        result++;
        correct++;
      }

      else if (allRadios[i].value === quiz[8].correct_answer) {
        result++;
        correct++;
      }

      else if (allRadios[i].value === quiz[9].correct_answer) {
        result++;
        correct++;
      }
      
    }
    
  }
  var per = result / quiz.length * 100;
  var final = per.toFixed(2);

  var alert = document.createElement('div');
  alert.setAttribute("class", "alert");
  var res = document.createElement("div");
  res.setAttribute("id", "quest");
  res.innerHTML = "Your " + correct + " out of " + quiz.length + " answers are correct" + "<br>" + "Result is: " + final + "%";
  res.style.fontSize = "20px";
  res.style.padding = "10px";
  body.appendChild(res);

}


// var number=document.getElementById("number");


// var question_div=document.getElementById("quest");

// // var text = document.createTextNode(qui);

// var question=document.createElement("p");
// question.innerHTML=quiz[0].question;

// var options1=document.createElement("input");
// options1.setAttribute("type","radio");
// options1.setAttribute("name","quest");
// options1.setAttribute("value",quiz[0].correct_answer);
// options1.style.color="white";



// var options2=document.createElement("input");
// options2.setAttribute("type","radio");
// options2.setAttribute("name","quest");
// options2.setAttribute("text",quiz[0].incorrect_answers[0]);


// var options3=document.createElement("input");
// options3.setAttribute("type","radio");
// options3.setAttribute("name","quest");
// options3.setAttribute("value",quiz[0].incorrect_answers[1]);


// var options4=document.createElement("input");
// options4.setAttribute("type","radio");
// options4.setAttribute("name","quest");
// options4.setAttribute("value",quiz[0].incorrect_answers[2]);




// question_div.appendChild(question);
// question_div.appendChild(options1);
// question_div.appendChild(options2);
// question_div.appendChild(options3);
// question_div.appendChild(options4);


