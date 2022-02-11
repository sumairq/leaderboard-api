const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8ka3vntmsB8T1K6rtna4/scores/';
const addNewUser = async (e) => {
  e.preventDefault();
  let userVal = document.getElementById('user').value;
  let scoreVal = document.getElementById('score').value;
  const response = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      user: userVal,
      score: +scoreVal,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  userVal = '';
  scoreVal = '';
  return response.json();
};

export default addNewUser;
