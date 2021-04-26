import SearchResults from "./SearchResults";
import FoundItem from "./FoundItem";
import { render } from "@testing-library/react";
import { uniqueId } from "lodash";
import React from "react";

interface IUser {
  id: number,
  name: string,
  username: string,
  picture: string
}

describe('SearchResults: ', () => {
  let testUsers: IUser[] = [{
      id: parseInt(uniqueId()),
      name: 'Ilya Mazunin',
      username: 'Koshacha',
      picture: 'https://picsum.photos/200'
    }, {
      id: parseInt(uniqueId()),
      name: 'Ivan Ivanov',
      username: 'Ivan',
      picture: 'https://picsum.photos/200'
    }, {
      id: parseInt(uniqueId()),
      name: 'Sponge Bob',
      username: 'burgerlover',
      picture: 'https://picsum.photos/200'
    }, {
      id: parseInt(uniqueId()),
      name: 'Another User',
      username: 'userloser',
      picture: 'https://picsum.photos/200'
    }];

  test('should render correctly', () => {
    const { getAllByTestId } = render(<SearchResults>
      {
        testUsers.map((el: IUser) => {
          return <FoundItem
            key={el.id}
            name={el.name}
            username={el.username}
            picture={el.picture}
            inputHandler={() => {}}
          />
        })
      }
    </SearchResults>);

    expect(getAllByTestId('item').length).toBe(testUsers.length);

  });
});
