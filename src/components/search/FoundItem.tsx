import React, {FunctionComponent} from "react";

export interface IFoundItemProps {
  name: string,
  username: string,
  picture: string
}

const FoundItem: FunctionComponent<IFoundItemProps> = ({ name, username, picture}) => {
    return (
      <div className="list__item" tabIndex={0}>
        <div className="list__picture">
          <img src={picture} alt={name}/>
        </div>
        <div className="list__inner">
          <div className="list__title">{name}</div>
          <div className="list__subtitle">@{username}</div>
        </div>
      </div>
    );
};

export default FoundItem;