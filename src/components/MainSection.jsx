
import Search from './Search'
import Navbar from './Navbar'
import AddProject from '../NewPro/NewPro'

const MainSection = ({profunc,setprojectdata,add , auth , setmembers , tododata}) => {
  

console.log(tododata)

  return (
    <div style={{width:"85%" , background:"linear-gradient(135deg , #45048A  , #C40CC6 )", height:"100%"}}>
      <Search/>
      
      {
          add ? <Navbar auth={auth} tododata={tododata}/> : <AddProject profunc={profunc} setprojectdata={setprojectdata} auth={auth} setmembers={setmembers} />
        }
    </div>
  )
}

export default MainSection