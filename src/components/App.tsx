import React, {FunctionComponent, useState, useEffect, useCallback} from "react";
import SearchBar from "./search/SearchBar";
import SearchResults from "./search/SearchResults";
import FoundItem from "./search/FoundItem";
import Loading from "./loading/Loading";
import routes from "../utils/routes";
import _, {debounce} from "lodash";
import IUser from '../interfaces/IUser';

const App: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<IUser[]>([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const selectHandler = (id: number) => () => {
    const user = _.find(results,{ id });
    user && setQuery(user.name);
  };

  const keyPressHandler = (id: number) => ( { code }: React.KeyboardEvent<HTMLInputElement>): void => {
    const activeNode = document.activeElement as HTMLDivElement;
    const {
      previousElementSibling: prevNode,
      nextElementSibling: nextNode
    } = activeNode;

    if (code === 'ArrowDown' && nextNode) {
      activeNode.blur();
      (nextNode as HTMLDivElement).focus();
    } else if (code === 'ArrowUp' && prevNode) {
      activeNode.blur();
      (prevNode as HTMLDivElement).focus();
    } else if (code === 'Enter') {
      selectHandler(id)();
    }
  };

  const fetchItems = useCallback(
    debounce(async (query) => {
      const [usersResponse, photosResponse] = await Promise.all([
        fetch(routes.users()),
        fetch(routes.photos())
      ]);

      let users = await usersResponse.json();
      let images = await photosResponse.json();

      const searchQuery = new RegExp(query, 'i');

      users = _(users)
        .filter(({ name, username }) => {
          return searchQuery.test(name) || searchQuery.test(username);
        })
        .map(({ id, ...rest }) => {
          const pic = _(images).find({ id });
          return {
            id,
            picture: pic.thumbnailUrl,
            ...rest
          };
        })
        .valueOf();

      setResults(users);
      setLoading(false);
    }, 500),
    []
  );

  useEffect(() => {
    const searchQuery = query.trim();
    if (searchQuery.length) {
      setLoading(true);
      fetchItems(searchQuery);
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
        isLoading ? <Loading/> : (
          query.length > 0 && <SearchResults>
            {
              results.map((el: IUser) => {
                return <FoundItem
                  key={el.id}
                  name={el.name}
                  username={el.username}
                  picture={el.picture}
                  inputHandler={keyPressHandler(el.id)}
                  clickHandler={selectHandler(el.id)}
                />
              })
            }
          </SearchResults>
        )
      }
    </div>
  );
};

export default App;
