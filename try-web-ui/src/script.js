// Array to hold card data
const cardsData = [
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$.',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
    {
        title: '',
        description: 'Crystal Agate Phone Grip 18.99$',
        image: 'https://www.figma.com/file/sPQFevjsXyc1OptfKFf3AF/image/515a392205949d981f0a7ab0ecb2d55fcf22b90f',
    },
];

// Get the cards container element
const cardsContainer = document.getElementById('cardsContainer');

// Function to create a card element
function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = cardData.image;
    cardImage.alt = cardData.title;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardData.title;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = cardData.description;

    const cardLink = document.createElement('a');
    cardLink.href = '#';
    cardLink.textContent = 'BUY NOW';

    // Append card content to the card
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardLink);

    // Append image and content to the card
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    return card;
}

// Loop through cardsData and create each card
cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    cardsContainer.appendChild(card);
});
