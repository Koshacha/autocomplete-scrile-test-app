import React, {FunctionComponent} from "react";
import './loading.scss';

const Loading: FunctionComponent = () => {
  return (
    <div className="list__loading">
      <div className="loading">
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 74C18.1178 74 2 57.8822 2 38C2 18.1178 18.1178 2 38 2C57.8822 2 74 18.1178 74 38C74 45.4006 71.7669 52.2796 67.9378 58" stroke="url(#paint0_linear)" strokeWidth="3"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="38" x2="74" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6647">
                <animate values="#FF6647; #D6008F" dur="1s" repeatCount="indefinite"></animate>
              </stop>
              <stop offset="100%" stopColor="#D6008F">
                <animate values="#D6008F; #FF6647" dur="1s" repeatCount="indefinite"></animate>
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
};

export default Loading;
