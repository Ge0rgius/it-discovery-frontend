'use strict';

//import {getInputValue, updateHTML} from "./utils.js";

class Book {
    constructor(private title: string, private author: string, private publisher: string, private pages: number,
                private year: number) {
    }

    public getGeneralInformation(): string {
        return `title:${this.title}, author: ${this.author}`;
    }

    public match(title?: string, author?: string): boolean {
        //TODO implement
        return true;
    }

}

interface BookStore {
    getBooks(): Book[];

    addBook(book: Book): void;

    search(title?: string, author?: string): Book[];
}

class InMemoryBookStore implements BookStore {

    private readonly books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBooks(): Book[] {
        return this.books;
    }

    search(title?: string, author?: string): Book[] {
        return this.books.filter(book => book.match(title, author));
    }

}

class BookController {
    static #instance: BookController;

    private readonly bookStore: BookStore = new InMemoryBookStore();

    static {
        this.#instance = new BookController();
    }

    public static getInstance() {
        return this.#instance;
    }

    public addBook(title: string, author: string, publisher: string, pages: number, year: number): void {
        const book = new Book(title, author, publisher, pages, year);
        this.bookStore.addBook(book);
    }

    public displayBooks(): void {
        let text = '';
        for (let book of this.bookStore.getBooks()) {
            text += book.getGeneralInformation();
        }
        updateHTML('bookList', text);
    }
}

abstract class Human {

    constructor(private name: string, private birthDate: Date) {
    }
}

//TODO for homework
class Author extends Human {
    constructor(private books: Book[], name: string, birthDate: Date) {
        super(name, birthDate);
    }


}

class Publisher {

}

class User extends Human {

    constructor(private orders: Order[], name: string, birthDate: Date) {
        super(name, birthDate);
    }

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

    BookController.getInstance().addBook(title, author, publisher, pages, year);
    BookController.getInstance().displayBooks();
});

function getInputValue(elementId: string): string {

    const inputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement.value;
}

function updateHTML(elementId: string, value: string): void {

    const inputElement: HTMLElement | null = document.getElementById(elementId);
    if (inputElement) {
        inputElement.innerHTML = value;
    }
}



