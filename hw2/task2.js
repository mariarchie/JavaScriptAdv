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
