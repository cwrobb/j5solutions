import React from 'react'
import PageTitle from '../components/common/pageTitle'
import ServicesThree from '../components/sections/services/servicesThree'
import TestimonialSlider from '../components/sections/testimonialSlider'
import { ScrollRestoration } from 'react-router-dom'


const Classes = () => {
  return (
    <>
      <PageTitle link={"Classes"} pageName={"Our Classes"}/>
      <ServicesThree />
      <TestimonialSlider />
      <ScrollRestoration />
    </>
  )
}

export default Classes
