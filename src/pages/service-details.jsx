import React from 'react'
import { motion } from "framer-motion"

import ServiceCardFour from '../components/sections/services/serviceCardFour'
import service_bg from "../assets/images/services/services-2.jpg"

import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'


const ServiceDetails = () => {
  return (
    <>
      <PageTitle link={"Services Details"} pageName={"Services Details"} />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <motion.div className="image"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <img src={service_bg} alt="services-image" />
                </motion.div></div>
            <div className="col-lg-6">
              
                <h1>Concealed Carry Class</h1>
                
<h2>June 28, 2025</h2> <br />

<h3>Columbia Law Enforcement Training Academy<br />
Columbia, MS 39249</h3>
<p>Must have 100 rounds of ammo, pistol, holster, hearing protection, and eye protection.</p>
<p>After form completion you will be emailed and/or texted your course conformation, and sent payment request. Full payment is required to reserve your seat immediately after you receive the invoice.
If you have any questions or concerns please contact us at j5solutionssp@gmail.com.  You can also call or text (601)633-1159.
We look forward to training with you.</p>
                
                
                
              
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails