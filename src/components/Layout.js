import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css";
// import "./Menu.css"

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-12 px-4">
                    <Menu />
                    <Routes />
                </div>
            </div>
        </div>
    );
}

export default Layout;
