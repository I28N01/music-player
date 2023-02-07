import React from 'react';

function Account(props) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{props.login}</p>
            <div className="sidebar__avatar"></div>
        </div>
    );
  }

  export default Account;