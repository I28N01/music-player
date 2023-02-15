import React from 'react';
import AccountCSS from './Account.module.scss'

function Account(props) {
    return (
        <div className={AccountCSS.account__personal}>
            <p className={AccountCSS.account__personal_name}>{props.login}</p>
            <div className={AccountCSS.account__avatar}></div>
        </div>
    );
  }

  export default Account;