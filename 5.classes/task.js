class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;

	}
	fix() {
		this.state = this.state * 1.5;
	}

	set state(newState) {
		this._newState = newState;

		if (newState < 0) {
			this.state = 0;
		} else if (newState > 100) {
			this.state = 100;
		} else if (newState >= 0 && newState <= 100) {
			return this._newState;
		}
	}

	get state() {
		return this._newState;
	}
}

class Magazine extends PrintEditionItem {
	constructor(type) {
		super(PrintEditionItem);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
		super(PrintEditionItem);
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
        this.state = state;
		this.type = type;
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
		super(Book);
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
        this.state = state;
		this.type = type;
		this.author = author;
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
		super(Book);
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
        this.state = state;
		this.type = type;
		this.author = author;
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
		super(Book);
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
        this.state = state;
		this.type = type;
		this.author = author;
	}
}

class Library {
	constructor(name = '', books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find((book) => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) {
			return null;
		} else {
			this.books = this.books.filter((item) => item.name !== bookName);
			return book;
		}
	}
}