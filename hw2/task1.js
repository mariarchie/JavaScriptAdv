// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Начальный список книг содержит дубликаты!");
        }
        this.#books = [...initialBooks];
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Книга с таким названием уже существует в списке!");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error("Книги с таким названием нет в списке!");
        }
        this.#books = this.#books.filter(book => book !== title);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// 
const myLibrary = new Library(["Война и мир", "До самого рая"]);
console.log(myLibrary.allBooks); 

myLibrary.addBook("Картье");
console.log(myLibrary.allBooks); 

console.log(myLibrary.hasBook("До самого рая")); 
console.log(myLibrary.hasBook("Старик и море")); 

myLibrary.removeBook("Война и мир");
console.log(myLibrary.allBooks); 
