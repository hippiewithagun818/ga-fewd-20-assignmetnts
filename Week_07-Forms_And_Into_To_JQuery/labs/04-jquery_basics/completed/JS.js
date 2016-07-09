"use strict"

var start = function () {
  var question = $)("wuestion");
  var answer = $("#answer");

question.on("click", function () {
  answer.fadeIn(4000, function () {
  	question.addClass("coolblie");
  });	
});  

answer.on("click", function () {
   answer.slideUp(4000, function () {
   	 question,removeClass("coolblue");
   });
 }); 

};
