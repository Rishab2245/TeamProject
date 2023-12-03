import Todo from '../TaskSection/Todo';
import Home from './home/HomePage'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfterSignUp from './AfterSignUp/AfteSignUp';
import Dashboard from './dashboard/Dashboard';
import Forgot from './Forgot/Forgot';
import Otp from './Forgot/Otp';
import UserDetails from './UserDetailpage/UserDetailForm';
import AfterOtp from './AfterOtp/AfterOtp';
import Protect from './Protected/Protected';
//import ProgressReport from './progress/Progress';
import Payment from './Payment/Payment';
function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/aftersignup' element={<AfterSignUp />} />
        <Route path='/dashboard/*' element={<Protect Component={<Dashboard />} Other={<Login />}/>} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='confirmOtp' element={<Otp />} />
        <Route path='/userDetail' element={<UserDetails />} />
        <Route path='/afterotp' element={<AfterOtp />} />
        <Route path='/userDetails' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;