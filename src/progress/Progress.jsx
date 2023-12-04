import React from 'react'
import './ProgressR.css'
 import CalendarComponent from './Calendar'
 import Charts from './Charts'
const ProgressReport=({auth , tododata})=>{
   

    console.log(auth,tododata)

        const api = 'https://teammanagement.onrender.com/api/board/calendar/${tododata.id}'; 
    return(
<>

<Charts/>
<CalendarComponent api={api} />
</>
    )
}
export default ProgressReport
