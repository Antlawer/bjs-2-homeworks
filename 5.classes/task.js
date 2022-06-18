// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = (this.state * 1.5);
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findBooks = this.books.some((element) => {
            return element[type] === value;
        })

        if (findBooks === true) {
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i][type] === value) {
                    return this.books[i];
                }
            }
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        const giveBook = this.books.findIndex(element => element.name == bookName);

        if (giveBook === -1) {
            return null;
        } else {
            const indexOfBook = (this.books.splice(giveBook, 1));
            return indexOfBook.pop();
        }
    }
}

// Задача 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(subjectName, mark) {
        if ((mark < 1 || mark > 5) && (typeof mark !== "number")) {
            console.log("Неверные значения");
        } else {
            if (!this.marks.hasOwnProperty(subjectName)) {
                this.marks[subjectName] = [];
            }
            this.marks[subjectName].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        return this.getAve(this.marks[subjectName]);
    }

     getAverage() {
        let summ = 0;
         for (let key in this.marks) {
            let value = this.getAverageBySubject(key);
            summ += value;
         }
         return summ / Object.keys(this.marks).length;
     }

    getAve(mark) {
        const sumMarks = mark.reduce((acc, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return (acc + item) / arr.length;
            } else {
                return (acc + item);
            }
        });
        return sumMarks;
    }
}


const vasya = new Student("Lalak", "male", 24);
vasya.addMark("matematika", 5);
vasya.addMark("matematika", 5);
vasya.addMark("fizika", 3);
vasya.addMark("fizika", 5);
console.log(vasya.getAverageBySubject("matematika"));
console.log(vasya.getAverage());