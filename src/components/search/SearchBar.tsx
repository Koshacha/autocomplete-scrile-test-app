import React, {ChangeEventHandler, FunctionComponent} from "react";
import './search.scss';

interface SearchBarProps {
  query: string,
  inputHandler: ChangeEventHandler
}

const SearchBar: FunctionComponent<SearchBarProps> = ({query= '', inputHandler}) => {
  return (
    <div className="search">
      <button className="search__button">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 11H11.71L11.43 10.73C12.63 9.33 13.25 7.42 12.91 5.39C12.44 2.61 10.12 0.39 7.32002 0.05C3.09002 -0.47 -0.469985 3.09 0.0500152 7.32C0.390015 10.12 2.61002 12.44 5.39002 12.91C7.42002 13.25 9.33002 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.50002 11C4.01002 11 2.00002 8.99 2.00002 6.5C2.00002 4.01 4.01002 2 6.50002 2C8.99002 2 11 4.01 11 6.5C11 8.99 8.99002 11 6.50002 11Z" fill="#656667"/>
        </svg>
      </button>
      <input className="search__input" type="text" placeholder="Search" value={query} onChange={inputHandler} />
    </div>
  )
};

export default SearchBar;