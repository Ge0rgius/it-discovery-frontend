class Book {

    constructor(title, author, publisher, pages, year) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }

}

const books = [];

function addBook(title, author, publisher, pages, year) {
    const book = new Book(title, author, publisher, pages, year);
    books.push(book);
}

function displayBooks() {
    let text = '';
    for(let book of books) {
        text += `title:${book.title}, author: ${book.author}`;
    }
    updateHTML('bookList', text);
}

class Author {

}

class Publisher {

}

class User {

}

class Order {

}

function getInputValue(elementId) {

    const inputElement = document.getElementById(elementId);
    return inputElement.value;
}

function updateHTML(elementId, value) {

    const inputElement = document.getElementById(elementId);
    inputElement.innerHTML = value;
}

document.getElementById('addBook').addEventListener('click', () => {
    const title = getInputValue('inputTitle');
    const author = getInputValue('inputAuthor');
    const publisher = getInputValue('inputPublisher');
    const pages = getInputValue('inputPages');
    const year = getInputValue('inputYear');

    addBook(title, author, publisher, pages, year);
    displayBooks();
});


