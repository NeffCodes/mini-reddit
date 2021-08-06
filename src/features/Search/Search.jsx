import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchTerm,
  setSearchTerm,
  clearSearchTerm,
  loadFilteredPosts,
  loadHotPosts,
  selectCurrentSubreddit,
} from '../../store/postFeedSlice';

import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import styles from './Search.module.css';

export const Search = () => {
  const previousSubreddit = useSelector(selectCurrentSubreddit);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = e => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  };

  const handleClearInput = () => {
    dispatch(clearSearchTerm());
    dispatch(loadHotPosts(previousSubreddit));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm.trim('')) {
      dispatch(loadFilteredPosts(searchTerm));
    }
  };

  return (
    <form
      id="search"
      role="search"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.searchContainer}>
        <input
          type="search"
          id="search-input"
          name="search"
          value={searchTerm}
          onChange={onSearchTermChange}
          spellCheck="false"
          autoComplete="false"
          placeholder="e.g. puppies"
          className={styles.input}
        />
        {searchTerm.length > 0 && (
          <button
            type="button"
            onClick={handleClearInput}
            aria-label="Clear Input."
            className={styles.clear}
          >
            <FaTimesCircle className={styles.clearIcon} />
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        aria-label="Search Input."
        className={styles.submit}
      >
        <FaSearch className={styles.submitIcon} />
        Search
      </button>
    </form>
  );
};

export default Search;
