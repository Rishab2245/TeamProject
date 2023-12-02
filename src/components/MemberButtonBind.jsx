import React, { useEffect, useState } from 'react'
import MemberButton from './MemberButton'
import "./MemberButtonBindcss.css"
import axios from 'axios';


const MemberButtonbind = ({ members, auth }) => {

  let [memid, setmemid] = useState([]);

  let [data, setdata] = useState([]);



  useEffect(() => {
    console.log(members);

    if (members[0] != undefined) {
      let temp = members[0].members;
      console.log("temp:", temp);
      setmemid(temp);
      setdata([]);
      const FetchUserDetails = async () => {
        const requests = temp.map(async (mem) => {
          try {
            const res = await axios.get(`https://teammanagement.onrender.com/api/user/getUserDetails/${mem}`, {
              headers: {
                'Authorization': auth
              }
            })
            return res.data
          }
          catch (error){
            console.error(error);
          }
        })
        const response = await Promise.all(requests);
        console.log(response)
      }
      // temp.forEach(async (e) => {
      //   let temp = await memlist(e);
      //   setdata((pr) => ([...pr, { value: `${temp.data.name}`, bol: false, link: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" }]));
      //   console.log(data);
      // }
      // )
      FetchUserDetails();
    }

    // console.log(memid);

  }, [members,])

  console.log(auth)
  console.log(data)
  const memlist = async (e) => {
    try {
      let response = await axios.get(`https://teammanagement.onrender.com/api/user/getUserDetails/${e}/`, { headers: { Authorization: auth } });
      return response;
    }
    catch (err) {
      return err;
    }
  }

  // const set = async (e)=>{
  //   console.log(e)
  //   let temp = await e;

  //     console.log(temp);


  // }





  return (
    <>
      <div className='membersection'>
        <div className='memberheading'>
          <h3>Members :-</h3>
          <span>+</span>
        </div>
        <div style={{ padding: "0.2rem" }}>
          {
            data.map((e, idx) => (
              <MemberButton key={idx} value={e.value} bol={e.bol} link={e.link} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MemberButtonbind