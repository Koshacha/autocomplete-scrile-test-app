import React, {FunctionComponent, KeyboardEventHandler} from "react";

export interface IFoundItemProps {
  name: string,
  username: string,
  picture: string,
  inputHandler: KeyboardEventHandler
}

const FoundItem: FunctionComponent<IFoundItemProps> = ({
  name,
  username,
  picture,
  inputHandler }) => {
    return (
      <div
        className="list__item"
        data-testid="item"
        tabIndex={0}
        onKeyDown={inputHandler}
      >
        <div className="list__picture">
          <img src={picture} alt={name}/>
        </div>
        <div className="list__inner">
          <div className="list__title">{name}</div>
          <div className="list__subtitle">@{username.toLowerCase()}</div>
        </div>
      </div>
    );
};

export default FoundItem;
