import React from 'react'
import './ProgressR.css'
 import CalendarComponent from './Calendar'
 import Charts from './Charts'
const ProgressReport=()=>{
   
        const api = 'YOUR_API_ENDPOINT'; 
    return(
<>

<Charts/>
<CalendarComponent api={api}/>
</>
    )
}
export default ProgressReport
