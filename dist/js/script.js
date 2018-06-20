'use strict';

var cardsInfo = [{
    person: {
        name: 'Name 1',
        img: 'photo.png',
        rating: '97'
    },
    items: ['15 Items ', '11 Items long name', '11 Items long', '11 Items']
}, {
    person: {
        name: 'Dima Valuh',
        img: 'photo3.png',
        rating: '100'
    },
    items: ['Some item', 'Additional item', 'One more item', 'Really really long item']
}, {
    person: {
        name: 'Name 1',
        img: 'photo.png',
        rating: '97'
    },
    items: ['15 Items ', '11 Items long name', '11 Items long', '11 Items']
}, {
    person: {
        name: 'Uvuvwevwevwe Onyetenvewve Ugwemubwem Osas',
        img: 'photo2.png',
        rating: '82'
    },
    items: ['Uvuvwevwevwe', 'Onyetenvewve', 'Ugwemubwem', 'Osas', 'Yes, that\'s my name']
}, {
    person: {
        name: 'Name 1',
        img: 'photo.png',
        rating: '97'
    },
    items: ['15 Items ', '11 Items long name', '11 Items long', '11 Items']
}, {
    person: {
        name: 'Uvuvwevwevwe Onyetenvewve Ugwemubwem Osas',
        img: 'photo2.png',
        rating: '82'
    },
    items: ['Uvuvwevwevwe', 'Onyetenvewve', 'Ugwemubwem', 'Osas', 'Yes, that\'s my name']
}];

var cardsWrapper = document.querySelector('.cards-wrapper');

var allCards = '\n    ' + cardsInfo.map(function (card) {
    return '\n        <div class="swiper-slide card">\n            <div class="card_person">\n                <img class="person-photo" src="img/' + card.person.img + '" alt="Person Name">\n                <div class="person-info">\n                    <p class="person-info-name">' + card.person.name + '</p>\n                    <div class="person-info-rating">\n                        <span class="rating-title">Rating:</span>\n                        <div class="rating-stars">\n                            <img class="star" src="img/star.svg">\n                            <img class="star" src="img/star.svg">\n                            <img class="star" src="img/star.svg">\n                            <img class="star" src="img/star.svg">\n                            <img class="star" src="img/star.svg">\n                        </div>\n                        <span class="rating-percent">' + card.person.rating + '%</span>\n                    </div>\n                </div>\n            </div>\n            <div class="divider"></div>\n            <div class="card_features">\n                <div class="feature-block">\n                    <img class="feature-img" src="img/feature1.svg" alt="Feature 1">\n                    <p class="feature-title">Feature 1</p>\n                </div>\n                <div class="feature-block">\n                    <img class="feature-img" src="img/feature2.svg" alt="Feature 2">\n                    <p class="feature-title">Feature 2</p>\n                </div>\n                <div class="feature-block">\n                    <img class="feature-img" src="img/feature3.svg" alt="Feature 3">\n                    <p class="feature-title">Feature 3</p>\n                </div>\n            </div>\n            <div class="divider"></div>\n            <div class="card_items">\n                <p class="items-heading">Some heading</p>\n                <div class="items-wrap">\n                    ' + card.items.map(function (item) {
        return '\n                        <div class="item">\n                        <span class="item-text">' + item + '</span>\n                    </div>\n                    ';
    }).join('') + '              \n                </div>\n            </div>\n            <div class="card_actions">\n                <button class="cta-done">Done</button>\n            </div>\n        </div>\n    ';
}).join('') + '\n';

cardsWrapper.innerHTML = allCards;

window.onresize = function () {
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: window.innerWidth <= 768,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left'
        }
    });
};

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: window.innerWidth <= 768,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    }
});