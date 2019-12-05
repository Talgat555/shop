import React from 'react';
import { connect } from 'react-redux';
import {setBooks} from "./actions/books-actions";




const App =(props) => {




    const setNewBooks =()=>{

        const list = {
            id:1,
            title: 'Learning  React'
        };

        props.setBooks(list)
    };

  return (
    <div>
        <button onClick={setNewBooks}>Set New Book</button>
    </div>
  );
};

const mapStateToProps = state =>({
    ...state
});

const mapDispatchToProps = dispatch =>({
    setBooks: books => dispatch(setBooks(books))
});

export default connect (mapStateToProps, mapDispatchToProps)(App);
