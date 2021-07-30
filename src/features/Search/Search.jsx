import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchTerm,
  setSearchTerm,
  clearSearchTerm,
  loadFilteredPosts,
} from '../../store/postFeedSlice';

import { FaSearch, FaTimesCircle } from 'react-icons/fa';

export const Search = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = e => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  };

  const handleClearInput = () => {
    dispatch(clearSearchTerm());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm.trim('')) {
      dispatch(loadFilteredPosts(searchTerm));
    }
  };

  return (
    <form id="search" role="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="search"
          id="search-input"
          name="search"
          value={searchTerm}
          onChange={onSearchTermChange}
          spellCheck="false"
          autoComplete="false"
          placeholder="Search"
        />
        {searchTerm.length > 0 && (
          <button
            type="button"
            onClick={handleClearInput}
            aria-label="Clear Input."
            data-testid="search-clear-button"
          >
            <FaTimesCircle />
          </button>
        )}
      </div>
      <button onClick={handleSubmit}>
        <FaSearch /> Search
      </button>
    </form>
  );
};

export default Search;
