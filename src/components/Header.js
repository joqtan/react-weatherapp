import React from "react";

const Header = props => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper light-blue darken-2">
          <a className="brand-logo">{props.tittle}</a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
