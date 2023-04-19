const TROPHY_CONTAINER = document.getElementById('trophy-container');

function getTrophies() {
  fetch(API_URL.replace('{user_id}', USER_ID))
    .then(response => response.json())
    .then(data => {
      const trophies = data.trophyTitles.slice(0, 5);
      TROPHY_CONTAINER.innerHTML = '';
      trophies.forEach(trophy => {
        const trophyCard = document.createElement('div');
        trophyCard.classList.add('trophy');
        const trophyImage = document.createElement('img');
        trophyImage.src = trophy.trophyTitleSmallIconUrl;
        const trophyTitle = document.createElement('h2');
        trophyTitle.textContent = trophy.name;
        const trophyDescription = document.createElement('p');
        trophyDescription.textContent = trophy.trophyEarnedRate + '% earned';
        trophyCard.appendChild(trophyImage);
        trophyCard.appendChild(trophyTitle);
        trophyCard.appendChild(trophyDescription);
        TROPHY_CONTAINER.appendChild(trophyCard);
      });
    })
    .catch(error => console.error(error));
}

// getTrophies();
