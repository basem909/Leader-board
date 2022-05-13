const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yt4bW2YG8dzNoT7iJENQ/scores/';

const scoreShow = (players) => {
  const scoreSheet = document.querySelector('.high-list');
  scoreSheet.innerHTML = '';
  players.forEach((player) => {
    scoreSheet.innerHTML += `<li class="high-score">${player.user} : ${player.score}</li>`;
  });
};

const getData = async () => {
  const stored = await fetch(api);
  const data = stored.json();
  return data;
};

const insertPlayer = async () => {
  const players = await getData();
  scoreShow(players.result);
};

const addUser = async (data) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: data[0], score: data[1] }),
  });
};

export { addUser, getData, insertPlayer };
