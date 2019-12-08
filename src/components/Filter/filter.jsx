import React from 'react';
import { Menu } from 'semantic-ui-react';
import Input from "semantic-ui-react/dist/es/elements/Input/Input";

 const Filter = ({ activeItem, handleItemClick, onSearch }) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={activeItem === 'all'}
                onClick={handleItemClick}
            >
                Все
            </Menu.Item>
            {/*<Menu.Item*/}
                {/*name='popular'*/}
                {/*active={activeItem === 'popular'}*/}
                {/*onClick={handleItemClick}*/}
            {/*>*/}
                {/*Популярные*/}
            {/*</Menu.Item>*/}
            <Menu.Item
                name='price_high'
                active={activeItem === 'price_high'}
                onClick={handleItemClick}
            >
                Цена (дорогие)
            </Menu.Item>
            <Menu.Item
                name='price_low'
                active={activeItem === 'price_low'}
                onClick={handleItemClick}
            >
                Цена (дешевые)
            </Menu.Item>
            <Menu.Item
                name='author'
                active={activeItem === 'author'}
                onClick={handleItemClick} >
                Автор
            </Menu.Item>
            <Menu.Item>
                <Input
                placeholder='Введите запрос...'
                icon='search'
                onChange={onSearch}
                />
            </Menu.Item>
        </Menu>
    )
};

export default Filter;