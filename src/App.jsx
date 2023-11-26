
import Todo from './Components/Todo'
import Home from './home/HomePage'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AfterSignUp from './AfterSignUp/AfteSignUp';
import Dashboard from './dashboard/Dashboard';
import Forgot from './Forgot/Forgot';
import Otp from './Forgot/Otp';
import UserDetails from './UserDetailpage/UserDetailForm';
function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aftersignup' element={<AfterSignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='confirmOtp' element={<Otp />} />
        <Route path='/userDetail' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  )

  )  
}
export default App
