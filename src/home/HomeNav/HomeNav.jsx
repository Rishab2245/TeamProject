import Logo from '../../assets/Teemify_Logo_svg.svg'
import { Link } from 'react-router-dom'
import './HomeNav.css'
const HomeNav=()=>{
    return(
       <>
        <div className="HomeNav">
        <div className="logo">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                <rect x="0.370117" width="52" height="52" fill="white"/>
                <rect x="9.37012" y="10" width="13" height="33" fill="black"/>
                <rect x="25.3701" y="10" width="16" height="14" fill="black"/>
                </svg>
            </div>
            <div> <h3>Teemify</h3></div>
        </div>
        <div className="NavComp">
            <div><a href="#homePage">Home</a></div>
            <div><a href="">About Us</a></div>
            <div><a href="">Contact</a></div>
        </div>
        <div className="slbuttons">
            <Link to={"/login"}>
                <button className='login'>Log In</button>
            </Link>
            <Link to={"/signup"}>
                <button className='signup'>Sign Up</button>
            </Link>
        </div>
        </div>
    </>
    )
}
export default HomeNav