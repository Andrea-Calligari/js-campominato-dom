// MAIN
const gridDOMElement = document.querySelector('.grid');
const buttonDOMElement = document.getElementById('button');
const selectDOMElement = document.getElementById('select');


buttonDOMElement.addEventListener('click', startGame)

const arrayPoints = [];











// FUNCTION
function startGame() {
  gridDOMElement.innerHTML = ' ';
  const size = getSize();
  const bombNumbers = generateRandomBombs(1, 100, 16)
  const numOfCellElement = size ** 2 // potenza di 2 => 8 * 8 
  //  console.log(bombNumbers);
  for (let i = 0; i < numOfCellElement; i++) {
    const num = i + 1;

    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    gridDOMElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    cellElement.innerHTML = num;

    gridDOMElement.append(cellElement);

    cellElement.addEventListener('click', function () {

      if (bombNumbers.includes(num) === true) {
        cellElement.classList.add('bomb')
        alert(`HAI PERSO TOTALIZZANDO PUNTI : ${counterPoint()}`)
      } else if (bombNumbers.includes(num) === false) {
        arrayPoints.push(num)
        cellElement.classList.toggle('bg-dark')
      }
        // questo fa esattamente cio che fa l' if sopra
        
        // if (cellElement.classList.contains('bg-dark') === true) {
        //   cellElement.classList.remove('bg-dark');
        // } else {
        //   cellElement.classList.add('bg-dark');
        // }
            

      
      
      console.log('click casell numero:', num);
      console.log(arrayPoints)
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

function counterPoint(){
  const totalPoint = arrayPoints.length
  return totalPoint

}


