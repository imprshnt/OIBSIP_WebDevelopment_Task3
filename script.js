const tempInput = document.getElementById('tempInput');
const resultContainer = document.querySelector('.result-container');
const resultText = document.getElementById('result');
const tempIcon = document.getElementById('tempIcon');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const unitOptions = document.querySelectorAll('.unit-option');

unitOptions.forEach(option => {
  option.addEventListener('click', () => {
    unitOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    option.querySelector('input').checked = true;
  });
});

convertBtn.addEventListener('click', () => {
  const inputVal = tempInput.value.trim();
  const selectedUnit = document.querySelector('input[name="unit"]:checked').value;

  resultContainer.classList.remove('visible');
  resultText.textContent = '';

  if (inputVal === '' || isNaN(inputVal)) {
    showResult('⚠️ Please enter a valid number!', true);
    return;
  }

  const temp = parseFloat(inputVal);
  let convertedTemp, unitLabel;

  if (selectedUnit === 'celsius') {
    convertedTemp = (temp * 9 / 5) + 32;
    unitLabel = '°F';
    tempIcon.style.stroke = '#FF6F61';
  } else {
    convertedTemp = (temp - 32) * 5 / 9;
    unitLabel = '°C';
    tempIcon.style.stroke = '#FFD166';
  }

  showResult(`Shifted Temp: ${convertedTemp.toFixed(2)} ${unitLabel}`, false);
});

resetBtn.addEventListener('click', () => {
  tempInput.value = '';
  resultText.textContent = '';
  resultContainer.classList.remove('visible');
});

function showResult(message, isError) {
  resultText.textContent = message;
  resultText.style.color = isError ? '#FF4444' : '#FFD166';
  resultContainer.classList.add('visible');
}
