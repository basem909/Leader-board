import { addUser, insertPlayer } from './functions/api-setup.js';
import './styles.css';

const refreshButton = document.querySelector('.refresh');
const addForm = document.querySelector('form');

addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const player = document.querySelector('.name');
  const score = document.querySelector('#scored');
  await addUser([player.value, score.value]);
  insertPlayer();
  e.target.reset();
});

window.onload = () => {
  insertPlayer();
};

refreshButton.addEventListener('click', () => {
  insertPlayer();
});