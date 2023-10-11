// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.


const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
 
];

function loadInitialReviews() {
    const container = document.getElementById('reviews-container');
    initialData.forEach(product => {
        const productDiv = document.createElement('div');
        const productTitle = document.createElement('h2');
        productTitle.textContent = product.product;
        productDiv.appendChild(productTitle);
        product.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = review.text;
            productDiv.appendChild(reviewDiv);
        });
        container.appendChild(productDiv);
    });
}

function addReview() {
    const inputValue = document.getElementById('review-input').value;
    if (inputValue.length < 50 || inputValue.length > 500) {
        alert("Длина отзыва должна быть от 50 до 500 символов.");
        return;
    }

    const container = document.getElementById('reviews-container');
    const reviewDiv = document.createElement('div');
    reviewDiv.textContent = inputValue;
    container.appendChild(reviewDiv);
}

window.onload = loadInitialReviews;
