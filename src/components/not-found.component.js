import React from 'react';
import {Link} from 'react-router-dom';
const NotFoundComponent = () => (
    <div className="container">
        <h3>404:</h3> <Link to="/">Go To Expanse Dashboard Page</Link>
    </div>
);

export default NotFoundComponent;