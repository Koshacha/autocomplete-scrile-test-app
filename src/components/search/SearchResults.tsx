import {FunctionComponent} from "react";
import './list.scss';

const SearchResults: FunctionComponent = ({children }) => {
    return (
      <div className="list">
        {children}
      </div>
    );
};

export default SearchResults;