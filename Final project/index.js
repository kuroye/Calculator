var firstNumber = 0;
var secondNumber = 0;
var result = 0;
var operator = '#';
var clickedBtn;
var round = 0;

$(".num").click(function(){

    clickedBtn = $(this).attr("id");

    if((clickedBtn >=0 || clickedBtn<=9) && round==0){
      firstNumber = parseInt(clickedBtn);
      $(".input").text(firstNumber);
      round++;
    }else if ((clickedBtn >=0 || clickedBtn<=9) && round>0) {
      secondNumber = parseInt(clickedBtn);
      $(".input").text(secondNumber);
    }

});

$(".op").click(function(){

  clickedBtn = $(this).attr("id");

  if(clickedBtn == '+'){
    operator = '+' ;
  }
  if(clickedBtn == '-'){
    operator = '-' ;
  }
  if(clickedBtn == '*'){
    operator = '*' ;
  }
  if(clickedBtn == '/'){
    operator = '/' ;
  }
});

$(".eq").click(function(){

  switch (operator) {
    case '+':
    addNum();
      break;
    case '-':
    subtractNum();
      break;
    case '*':
    multiplyNum();
      break;
    case '/':
    divideNum();
      break;
  }

  clickedBtn = $(this).attr("id");

  if(clickedBtn == '='){
    $(".output").text(result);
  }
});

function addNum(){
  result = firstNumber + secondNumber;
}
function subtractNum(){
  result = firstNumber - secondNumber;
}
function multiplyNum(){
  result = firstNumber * secondNumber;
}
function divideNum(){
  result = firstNumber / secondNumber;
}


$(".clear").click(function(){
  $(".output").text(0);
  $(".input").text(0);
  round=0;
  result=0;
});
