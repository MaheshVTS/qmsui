import React from "react";
import HeaderComponent from "../header/header.component";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
      {/* Fixed Header Component */}
      <HeaderComponent />

      {/* Main Content Below Header */}
       {/* Main Content Below Header */}
       <div className="container-fluid page-body-wrapper" style={{ overflow: "hidden" }}>
                    <div className="main-panel">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-center mb-4">
                                    <span style={{ color: "black" }}>DASHBOARD</span>
                                </h2>
                                {/* Add more content here */}
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    );
  }
}

export default Dashboard;
