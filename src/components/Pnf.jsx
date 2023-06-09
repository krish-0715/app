import React from "react";
import { NavLink } from "react-router-dom";

function Pnf(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">Requested page  Not Found</h3>
                    <h5 className="display-5 text-danger">404 error</h5>
                    <navLink to={ '/' } className="btn btn-outline-success">Return Home</navLink>
                </div>
            </div>
        </div>
    )
}

export default Pnf