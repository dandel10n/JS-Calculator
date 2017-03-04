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
  var equation = [];
  var symbol = '';
  
  $('button').click(function() {
    var entry = $(this).attr("value");

    if(entry == "ac") {
      $('#answer').text('0');
      $('#equation').text('0');
      equation = [];
      symbol = '';
      
    } else if (entry == "ce") {
      equation.pop();
      symbol = '';
      $('#answer').text('0');
      $('#equation').text(equation.join(' '));
      
    } else if (Number(entry) || entry == "0" || entry == ".") {
      //если нажата цифра
      symbol += entry;
      $('#answer').text(symbol);
      $('#equation').text(equation.join(' '));
      
    } else if (entry == "=") {
      //когда нажато "="
      equation.push(Number(symbol));
      for (var i = 1; i < equation.length-1; i++) {
        if (equation[i] == "/") {
          equation[i+1] = equation[i-1]/equation[i+1];
        } else if (equation[i] == "*") {
          equation[i+1] = equation[i-1]*equation[i+1];
        } else if (equation[i] == "+") {
          equation[i+1] = equation[i-1] + equation[i+1];
        } else if (equation[i] == "-") {
          equation[i+1] = equation[i-1] - equation[i+1];
        }
      }
      $('#answer').text(equation[equation.length-1]);
    } else {
      //когда нажат арифметический знак
      if (symbol) {
        equation.push(Number(symbol));
      }
      if (equation && typeof equation[equation.length-1] !== "number") {
        equation.pop();
      }
      equation.push(entry);
      symbol = "";
      $('#answer').text(entry);
      $('#equation').text(equation.join(' '));
    }
    console.log(equation);
    console.log(symbol);
  })
})
