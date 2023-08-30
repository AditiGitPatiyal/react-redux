import './JobSeeker.css'
import {Link,Outlet ,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  logoutUser  } from '../GlobalStates/User/UserSlice'


const JobSeeker = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>  
          <div className="sidebar p-0">
            <div className='container'>
            <ul className="d-flex list-unstyled justify-content-end" width='100%'>
              <li className="active">
                <Link to="alljobs">All Jobs</Link>
              </li>
              <li>
                <Link to="appliedjobs">Login User Applied Job</Link>
              </li>
              <li>
                <Link to="jobscat=1">Category 1 Job</Link>
              </li>
              <li>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          </div>
          

          <div className='container'>
            <div className='row'>
              <div className="col-sm-12 main-content">
                <Outlet />          
              </div>
            </div>
          </div>   
      
    </>
  );
};
export default JobSeeker;
