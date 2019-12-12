import React from 'react';
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import MenuContainer from "./components/MenuApp/MenuContainer";
import CardsContainer from "./components/CardsApp/CardsContainer";
import FilterContainer from "./components/Filter/filterContainer";




const App = () => {

  return (
      <Container>
          <div className='AppMenu'>
              <div className='AppMenuMenu'>
                  <MenuContainer />
              </div>
              <div className='AppMenuFilter'>
                  <FilterContainer />
              </div>
          </div>
          <div className='AppBody'>
              <div>
                  <CardsContainer />
                </div>
          </div>
      </Container>
  );
};


export default App;
