import React from 'react'
import './ProgressR.css'
 import CalendarComponent from './Calendar'
 import Charts from './Charts'
const ProgressReport=()=>{
   
        const api = 'https://teammanagement.onrender.com/api/board/calendar/65605e42ec5f2bea2e849f82'; 
    return(
<>

<Charts/>
<CalendarComponent api={api}/>
</>
    )
}
export default ProgressReport
