'use strict';
import {getInputValue, updateHTML} from "./utils.js";

class Book {

    constructor(title, author, publisher, pages, year) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }

}

class BookStorage {
    static #instance;

    books = [];

    static {
        this.#instance = new BookStorage();
    }

    static getInstance() {
        return this.#instance;
    }

    addBook(title, author, publisher, pages, year) {
        const book = new Book(title, author, publisher, pages, year);
        this.books.push(book);
    }

    displayBooks() {
        let text = '';
        for(let book of this.books) {
            text += `title:${book.title}, author: ${book.author}`;
        }
        updateHTML('bookList', text);
    }
}

//TODO for homework
class Author {

}

class Publisher {

}

class User {

}

class Order {

}

document.getElementById('addBook').addEventListener('click', () => {
    const title = getInputValue('inputTitle');
    const author = getInputValue('inputAuthor');
    const publisher = getInputValue('inputPublisher');
    const pages = getInputValue('inputPages');
    const year = getInputValue('inputYear');

    BookStorage.getInstance().addBook(title, author, publisher, pages, year);
    BookStorage.getInstance().displayBooks();
});


