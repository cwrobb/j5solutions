import React from 'react'
import { motion } from "framer-motion"
import BannerThree from '../components/sections/banners/bannerThree'
import AboutThree from '../components/sections/abouts/aboutThree'
import ChooseUs from '../components/sections/chooseUs'
import { ScrollRestoration } from 'react-router-dom'


const HomeThree = () => {
  return (
    <>
      <BannerThree />
      <AboutThree />
      <ChooseUs />
      <ScrollRestoration />
    </>
  )
}

export default HomeThree