let cards = document.querySelector('.cards') // доступ к классу cards

let allCards = document.querySelectorAll('.card') // массив с общим количеством изначальных элементов (карточек)
console.log(allCards); // их будет показано 5 


for (let i = 0; i < 4; i ++) {
let newBox = document.createElement ('div') // создание нового элемента (нового дива)
newBox.className = 'card' // присвоили новому элементу класс со свойствами этого класса (чтб был такой же как родня)
newBox.innerText = `Card ${allCards.length + 1}`  // добавление текста в новый элемент
newBox.style.cssText = `  
background-color: lightblue;
color: black;
font-size: 20px;` // добавление css свойств 
cards.appendChild(newBox) // добавление в конец нового элемента (карточки) в div с классом cards
allCards = document.querySelectorAll('.card')
}


for (let i = 0; i< allCards.length; i ++) {
// let lastBox = document.createElement('div')
// lastBox.className = 'card'

allCards[i].style.cssText = `
background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});
position: relative;
`

let innerCard = document.createElement('div');
innerCard.className = 'innerCard';
allCards[i].appendChild(innerCard);
innerCard.innerText = getNum(allCards[i]);

innerCard.style.cssText = ` 
  border: solid 5px black;
  width: 90px;
  height: 90px;
  background-color: red;
  color: white;

  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;

  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
 `
}

function getNum (element) {
  let text = element.innerText.trim()
  return text[text.length-1]
}

function randomColor (){
  return Math.floor(Math.random() * 255)
}

cards.addEventListener ("click", (event) => { // слушатель событий по области cards
  event.preventDefault();
  for (i=0; i<allCards.length; i++) {
    if (event.target === allCards[i]) {
      allCards[i].style.cssText = `
      position: relative;
      background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});
      `
    }
  }
} )

let button = document.createElement('button')
button.innerText = "Change colors"
button.style.cssText = `
  background-color: white;
  color: red;
  font-weight: balder;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 10px 5px 5px red;
`
cards.appendChild(button)

button.addEventListener('click', event => {
  event.preventDefault();
  for (let i = 0; i< allCards.length; i ++) {
    // let lastBox = document.createElement('div')
    // lastBox.className = 'card'
    
    allCards[i].style.cssText = `
    background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});
    position: relative;
    `
  }
})






