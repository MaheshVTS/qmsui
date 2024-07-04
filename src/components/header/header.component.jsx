import React from 'react';
import withRouter from "../../common/with-router";
import PropTypes from 'prop-types';


import qualityManagementIcon from '../../assets/images/qualityManagementIcon.png';
import { MdAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";
import { RiFileShield2Line } from "react-icons/ri";


import authService  from 'services/auth.service';
import masterService from 'services/master.service'; // Import MasterService


import "./master.css";
import "./newfont.css";
import "./button.css";
import "components/header/navbarTop.css";
import "components/header/navbarBottom.css";

class Header extends React.Component {

    constructor(props) {
        super(props);

         this.state = {
            empName: '',
            designation: '',
            error: null
        };


 //binding methods ex- handleLogout to the class instance in a React class component is important because
 //In JavaScript, the value of this in a function depends on how the function is called.
 // When you use a class method as an event handler (or pass it around as a callback), you need to
 // make sure that this refers to the instance of the class.

//In React class components, methods are not bound to the class instance by default. 
//This means if you use a method (like handleLogout(e) {) as an event handler, 
//this inside that method might not refer to the class instance. Instead, it might be undefined or
// refer to some other context.


        this.handleLogout = this.handleLogout.bind(this);

    }

    /*******logout start ***********************/
    handleLogout(e) {
      e.preventDefault(); // Prevent default anchor tag behavior
    
      // Call AuthService.logout
      authService.logout();
    
      // Navigate to the login page and reload the page
      this.props.router.navigate("/login"); // Redirect to login page
      window.location.reload(); // Reload the page if needed
    }
   /*******logout end***********************/
  


  /************login details******************************* */
  async componentDidMount() {
    try {
        const { empName, designation } = await masterService.getLoginEmployeeDetails();
        this.setState({ empName, designation });
    } catch (error) {
        console.error('Error fetching employee details:', error);
        this.setState({ error: 'failed to fetch employee details' });
    }
  }

  /*************login details****************************** */




    render() {

      const { empName, designation, error } = this.state;

      return (
      <div className="horizontal-container" style={{position: "relative"}}>
               
        <nav className="navbar top-navbar col-lg-12 col-12 p-0">
         <div className="container">
          
           
            <div className="col-4 logo-col">
                <img style={{ width: "4%" }} src={qualityManagementIcon} alt="" />
                 &nbsp;&nbsp;
                 <a><span className="top-logo">QMS</span></a>&nbsp;&nbsp;
                 {/* <span style={{ fontSize: "13px" , color: "white", fontWeight : "400"}}> Lt. Mukesh Prasad Sahu (director) </span> */}
                 <span style={{ fontSize: "13px" , color: "white", fontWeight : "400"}}> 
                 {error ? (
                          <span> --api error --</span>
                          ) : (
                          `${empName} (${designation})`
                          )}
                 </span>
            
            </div>

       
          <div className="col-8 nav-col">
            <nav className="top-navigation">
              <ul className="top-menu ">
                <li><a href="/dashboard" className="nav-link active"><span  className="top-navbar-icons"><IoMdHome size={22}/></span></a></li>
                <li className="has-children">
                  <a><span  className="top-navbar-icons"><IoIosNotifications size={22}/></span></a>
                    <ul className="dropdown">
                      <li><a href="">Message 1</a></li>
                      <li><a href="">Message 2</a></li>
                    </ul>
                </li>

                 <li className="has-children">
                  <a ><span  className="top-navbar-icons"><MdAccountCircle size={22}/></span></a>
                  <ul className="dropdown">
                      <li><a href="">Change Password</a></li>
                      <li><a href="">User Manual</a></li>
                      <li><a href="">Work Flow</a></li>
                      <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                    </ul>
                </li>

              </ul>
            </nav>
         </div>


</div>


</nav>







        
<nav className="bottom-navbar" >
   <div className="container">

{/*   
       <div className="col-12 col-md-10 d-none d-xl-block"> */}
       <nav className="bottom-navigation position-relative text-right" role="navigation" style={{ marginRight: "0px" }}>


       <ul className="bottom-menu ">

             <li className="has-children">
              <a href=""><span><span className="bottom-navbar-icons"><RiAdminLine size={22}/></span>Admin<i className="menu-arrow"></i></span></a>
                <ul className="dropdown arrow-top">
                   <li><a href="/form-details">Form Details</a></li>
                   <li><a href="/role-list">Role List</a></li>
                   <li><a href="/user-manager">User Manager</a></li>
                   <li><a href="/audit-stamping">Audit Stamping</a></li>
                   <li><a href="/role-access">Role  Access</a></li>
                </ul>

            </li>


        <li className="has-children">
           <a><span><span className="bottom-navbar-icons"><RiGlobalLine size={22}/></span>Master<i className="menu-arrow"></i></span></a>
             <ul className="dropdown arrow-top">
              <li><a href="">Group</a></li>
              <li><a href="">Employee</a></li>
              <li><a href="">Designation</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Vendor</a></li>
              <li><a href="">Member</a></li>
              <li><a href="">Division</a></li>
           </ul>
        </li>


<li className="has-children">
  <a><span><span className="bottom-navbar-icons"><RiFileShield2Line size={22}/></span>QMS<i className="menu-arrow"></i></span></a>
  <ul className="dropdown arrow-top">
      <li><a href="">Quality Manual</a></li>
      <li><a href="">QSP</a></li>
      <li><a href="">DWP</a></li>
  </ul>

</li>



{/*
<li className="has-children">
<a href=""><span>Demo</span></a>
<ul className="dropdown arrow-top">
<li><a href="#">Menu One</a></li>
<li><a href="#">Menu Two</a></li>
<li><a href="#">Menu Three</a></li>
<li className="has-children">
<a href="#">Dropdown</a>
<ul className="dropdown">
<li><a href="#">Menu One</a></li>
<li><a href="#">Menu Two</a></li>
<li><a href="#">Menu Three</a></li>
<li><a href="#">Menu Four</a></li>
</ul>
</li> 
</ul>
</li>*/}




       </ul>
       </nav>
         </div>



   </nav>
   
  </div>
  
        );
    }
}
Header.propTypes = {
  router: PropTypes.shape({
      navigate: PropTypes.func.isRequired
  }).isRequired
};

//PropTypes ensures that the router prop passed to Header is correctly structured 
//and contains the navigate function.If Header receives a router prop that does not 
//match this structure (e.g., if navigate is missing or is not a function)React will show a warning in the development console.

export default withRouter(Header);




              
              