
import Search from './Search'
import Navbar from './Navbar'
import AddProject from '../NewPro/NewPro'

const MainSection = ({profunc,setprojectdata,add , auth , setmembers}) => {
  



  return (
    <div style={{width:"85vw" , background:"linear-gradient(135deg , #45048A  , #C40CC6 )"}}>
      <Search/>
      
      {
          add ? <Navbar /> : <AddProject profunc={profunc} setprojectdata={setprojectdata} auth={auth} setmembers={setmembers}/>
        }
    </div>
  )
}

export default MainSection