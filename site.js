//1. После загрузки отражать панель калькулятора
//2. При нажатии на кнопки отражать их на экране калькулятора.
  //2.1 Пока пользователь набирает цифры, добавлять значения в переменную и отражать её на экране
  //2.2 При нажатии на арифметический знак, передавать получившуюся переменную в список уравнения, на экране отражать значение кнопки, передавать значение в список
  //2.3 При нажатии на "AC", очищать экран, переменную и список
  //2.4 При нажатии на "СЕ", удалять последнюю переданную в список переменную и обновлять уравнение на экране
  
//3. При нажатии на арифметические символы записывать получающееся уравнение в нижней части экрана калькулятора
//4. При нажатии на "=" выводить на экран результат уравнения как в главной части экрана калькулятора, так и в нижней части с уравнением
//5. При нажатии на "СЕ" очищать последнюю введенную часть уравнения
//6. При нажатии на "АС" удалять всё уравнение 

$(document).ready(function(){

  var calculator = new Calculator();

  $('#calculator .acButton').click(function() {
    calculator.cleanAll();
    $('#answer').text('0');
    $('#equation').text('0');
  });

  $("#calculator .ceButton").click(function() {
    calculator.deleteLastSign();
    $('#answer').text('0');
    $('#equation').text(calculator.equation.join(' '));
  });

  $("#calculator .numbers").click(function() {
    var entry = $(this).attr("value");

    calculator.numberInsered(entry);
    $('#answer').text(calculator.symbol);
    $('#equation').text(calculator.equation.join(' '));
  });

  $("#calculator .equalButton").click(function() {
    calculator.calculationResult();
    $('#answer').text(calculator.result);
    $('#equation').text(calculator.equation.join(' '));
  });

  $('#calculator .arithmeticSign').click(function() {
    var entry = $(this).attr("value");

    calculator.ariphmeticSignInsered(entry);
    $('#answer').text(entry);
    $('#equation').text(calculator.equation.join(' '));
  });
})