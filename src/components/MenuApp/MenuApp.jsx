import React from 'react'
import { Menu } from 'semantic-ui-react'
import Popup from "semantic-ui-react/dist/es/modules/Popup/Popup";
import CartPopover from "./CartPopover/CartPopover";

const MenuApp =(props)=> {

    const { handleItemClick, activeItem, totalPrice, cartBooks, removeBook } = props;

    let totalBooks = cartBooks.length;

    return (
        <Menu>
            <Menu.Item
                name='shop'
                active={activeItem === 'shop'}
                onClick={handleItemClick}
            >
                Магазин книг
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='receipt'
                    active={activeItem === 'receipt'}
                    onClick={handleItemClick}
                >
                    Итого:&nbsp;<b>{totalPrice}</b>&nbsp;руб
                </Menu.Item>
                <Popup
                    on='onClick'
                    hideOnScroll
                    trigger={
                        <Menu.Item
                            name='shopping_cart'
                            active={activeItem === 'shopping_cart'}
                            onClick={handleItemClick}
                        >
                            Корзина &nbsp;(<b>{totalBooks}</b>)
                        </Menu.Item>
                    }
                    content={
                        cartBooks.length
                            ? cartBooks.map(
                                cartBook => <CartPopover removeBook={removeBook}
                                cartBook={cartBook}
                                />)
                            : 'Добавте книги'
                    }
                />
            </Menu.Menu>
        </Menu>
    )
};


export default MenuApp;