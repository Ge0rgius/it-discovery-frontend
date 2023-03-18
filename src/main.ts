'use strict';
//import {getInputValue, updateHTML} from "./utils.js";

class Book {

    title: any;

    author: any;

    publisher: any;

    pages: number;

    year: number;

    constructor(title: string, author: string, publisher: string, pages: number, year: number) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }

}

class BookStorage {
    static #instance: BookStorage;

    books: Book[] = [];

    static {
        this.#instance = new BookStorage();
    }

    static getInstance() {
        return this.#instance;
    }

    addBook(title: string, author: string, publisher: string, pages: number, year: number): void {
        const book = new Book(title, author, publisher, pages, year);
        this.books.push(book);
    }

    displayBooks(): void {
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

document.getElementById('addBook')?.addEventListener('click', () => {
    const title = getInputValue('inputTitle') as string;
    const author = <string>getInputValue('inputAuthor');
    const publisher = getInputValue('inputPublisher') as string;
    //TODO what if not a number?
    const pages = Number(getInputValue('inputPages'));
    const year = Number(getInputValue('inputYear'));

    BookStorage.getInstance().addBook(title, author, publisher, pages, year);
    BookStorage.getInstance().displayBooks();
});

function getInputValue(elementId: string): string {

    const inputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement.value;
}

 function updateHTML(elementId: string, value: string): void {

    const inputElement: HTMLElement | null = document.getElementById(elementId);
    if(inputElement) {
        inputElement.innerHTML = value;
    }
}



