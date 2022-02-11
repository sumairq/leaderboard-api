const scoreList = document.querySelector('.scores-body ul');

const populateScores = (users) => {
  const usersResult = users.result;
  usersResult.forEach((user) => {
    const newUser = document.createElement('li');
    newUser.innerHTML = ` <li>
    <p>${user.user}: ${user.score}</p>
  </li>`;
    scoreList.appendChild(newUser);
  });
};

export default populateScores;
