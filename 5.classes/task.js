class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this._state === 0;
        }
        else if(newState > 100) {
            this._state === 100;
        }
        else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
} 

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, state);
        this.type = magazine;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, state);
        this.type = book;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount, state) ;
        this.type = novel;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount, state) ;
        this.type = fantastic;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount)  {
        super(author, name, releaseDate, pagesCount, state) ;
        this.type = detective;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(books[i].hasOwnProperty(type) && books[i].[type] === value)
                return books[i];
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(books[i].name === bookName) {
                this.books.splice(i);
                return books[i];
            }
            else {
                return null;
            }
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
