import React from 'react'
import MenuApp from "./MenuApp";
import compose from "redux/src/compose";
import { connect } from 'react-redux';
import {removeBook} from "../../redux/actions/cards-actions";
import {uniqBy} from "lodash/array";

const MenuContainer =({totalPrice, cartBooks, removeBook})=> {

    const [stateMenu, setStateMenu] = React.useState({activeItem: 'shop'});

    const handleItemClick = (e, { name }) => setStateMenu({ activeItem: name });

    return (
        <div>
            <MenuApp
                activeItem={stateMenu.activeItem}
                handleItemClick={handleItemClick}
                totalPrice={totalPrice}
                cartBooks={cartBooks}
                removeBook={removeBook}
            />
        </div>
    )
};

const mapStateToProps=({cards}) => ({
    totalPrice: cards.items.reduce((total, book)=> total+book.price, 0),
    cartBooks: uniqBy(cards.items, i=> i.id)
});


export default compose(connect(mapStateToProps, {removeBook}))(MenuContainer);