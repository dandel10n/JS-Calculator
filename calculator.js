function clearDisplay(equation, symbol, result) {
  return result = 0,
          symbol = '',
          equation = []
}

function cleanLastClick(equation, symbol) {
  symbol = '';
  equation = equation.pop();
  return (equation, symbol);
} 