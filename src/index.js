import './style.css';
import fetchScore from './modules/fetchScore.js';
import addNewUser from './modules/addUser.js';
import populateScores from './modules/populateScores.js';

const myForm = document.getElementById('myForm');
const refreshButton = document.getElementById('refresh');

fetchScore().then((response) => { populateScores(response); });
refreshButton.addEventListener('click', () => { window.location.reload(); });
myForm.addEventListener('submit', addNewUser);

export default fetchScore;
