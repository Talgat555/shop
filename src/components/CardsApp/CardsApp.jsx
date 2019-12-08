import React from 'react';
import Card from "semantic-ui-react/dist/es/views/Card/Card";
import Image from "semantic-ui-react/dist/es/elements/Image/Image";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";


const CardsApp = ({book, addBook, cardsItems }) => {

    const addBookToCart = ()=>{
        addBook(book)
    };

    const {id, title, author, image, price} = book;

    let addedCount = cardsItems.reduce((count, book)=> count+(book.id===id ? 1 : 0), 0);

    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub' />
                    {price}
                </a>
            </Card.Content>
            <Button
                onClick={addBookToCart}
            >
                {`Добавить в корзину (${addedCount})`}
            </Button>
        </Card>
    );
};

export default CardsApp;
