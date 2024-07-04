import axios from 'axios';
import authService from './auth.service'; // Import AuthService to get the current user
import config from 'environment/config'; // Import the central configuration

const API_URL = config.API_URL;

class MasterService {
  // Method to fetch employee details using the logged-in user's information
  async getLoginEmployeeDetails() {
    try {
        const currentUser = authService.getCurrentUser();
      
        // Extract username directly from currentUser
        const username = currentUser?.username;
  
        console.log('Current User:', currentUser); // Debugging: Print current user
        console.log('Username:', username); // Debugging: Print username

        if (!username) {
            throw new Error('No user is currently logged in');
        }
      // Call the backend service to get employee details
      const response = await axios.post(`${API_URL}login/${currentUser.username}`);
      const employeeDetails = response.data;

      console.log('Employee Details Response:', employeeDetails); // Debugging: Print employee details response

      // Accessing employee details using index points (e.g., empname, designation, empid)
      // Adjust indices based on your actual response structure
      const empName = employeeDetails[0]; // Assuming employeeDetails[0] is empName
      const designation = employeeDetails[1]; // Assuming employeeDetails[1] is designation
      const empId = employeeDetails[2]; // Assuming employeeDetails[2] is empId

      console.log('Employee Name:', empName); // Debugging: Print employee name
      console.log('Designation:', designation); // Debugging: Print designation
      console.log('Employee ID:', empId); // Debugging: Print employee ID

      return { empName, designation, empId };
    } catch (error) {
      console.error('Error fetching employee details:', error);
      throw error;
    }
  }
}

// Create an instance of MasterService and export it
const masterService = new MasterService();
export default masterService;
