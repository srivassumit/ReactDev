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

class Library extends React.Component {
  // Another (faster) way to set state is to define state here and remove the constructor altogether.
  // Like this:
  // state = { open: false };
  // and then we can bind `this` to the custom method by using an arrow function.
  // Like this:
  // toggleOpenClosed = () => { ... }
  // This will bind `this` variable to the toggleOpenClose function.

  constructor(props) {
    super(props);
    this.state = { open: true };
    // whenever we are using a constructor method, we need to bind `this`:
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    // above line will make `this` accesible to the toggleOpenClosed custom method.
  }
  // method to change the state
  toggleOpenClosed() {
    // takes in an object which resets the state to the new object.
    this.setState({ open: !this.state.open });
    // setState is Async, so we can use a callback function inside setState if we are relying on the previous state to set the current state.
    // Eg: changing the state based on previous state using callback:
    // this.setState(prevState => ({ open: !prevState.open }));
    // Now, the set state will work as expected no matter how long it takes for each `setState` operation to complete
    // since the next call will always be dependent on the previous callback.
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {/* Calling the custom method which sets the state */}
        <button onClick={this.toggleOpenClosed}>Change</button>
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
