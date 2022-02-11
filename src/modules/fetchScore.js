const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8ka3vntmsB8T1K6rtna4/scores/';

const fetchScore = async () => {
  const response = await fetch(api);
  return response.json();
};

export default fetchScore;
