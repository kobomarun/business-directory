import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return(
        <div className="row">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</Link>
                <Link className="nav-link" data-toggle="pill" to="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Create Directory</Link>
                <Link className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">View All Directories</Link>
                <Link className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Logout</Link>
            </div>
        </div>
    );
}

export default Nav;