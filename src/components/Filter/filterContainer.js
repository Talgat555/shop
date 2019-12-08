import React from 'react';
import { connect } from 'react-redux';
import Filter from "./filter";
import {setFilter, setSearchQuery} from "../../redux/actions/filter-actions";
import compose from "redux/src/compose";





const FilterContainer =({ setFilter, filterBy, setSearchQuery })=> {

    const handleItemClick = (e, { name }) => {
        setFilter(name)
    };

    const onSearch = (e, {value}) =>{
        setSearchQuery(value)
    };

    return(
        <div>
            <Filter
                activeItem={filterBy}
                handleItemClick={handleItemClick}
                onSearch={onSearch}
            />
        </div>
    )
};

const mapStateToProps =({ filter }) => ({
    filterBy: filter.filterBy,
    searchQuery: filter.searchQuery
});



export default compose(connect (mapStateToProps, {setFilter, setSearchQuery}))(FilterContainer);