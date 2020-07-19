import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onChangeSearch }) => {
  return (
    <section className={styles.searchboxSection}>
      <input
        type="text"
        placeholder="Search by brands"
        className="form-control form-control-lg form-control-borderless"
        onChange={onChangeSearch}
      />

      {/* <button
        value="search"
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button> */}
    </section>
  );
};

export default SearchBar;
