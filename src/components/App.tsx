import React, {FunctionComponent, useState, useEffect, useCallback} from "react";
import SearchBar from "./search/SearchBar";
import SearchResults from "./search/SearchResults";
import FoundItem from "./search/FoundItem";
import Loading from "./loading/Loading";
import routes from "../utils/routes";
import _ from "lodash";

interface IUser {
  id: number,
  name: string,
  username: string,
  picture: string
}

const App: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const fetchItems = useCallback(
    _.debounce(async (query) => {
      const searchQuery = query.toLocaleLowerCase();
      const [usersResponse, photosResponse] = await Promise.all([fetch(routes.users()), fetch(routes.photos())]);
      if (usersResponse.ok && photosResponse.ok) {
        let users = await usersResponse.json();
        let images = await photosResponse.json();

        users = await _(users)
          .filter(({ name, username }) => {
            return _.includes(name.toLocaleLowerCase(), searchQuery) || _.includes(username.toLocaleLowerCase(), searchQuery);
          })
          .map(({ id, ...rest}) => {
            const picture = _(images)
              .find({ id })
              .thumbnailUrl;
            return {id, picture, ...rest};
          })
          .valueOf();
        setResults(users);
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    if (query.length) {
      setLoading(true);
      fetchItems(query);
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="search-app">
      <SearchBar
        query={query}
        inputHandler={onChangeHandler} />
      {
        isLoading ? (
          <div className="list__loading">
            <Loading/>
          </div>
        ) : (
          query.length > 0 && <SearchResults>
            {
              results.map((el: IUser, index) => {
                return <FoundItem key={el.id} name={el.name} username={el.username} picture={el.picture}/>
              })
            }
          </SearchResults>
        )
      }
    </div>
  )
};

export default App;