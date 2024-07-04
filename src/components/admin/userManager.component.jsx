import React from "react";
import HeaderComponent from "../header/header.component";
import PropTypes from 'prop-types';
import $ from "jquery";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class UserManager extends React.Component {

  componentDidMount() {
    // Initialize DataTable once the component is mounted
    $(document).ready(function () {
      $('#commonTable').DataTable(); // Ensure you're initializing the correct table ID
    });
  }

  componentWillUnmount() {
    // Cleanup DataTable instance to avoid memory leaks
    if ($.fn.DataTable.isDataTable('#commonTable')) {
      $('#commonTable').DataTable().destroy();
    }
  }

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
              <Breadcrumb.Item  className="master-breadcrumb-item activeBreadcrumb" href="/" >
                    USER MANAGER
                </Breadcrumb.Item>
             </Breadcrumb>
            <br></br>
           


              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table id="commonTable" className="table table-striped" style={{ width: "100%" }}>
                          <thead>
                            <tr>
                              <th>SN.</th>
                              <th>User Name</th>
                              <th>Employee</th>
                              <th>Role Name</th>
                              <th>Division</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1.</td>
                              <td>1005</td>
                              <td>Likitha</td>
                              <td>Admin</td>
                              <td>DV1</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div> {/* className="table-responsive" CLOSE */}
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

UserManager.propTypes = {
  // Define your prop types here if needed
};

export default UserManager;
