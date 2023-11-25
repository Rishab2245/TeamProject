import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'
// import { useParams } from 'react-router'
import { useLocation } from 'react-router'

const Dashboard = () => {
  const loacation = useLocation();
  console.log(loacation.state.email);
  return (
    <>
      <Header />
      <div className='below'>
        <SideBar />
        <MainSection />
      </div>

    </>
  )
}

export default Dashboard