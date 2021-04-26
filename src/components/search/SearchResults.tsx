import {FunctionComponent} from "react";
import './SearchResults.scss';

const SearchResults: FunctionComponent = ({children }) => {
    return (
      <div className="list">
        {children}
      </div>
    );
};

export default SearchResults;
