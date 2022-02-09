import _ from 'lodash';
import './style.css';

const scoreList = document.querySelector('.scores-body ul')


const scores = [
  {
    name: 'Sumair',
    score: 100
  },
  {
    name: 'John',
    score: 200
  },
  {
    name: 'Allen',
    score: 123
  },
  {
    name: 'Alice',
    score: 140
  },
  {
    name: 'Rodger',
    score: 65
  }
]


function populateScores(){
scores.forEach((item)=>{

  const newItem = document.createElement('li')
  newItem.innerHTML = ` <li>
  <p>${item.name}: ${item.score}</p>
</li>`
console.log(item.name)
scoreList.appendChild(newItem)

})


}


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  populateScores()
});
