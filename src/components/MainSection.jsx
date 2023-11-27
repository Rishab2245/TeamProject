
import Search from './Search'
import Navbar from './Navbar'
import AddProject from '../AddProj/AddProject'

const MainSection = ({profunc,setprojectdata,add}) => {
  



  return (
    <div style={{width:"85%", padding:"0.5rem"}}>
      <Search/>
      
      {
          add ? <Navbar /> : <AddProject profunc={profunc} setprojectdata={setprojectdata}/>
        }
    </div>
  )
}

export default MainSection