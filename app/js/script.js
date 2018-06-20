const cardsInfo = [
    {
        person: {
            name: 'Name 1',
            img: 'photo.png',
            rating: '97'
        },
        items: [
            '15 Items ',
            '11 Items long name',
            '11 Items long',
            '11 Items',

        ]
    },
    {
        person: {
            name: 'Dima Valuh',
            img: 'photo3.png',
            rating: '100'
        },
        items: [
            'Some item',
            'Additional item',
            'One more item',
            'Really really long item',

        ]
    },
    {
        person: {
            name: 'Name 1',
            img: 'photo.png',
            rating: '97'
        },
        items: [
            '15 Items ',
            '11 Items long name',
            '11 Items long',
            '11 Items',

        ]
    },
    {
        person: {
            name: 'Uvuvwevwevwe Onyetenvewve Ugwemubwem Osas',
            img: 'photo2.png',
            rating: '82'
        },
        items: [
            'Uvuvwevwevwe',
            'Onyetenvewve',
            'Ugwemubwem',
            'Osas',
            'Yes, that\'s my name'
        ]
    },
    {
        person: {
            name: 'Name 1',
            img: 'photo.png',
            rating: '97'
        },
        items: [
            '15 Items ',
            '11 Items long name',
            '11 Items long',
            '11 Items',

        ]
    },
    {
        person: {
            name: 'Uvuvwevwevwe Onyetenvewve Ugwemubwem Osas',
            img: 'photo2.png',
            rating: '82'
        },
        items: [
            'Uvuvwevwevwe',
            'Onyetenvewve',
            'Ugwemubwem',
            'Osas',
            'Yes, that\'s my name'
        ]
    },
];

const cardsWrapper = document.querySelector('.cards-wrapper');

const allCards = `
    ${cardsInfo.map(card => `
        <div class="swiper-slide card">
            <div class="card_person">
                <img class="person-photo" src="img/${card.person.img}" alt="Person Name">
                <div class="person-info">
                    <p class="person-info-name">${card.person.name}</p>
                    <div class="person-info-rating">
                        <span class="rating-title">Rating:</span>
                        <div class="rating-stars">
                            <img class="star" src="img/star.svg">
                            <img class="star" src="img/star.svg">
                            <img class="star" src="img/star.svg">
                            <img class="star" src="img/star.svg">
                            <img class="star" src="img/star.svg">
                        </div>
                        <span class="rating-percent">${card.person.rating}%</span>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="card_features">
                <div class="feature-block">
                    <img class="feature-img" src="img/feature1.svg" alt="Feature 1">
                    <p class="feature-title">Feature 1</p>
                </div>
                <div class="feature-block">
                    <img class="feature-img" src="img/feature2.svg" alt="Feature 2">
                    <p class="feature-title">Feature 2</p>
                </div>
                <div class="feature-block">
                    <img class="feature-img" src="img/feature3.svg" alt="Feature 3">
                    <p class="feature-title">Feature 3</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="card_items">
                <p class="items-heading">Some heading</p>
                <div class="items-wrap">
                    ${card.items.map(item => `
                        <div class="item">
                        <span class="item-text">${item}</span>
                    </div>
                    `).join('')}              
                </div>
            </div>
            <div class="card_actions">
                <button class="cta-done">Done</button>
            </div>
        </div>
    `).join('')}
`;

cardsWrapper.innerHTML = allCards;

window.onresize = () => {
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: window.innerWidth <= 768,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },
    });

};

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: window.innerWidth <= 768,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
});