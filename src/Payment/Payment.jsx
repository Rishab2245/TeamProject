import HomeNav from "../home/HomeNav/HomeNav"
import './Payment.css'
const Payment=()=>{
    return(
        <>
        <div className="payment">
        <div className="nav">
            <HomeNav/>
        </div>
        <div className="paymentBody">
            <div className="paymentCard">
                <div className="PCcontent">
                <div className="PCtop">
                    <h1>Start your free 30-day trial of Teemify Premium</h1>
                <h3>No payment is due today. If you change your mind, you can switch to our new <br /> version at any time.</h3></div>
                <div className="PCB">
                    <div className="radio">
                        <input type="radio" className="bill" />
                        <div><h3>  Billed Annually</h3>
                        <h4>Rs. 2999/-</h4>
                        <p>Per user per Year </p></div>
                    </div>
                    
                        <div className="table">
                            <tr>
                            <td>1 Teemify annual license @ 2999 INR each</td>
                            <td>Rs. 2999 INR</td>
                        </tr>
                        <tr>
                            <td>G.S.T.</td>
                            <td>  Rs. 539.82 INR</td>
                            </tr>
                        <tr>
                            <td>Annual payment due Dec. 27th, 2023 </td>
                            <td>Rs. 3539 INR</td>
                        </tr>
                        </div>
                    
                </div>
                <div className="PCfoot">
                    <div>Due Today</div>
                    <div className="payTotal">Rs. 3539/- INR</div>
                </div>
                </div>
            </div>
        </div>
        <div className="wave">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1512 169" fill="none">
                        <path d="M401.354 32.818C271.066 36.6527 77.7019 117.361 -0.199241 170.008L1500.57 197.699C1523.29 132.061 1554.88 0.862285 1499.48 1.16896C1430.23 1.5523 1229.95 118.442 1013.42 119.641C796.898 120.839 564.216 28.0247 401.354 32.818Z" fill="url(#paint0_linear_542_43)" stroke="url(#paint1_linear_542_43)" strokeWidth="1.18632" />
                        <defs>
                            <linearGradient id="paint0_linear_542_43" x1="24.3324" y1="108.483" x2="1530.75" y2="100.144" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D9D9D9" />
                                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.69" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_542_43" x1="-0.199092" y1="170.009" x2="1493.76" y2="170.784" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#707070" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
        </div>
                </>
    )
}
export default Payment;