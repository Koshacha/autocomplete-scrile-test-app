import React, {FunctionComponent, KeyboardEventHandler, MouseEventHandler} from "react";

export interface IFoundItemProps {
  name: string,
  username: string,
  picture: string,
  inputHandler: KeyboardEventHandler,
  clickHandler: MouseEventHandler
}

const FoundItem: FunctionComponent<IFoundItemProps> = ({
  name,
  username,
  picture,
  inputHandler,
  clickHandler}) => {
    return (
      <div
        className="list__item"
        data-testid="item"
        tabIndex={0}
        onKeyDown={inputHandler}
        onClick={clickHandler}
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
