import React, { useState } from 'react'
import { motion } from "framer-motion"
import shap_1 from "../../../assets/images/shape/shape-1.png"
import ServicesFour from '../services/servicesFour'
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

const BannerThree = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="hero-area">
                <div className="container-fluid">
                    <motion.div className="hero-content"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="title">
                            <span className="d-block">OUR MISSION:</span>
                            <h1>What Would You Do If Someone’s Life Was on the Line?</h1>
                            <p>Most people freeze. Not because they don't care — but because they never learned what to do. Whether it's a cardiac arrest, a violent threat, or a safety breach, seconds count. J5 Solutions teaches you how to act — and save lives — when it matters most.</p>
                        </div>
                        <div className="hero-button d-flex align-items-center">
                            <a className="demo text-decoration-none" href="classes">
                                See Upcoming Classes
                                <div className="dote"></div>
                            </a>
                           <a className="demo text-decoration-none" href="contact">
                               Book a Safety Consultation
                                <div className="dote"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>
                <div className="shape-1">
                    <img src={shap_1} alt="hero-shape" />
                </div>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="0O2aH4XLbto"
                    onClose={() => setOpen(false)}
                />
            </section>
            <ServicesFour style={"pb-75 top-70"} />
        </>
    )
}

export default BannerThree