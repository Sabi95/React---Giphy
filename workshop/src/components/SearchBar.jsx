import React from 'react';

const SearchBar = (props) => {
  const { changeGifList } = props;
  const handleChange = (event) => {
    changeGifList(event.currentTarget.value);
  };

  return (
    <input className="form-search form-control" type="text" placeholder="Search for a gif" onChange={handleChange} />
  );
};

export default SearchBar;
