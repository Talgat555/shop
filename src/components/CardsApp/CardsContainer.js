import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as axios from "axios/index";
import CardsApp from "./CardsApp";
import {setBooks} from "../../redux/actions/books-actions";
import Card from "semantic-ui-react/dist/es/views/Card/Card";
import compose from "redux/src/compose";
import {orderBy} from "lodash/collection";
import {addBook} from "../../redux/actions/cards-actions";

const CardsContainer = React.memo (({setBooks, books, isReady, cardsItems, addBook }) => {

    console.log('card');

    useEffect(() => {
        axios.get('/books.json')
            .then(({ data }) => {
                setBooks(data)
            })
    }, []);

    let list = !isReady
        ? 'Загрузка...'
        : books.map(book =>(
                <CardsApp
                    key={book.id+book.title}
                    book={book}
                    addBook={addBook}
                    cardsItems={cardsItems}
                />
            ));

    return (
        <Card.Group itemsPerRow={6}>
            {list}
        </Card.Group>
    );
});


const sortBooks =(books, searchQuery, filterBy )=>{
    let filterBooks = books.filter(o =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0);
    switch (filterBy) {
        case 'price_high':
            return orderBy(filterBooks, 'price', 'desc');
        case 'price_low':
            return orderBy(filterBooks, 'price', 'asc');
        case 'author':
            return orderBy(filterBooks, 'author', 'asc');
        case 'all':
            return filterBooks;
        default:
            return books;
    }
};

const mapStateToProps = ({books, filter, cards}) =>({
    books: books.items && sortBooks(books.items, filter.searchQuery, filter.filterBy),
    isReady: books.isReady,
    cardsItems: cards.items
});

export default compose(connect(mapStateToProps,{setBooks, addBook})) (CardsContainer);

