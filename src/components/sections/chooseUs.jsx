import React from 'react'
import { motion } from "framer-motion"
import choose_imag_1 from "../../assets/images/choose/choose-1.png"
import choose_imag_2 from "../../assets/images/choose/choose-2.jpg"
import { Link } from 'react-router-dom'
import { slideUp } from '../../utlits/slideUp'

const ChooseUs = () => {
    return (
        <div className="choose-area pt-100 pb-75">
            <div className="container">
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="title">
                                <span className="d-block">Are you prepared?</span>
                                <h2>You Can’t Control the Crisis — But You Can Control Your Readiness.</h2>
                                <p>Life doesn’t give warnings. But with the right training, you can act — and make a difference. That’s what J5 Solutions is here for.</p>
                            </div>
                            
                            <div className="choose-button">
                                <Link className="default-btn text-decoration-none" to="/about">
                                    <i className="ri-arrow-right-line"></i>
                                    Take Your First Step Toward Being Prepared
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-image">
                            <img src={choose_imag_1} alt="choose-image" />
                            <div className="image-2">
                                <img src={choose_imag_2} alt="choose-image" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ChooseUs