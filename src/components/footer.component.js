import React from 'react';

const FooterComponent = (props) => (
  <div className="footer">
    <div className="container">
       <h4 className="header__subtitle">{props.message}</h4>
    </div>
  </div>
);

FooterComponent.defaultProps = {
  message: 'Udemy React Course Project @ Part 2'
}


export default FooterComponent;
