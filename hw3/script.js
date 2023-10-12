// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

document.addEventListener("DOMContentLoaded", loadReviewsFromLocalStorage);

function loadReviewsFromLocalStorage() {
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const container = document.getElementById('reviews-container');
    container.innerHTML = "";

    reviews.forEach((product, productIndex) => {
        const productDiv = document.createElement('div');
        const productTitle = document.createElement('h3');
        productTitle.textContent = product.name;
        productTitle.addEventListener('click', function() {
            if (productDiv.getElementsByClassName('review-list').length === 0) {
                const reviewList = document.createElement('ul');
                reviewList.className = 'review-list';
                product.reviews.forEach((review, reviewIndex) => {
                    const reviewItem = document.createElement('li');
                    
                    const reviewText = document.createElement('span');
                    reviewText.textContent = review;
                    reviewItem.appendChild(reviewText);
                    
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Удалить';
                    deleteButton.addEventListener('click', function() {
                        product.reviews.splice(reviewIndex, 1);
                        if (product.reviews.length === 0) {
                            reviews.splice(productIndex, 1);
                        }
                        localStorage.setItem("reviews", JSON.stringify(reviews));
                        loadReviewsFromLocalStorage();
                    });
                    reviewItem.appendChild(deleteButton);
                    
                    reviewList.appendChild(reviewItem);
                });
                productDiv.appendChild(reviewList);
            }
        });

        container.appendChild(productTitle);
        container.appendChild(productDiv);
    });
}

function addReviewToLocalStorage() {
    const productName = document.getElementById('product-name').value;
    const reviewText = document.getElementById('review-text').value;
    if (!productName || !reviewText) return;

    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const existingProduct = reviews.find(product => product.name === productName);

    if (existingProduct) {
        existingProduct.reviews.push(reviewText);
    } else {
        reviews.push({
            name: productName,
            reviews: [reviewText]
        });
    }

    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviewsFromLocalStorage();
}