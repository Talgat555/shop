import React from 'react';
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import MenuContainer from "./components/MenuApp/MenuContainer";
import CardsContainer from "./components/CardsApp/CardsContainer";
import FilterContainer from "./components/Filter/filterContainer";




const App = () => {

  return (
      <div>
          <Container>
              <div className='AppMenu'>
                  <MenuContainer />
              </div>
              <div>
                  <FilterContainer />
              </div>
              <div className='AppBody'>
                  <CardsContainer />
              </div>
          </Container>
      </div>
  );
};


export default App;
