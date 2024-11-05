const temperatureInput = document.getElementById('temperature-input');
const unitSelect = document.getElementById('unit-select');
const convertButton = document.getElementById('convert-button');
const resultDisplay = document.getElementById('result-display');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unitFrom = unitSelect.value;

  if (isNaN(temperature)) {
    alert('Please enter a valid number for temperature.');
    return;
  }

  let result, unitTo;

  if (unitFrom === 'celsius') {
    // Convert to Fahrenheit and Kelvin
    const fahrenheit = (temperature * 9/5) + 32;
    const kelvin = temperature + 273.15;
    result = `${temperature} °C is ${fahrenheit.toFixed(2)} °F and ${kelvin.toFixed(2)} K`;
    unitTo = 'Fahrenheit and Kelvin';
  } else if (unitFrom === 'fahrenheit') {
    // Convert to Celsius and Kelvin
    const celsius = (temperature - 32) * 5/9;
    const kelvin = celsius + 273.15;
    result = `${temperature} °F is ${celsius.toFixed(2)} °C and ${kelvin.toFixed(2)} K`;
    unitTo = 'Celsius and Kelvin';
  } else if (unitFrom === 'kelvin') {
    // Convert to Celsius and Fahrenheit
    const celsius = temperature - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    result = `${temperature} K is ${celsius.toFixed(2)} °C and ${fahrenheit.toFixed(2)} °F`;
    unitTo = 'Celsius and Fahrenheit';
  }

  resultDisplay.textContent = result;
});