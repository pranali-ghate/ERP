import { Route, Routes } from 'react-router';
import './App.css';

// HOME PAGES
import Home from './Components/HomePages/Home';
import Login from './Components/HomePages/Login';
import Signin from './Components/HomePages/Signin';

// LOGIN PAGES
import MainPage from './Components/LoginPages/MainPage';
import ERegistration from './Components/LoginPages/ERegistration';
import EList from './Components/LoginPages/EList';
import EResignation from './Components/LoginPages/EResignation';
import Setting from './Components/LoginPages/Setting';
import EDetails from './Components/LoginPages/EDetails';
import Profile from './Components/LoginPages/Profile';
import LoginHome from './Components/LoginPages/LoginHome';
import Project from './Components/LoginPages/Project';
import Task from './Components/LoginPages/Task';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Login />} />
        <Route path='/signin' element={<Signin />} />

        {/* Login Page */}
        <Route path='/mainpage' element={<MainPage />}>
          <Route index element={<LoginHome/>}/>
          <Route path='loginhome' element={<LoginHome/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='task' element={<Task/>}/>
          <Route path='eregistration' element={<ERegistration />} />
          <Route path='elist' element={<EList />} />
          <Route path='eresignation' element={<EResignation />} />
          <Route path='profile' element={<Profile />}/>
          <Route path='setting' element={<Setting />} />
          <Route path='elist/edetails' element={<EDetails />} />
          <Route path='elist/eregistration' element={<ERegistration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
