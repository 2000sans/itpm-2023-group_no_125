import './App.css';
import NoPage from './components/404';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import GetUser from './components/GetUser';
import GetDonor from './components/GetDonor';
import GetAdmin from './components/GetAdmin';
import DeleteUser from './components/DeleteUser';
import ViewAllUsers from './components/ViewAllUsers';
import SearchUser from './components/SearchUser';
import SearchUserResults from './components/SearchUserResults';
import SelectUser from './components/SelectUser';
import AddDonor from './components/AddDonor';
import AddAdmin from './components/AddAdmin';
import DonorUpdate from './components/DonorUpdate';
import AdminUpdate from './components/AdminUpdate';
import AdminDelete from './components/AdminDelete';
import DonorDelete from './components/DonorDelete';
import ViewAllDonors from './components/ViewAllDonors';
import ViewAllAdmins from './components/ViewAllAdmins';
import Login from './components/Login';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/users/add" element={<AddUser />} />
       
        
          <Route path="/users/update/:id" element={<UpdateUser />} />
       
        
          <Route path="/users/get/:id" element={<GetUser />} />
       
        
          <Route path="/donor/get/:id" element={<GetDonor />} />
       
        
          <Route path="/donor/delete/:id" element={<DonorDelete />} />
       
        
          <Route path="/admin/update/:id" element={<AdminUpdate />} />


          <Route path="/admin/delete/:id" element={<AdminDelete />} />
       

          <Route path="/admin/get/:id" element={<GetAdmin />} />


          <Route path="/users/delete/:id" element={<DeleteUser />} />
       
        
          <Route path="/users/" element={<ViewAllUsers />} />
       
        
          <Route path="/users/search/" element={<SearchUser />} />
       
        
          <Route path="/users/search/:searchby/:keyword" element={<SearchUserResults />} />
       
        
          <Route path="/users/SelectUser" element={<SelectUser />} />
       
        
          <Route path="/users/AddDonor" element={<AddDonor />} />
       
        
          <Route path="/users/AddAdmin" element={<AddAdmin />} />
       
        
          <Route path="/donor/update/:id" element={<DonorUpdate />} />
       
        
          <Route path="/donor/" element={< ViewAllDonors />} />
       
        
          <Route path="/admin/" element={< ViewAllAdmins />} />
       
        
          <Route path="/" element={< Login />} />
       
        
          <Route path="/home" element={< Home />} />
       
        
          <Route path="*" element={<NoPage />} />
       </Routes>

      </div>
    </Router>

  );
}

export default App;
