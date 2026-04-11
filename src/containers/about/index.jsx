import React from "react";
import './styles.scss'
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

const personalInformation = [
    { label: "Full Name", value: "Aditya Sasank Cheemakurthi" },
    { label: "Mobile number", value: "7659024703" },
    { label: "Location", value: "Bangalore, Karnataka, India" },
    { label: "E-Mail", value: "adithyashashank97@gmail.com" },
    { label: "LinkedIn", value: "https://linkedin.com/in/aditya-sasank" },
]

const jobSummary = 'A Cyber Defense Analyst with a passion for security operations and threat awareness. I have a proven track record in identifying and mitigating security risks, and have a strong understanding of the latest security technologies and trends.'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeader
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalInfo">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(-1500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInfoHeader">Cyber Defense Analyst</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Personal Information</h3>
                        <ul>
                            {
                                personalInformation.map((item, i) => (
                                    <li key={i}>
                                        <span className="label">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                {/* <div className="about__content__servicesWrapper">
                    Services Wrapper
                </div> */}
            </div>
        </section>
    )
}
export default About;