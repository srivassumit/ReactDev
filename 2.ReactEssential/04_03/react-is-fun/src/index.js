import React from 'react';
import { render } from 'react-dom';

let bookList = [
  { title: 'The Sun Also Rises', author: 'Ernest Hemingway', pages: 260 },
  { title: 'White Teeth', author: 'Zadie Smith', pages: 480 },
  { title: "Cat's Cradle", author: 'Kurt Vonnegut', pages: 304 },
  { title: 'Hunger', author: 'Roxane Gay', pages: 320 }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

// To use state, it needs to be in a ES6 class instead of a function.

class Library extends React.Component {
  // (local) state can be added using the constructor method

  // constructor takes in props
  constructor(props) {
    // super() creates a new instance of this class
    super(props);
    // setting the state value.
    // state will be just an object with different keys and values (similar to props)
    this.state = { open: true };
    // This value can be referenced as `this.state` from our component
  }
  render() {
    // access the state
    console.log(this.state);
    // now these values can be used and changed
    const { books } = this.props;
    return (
      <div>
        {/* reading the state value */}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById('root'));
