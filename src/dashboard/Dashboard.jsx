import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'


const Dashboard = () => {
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