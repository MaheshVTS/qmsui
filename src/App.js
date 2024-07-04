// This is App.js -  This component handles routing and authentication.
// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route} from "react-router-dom";

import 'components/header/newfont.css';

//import Bootstrap and MDB Bootstrap Components
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


//datatable
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net";


import  AuthService  from './services/auth.service';
import LoginComponent from 'components/login/login.component.jsx';
import DashboardComponent from 'components/dashboard/dashboard.component.jsx';
import FormDetailsComponent from 'components/admin/formDetails.component.jsx';
import FormRoleComponent from 'components/admin/formRole.component.jsx';
import UserManagerComponent from 'components/admin/userManager.component.jsx';
import AuditStampingComponent from 'components/admin/auditStamping.component.jsx';
import RoleAccessComponent from 'components/admin/roleAccess.component.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
      console.log("user token"+user);
    if (user) {

      this.setState({ currentUser: user });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({ currentUser: undefined });
  }

  

  render() {


    return (
      <div>

{/* I am using React Router v6, which requires changes in how routes are defined compared to v5.
The <Route> components in v6 expect an (element prop) with JSX syntax instead of (component). */}

        <Routes>
           <Route path="/" element={<LoginComponent />} />
           <Route path="/login" element={<LoginComponent />} />
           <Route path="/dashboard" element={<DashboardComponent />} />
           <Route path="/form-details" element={<FormDetailsComponent />} />
           <Route path="/role-list" element={<FormRoleComponent />} />
           <Route path="/user-manager" element={<UserManagerComponent />} />
           <Route path="/audit-stamping" element={<AuditStampingComponent />} />
           <Route path="/role-access" element={<RoleAccessComponent />} />

        </Routes>
  
      </div>
    );
  }
}

export default App;
