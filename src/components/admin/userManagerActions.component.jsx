import React from "react";
import HeaderComponent from "../header/header.component";
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class UserManagerActions extends React.Component {


  render() {
    return (
      <div>
        {/* Fixed Header Component */}
        <HeaderComponent />

        {/* Main Content Below Header */}
        <div className="container-fluid page-body-wrapper" style={{ overflow: "hidden" }}>
          <div className="main-panel">
            <div className="content-wrapper">
           
           
            <Breadcrumb separator={'>'} className="master-breadcrumb">
               <Breadcrumb.Item  className="master-breadcrumb-item activeBreadcrumb" href="/user-manager" >
                    USER MANAGER
                </Breadcrumb.Item>
                 <Breadcrumb.Item className="master-breadcrumb-item linkBreadcrumb" >
                   USER MANAGER ADD
                </Breadcrumb.Item> 
             </Breadcrumb>
            <br></br>
           


              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                   
                    </div> {/* className="col-md-12" CLOSE */}
                  </div> {/* className="row" CLOSE */}
                </div> {/* className="card-body" CLOSE */}
              </div> {/* className="card" CLOSE */}
            </div> {/* className="content-wrapper" CLOSE */}
          </div> {/* className="main-panel" CLOSE */}
        </div> {/* className="container-fluid" CLOSE */}
      </div>
    );
  }
}

UserManagerActions.propTypes = {
  // Define your prop types here if needed
};

export default UserManagerActions;
