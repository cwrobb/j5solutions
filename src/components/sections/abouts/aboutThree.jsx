import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import about_1 from "../../../assets/images/about/about-1.jpg"
import about_2 from "../../../assets/images/about/about-2.jpg"
import about_3 from "../../../assets/images/about/about-3.jpg"
import { slideUp } from '../../../utlits/slideUp'
import AboutIconOne from '../../../assets/icons/aboutIconOne'
import AboutIconTwo from '../../../assets/icons/aboutIconTwo'
import AboutIconThree from '../../../assets/icons/aboutIconThree'
import AboutIconFour from '../../../assets/icons/aboutIconFour'
const AboutThree = () => {
    const infoList = [
        {
            id: 1,
            title: "Law Enforcement Certified",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconOne />
        },
        {
            id: 2,
            title: "Multiple Commendations",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconTwo />
        },
        {
            id: 3,
            title: "Experienced Trainer",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconThree />
        },
        {
            id: 4,
            title: "Customized Consulting",
            details: "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
            icon: <AboutIconFour />
        },

    ]
    return (
        <div className="about-area pb-75">
            <div className="container">
                <div className="about-title-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-6">
                            <div className="about-title">
                                <span className="d-block">Why J5 Solutions?</span>
                                <h2>You Don't Rise to the Occasion — You Fall to Your Level of Training.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-title">
                                <p>In a crisis, there’s no time to Google.
You need skills that are second nature — to defend your family, help a stranger in cardiac arrest, or know how to secure your building before danger ever arrives.

Too many people say afterward: “I didn’t know what to do.” <b>We exist to change that.</b> </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="image-1">
                                <img src={about_1} alt="about-image" />
                            </div>
                            <div className="image-2">
                                <img src={about_2} alt="about-image" />
                            </div>
                            <div className="image-3">
                                <img src={about_3} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            {
                                infoList.map(({ details, icon, id, title }) => {
                                    return (
                                        <div key={id} className="content-card d-flex align-items-center">
                                            <div className="icon">
                                                {icon}
                                            </div>
                                            <div className="content">
                                                <h3>{title}</h3>
                                                <p>{details}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <Link className="default-btn text-decoration-none" to="/about">
                                <i className="ri-arrow-right-line"></i>
                                Start Training for Real Life
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutThree