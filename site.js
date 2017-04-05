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
    pressedAC();
  });

  $("#calculator .ceButton").click(function() {
    pressedCE();
  });

  $("#calculator .numbers").click(function() {
    var entry = $(this).attr("value");
    pressedNumber(entry);
  });

  $("#calculator .equalButton").click(function() {
    pressedEqualSign();
  });

  $('#calculator .arithmeticSign').click(function() {
    var entry = $(this).attr("value");
    pressedArithmeticSign(entry);
  });
  
  $(document).keypress(function(event) {

    if (event.keyCode == 8) {
      event.preventDefault();
      pressedCE();
    } else if (event.keyCode == 27) {
      event.preventDefault();
      pressedAC();
    }

    var entry = getChar(event);

    if (entry === "+" || entry === "-" || entry === "/" || entry === "*") {
      pressedArithmeticSign(entry);
    } else if (entry === "=" || event.keyCode === 13) {
      pressedEqualSign();
    } else if (parseInt(entry) || event.charCode === 46) {
      pressedNumber(entry);
    }
  })

  function pressedCE() {
    calculator.deleteLastSign();
    $('#answer').text('0');
    $('#equation').text(calculator.getEquation().join(' '));
  }

  function pressedAC() {
    calculator.cleanAll();
    $('#answer').text('0');
    $('#equation').text('0');
  }

  function pressedArithmeticSign(entry) {
    calculator.ariphmeticSignInsered(entry);
    $('#answer').text(entry);
    $('#equation').text(calculator.getEquation().join(' '));
  }

  function pressedEqualSign() {
    calculator.calculationResult();
    $('#answer').text(calculator.getResult());
    $('#equation').text(calculator.getEquation().join(' '));
  }

  function pressedNumber(entry) {
    calculator.numberInsered(entry);
    $('#answer').text(calculator.getSymbol());
    $('#equation').text(calculator.getEquation().join(' '));
  }
})

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}