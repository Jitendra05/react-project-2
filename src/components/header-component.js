import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth-action';

export const HeaderPage = ({startLogout}) => (
      <div className="header">
        <div className="container">
        <div className="header__content">
            <Link className="header__title" to="/dashboard" >
              <h1>Expensify</h1>
            </Link>
            <button 
            onClick={startLogout}
              className="button button--link" 
            >
            Logout
            </button>
        </div>
           
        </div>
      </div>
);

const mapDispatchToProps =  (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(HeaderPage);
