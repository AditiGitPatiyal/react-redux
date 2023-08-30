import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import WhatWeDo from './Pages/What_we_do';
import BrowseJobs from './Pages/Browse_jobs';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import JobCreator from './JobCreator/JobCreator';
import JobSeeker from './JobSeeker/JobSeeker';
import Allcatjobs from './JobSeeker/Allcatjobs';
import AppliedJobs from './JobSeeker/AppliedJobs';
import CatOne from './Pages/Catone';
import {
  createBrowserRouter, 
  Outlet
  } from 'react-router-dom';
import JobCreate from './JobCreator/JobCreate';
import Alljobs from './JobCreator/Alljobs';
import Footer from './components/Footer';
import Updatejob from './JobCreator/Updatejob';

function App() {
  return (
    <>     
      <Header />
      <div className='main'>
        <Outlet />     
      </div>
      <Footer />    
    </>
    
  );
}
export const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'browse-jobs',
        element:<BrowseJobs />
      },
      {
        path:'what-we-do',
        element:<WhatWeDo />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'signup',
        element:<Signup />
      },
      {
        path:'job-seeker',
        element:<JobSeeker />,
        children:[
          {
            path:'alljobs',
            element:<Allcatjobs />
          },{
            path:'appliedjobs',
            element:<AppliedJobs />
          },{
            path:'jobscat=1',
            element:<CatOne />
          }
        ]
      },
      {
        path:'job-creator',
        element:<JobCreator />,
        children:[
          {
          path:'create-job',
          element:<JobCreate />
          },
          {
            path:'all-jobs',
            element:<Alljobs />,
          },
          {
            path:'update-job',
            element:<Updatejob />
          }
        ]
      }
    ]
  }
])
export default App;
