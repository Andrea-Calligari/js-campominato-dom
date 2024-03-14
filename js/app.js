// MAIN
const gridDOMElement = document.querySelector('.grid');
const buttonDOMElement = document.getElementById('button');
const selectDOMElement = document.getElementById('select');


buttonDOMElement.addEventListener('click', startGame)




















// FUNCTION
function startGame() {
  gridDOMElement.innerHTML = ' ';
  const size = getSize();
  generateRandomBombs(1, 16, 16)
  const numOfCellElement = size ** 2 // potenza di 2 => 8 * 8 
  // console.log(colSelectDOMElement);
  for (let i = 0; i < numOfCellElement; i++) {
    const num = i + 1;

    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    gridDOMElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cellElement.innerHTML = num;

    gridDOMElement.append(cellElement);

    cellElement.addEventListener('click', function () {
      console.log('click casell numero:', num);
      cellElement.classList.toggle('bg-dark'); // questo fa esattamente cio che fa l' if sopra

      // if (cellElement.classList.contains('bg-dark') === true) {
      //   cellElement.classList.remove('bg-dark');
      // } else {
      //   cellElement.classList.add('bg-dark');
      // }


    })
  }
}
function getSize() {
  let size = 10
  let value = selectDOMElement.value
  if (value === '1') {
    size = 9
  } else if (value === '2') {

    size = 7
  }
  return size
}
function generateRandomBombs(min, max, numberOfBomb) {
  const arrayBombs = [];
  while (arrayBombs.length < numberOfBomb) {

    const bombRandomNumber = parseInt(Math.floor(Math.random() * max) + min);
    if (arrayBombs.includes(bombRandomNumber) === false) {
      arrayBombs.push(bombRandomNumber)
    }

  }
  console.log(arrayBombs);
  return arrayBombs
}








