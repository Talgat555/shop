import React from 'react';
import List from "semantic-ui-react/dist/es/elements/List/List";
import Image from "semantic-ui-react/dist/es/elements/Image/Image";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";


const CartPopover =({cartBook, removeBook})=>{

    const{id, title, image} = cartBook;

    const removeBookFromCart=()=>{
        removeBook(id)
    };

  return(
      <List selection divided verticalAlign='middle'>
          <List.Item>
              <List.Content floated='right'>
                  <Button
                      color='red'
                      onClick={removeBookFromCart}
                  >
                      Удалить
                  </Button>
              </List.Content>
              <Image avatar src={image} />
              <List.Content>{title}</List.Content>
          </List.Item>
      </List>
  )
};

export default CartPopover;