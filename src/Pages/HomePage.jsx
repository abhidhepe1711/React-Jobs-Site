import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/Homecards'
import JobListings from '../components/Joblistings'
import Alljobs from '../components/Alljobs'
const HomePage = () => {
  return (
    <>
     <Hero/> 
     <HomeCards/>
     <JobListings isHome={true}/>
     <Alljobs/>
    </>
  )
}

export default HomePage
