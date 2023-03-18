'use strict';
//import {getInputValue, updateHTML} from "./utils.js";

class Book {
    constructor(private title: string, private author: string, private publisher: string, private pages: number,
                private year: number) {
    }

    public getGeneralInformation(): string {
        return `title:${this.title}, author: ${this.author}`;
    }

}

class BookStorage {
    static #instance: BookStorage;

    private readonly books: Book[] = [];

    static {
        this.#instance = new BookStorage();
    }

    public static getInstance() {
        return this.#instance;
    }

    public addBook(title: string, author: string, publisher: string, pages: number, year: number): void {
        const book = new Book(title, author, publisher, pages, year);
        this.books.push(book);
    }

    public displayBooks(): void {
        let text = '';
        for(let book of this.books) {
            text += book.getGeneralInformation();
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



