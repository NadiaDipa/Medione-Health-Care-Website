import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about-section">
            {/* image */}
            <div className="about-img"><img width="570px" src="./image/about-img.png" alt=""/></div>
            <h3 className="about-headline pb-3 pt-3 mb-3 text-center">About Our Medione</h3>
            {/* about-section */}
            <div className="text-white text-center ms-5 me-5">
               
                <p className="mb-5"> 
                At Our Clinic, we provide a comprehensive range of medical services.Our doctors are committed to providing quality healthcare services to our patients.Call us today to book an appointment. Medione Group has over two decades of experience in the healthcare sector, and is known
                for providing quality healthcare and valuable experience to all domestic and international patients.Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.
                <br/>
                <br/>
                Our Mission, Vision and Values,
                Cedars - Sinai Mission Statement,
                Cedars - Sinai is a nonprofit, independent healthcare organization committed to improving the health status of the communities we serve through:

                Leadership and excellence in delivering quality healthcare services
                Expanding the horizons of medical knowledge through biomedical research
                Educating and training physicians and other healthcare professionals
                Improving the health status of the community
                Quality patient care is our priority.Providing excellent clinical and service quality, offering compassionate care, and supporting research and medical education are essential to our mission.This mission is founded in the ethical and cultural precepts of the Judaic tradition, which inspire devotion to the art and science of healing and to the care we give our patients and staff.To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation 's aspirations.
                <br />
                <br />
                For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine.This approach has given us an in -depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care
                for our patients.Each year, our 10, 500 employees treat and care
                for around 320, 000 patients at currently 26 locations in Germany and the United Kingdom.

                Our aim is to give every patient the prospect of a better quality of life.To do so, our reinvestment model ensures we maintain a high standard of quality and are able to be innovative and forward thinking with our infrastructure, clinical delivery and staff development.Additionally, our collaboration with experienced specialists, expert healthcare professionals, clinical partners and patient groups ensures we provide the best - possible experience and care
                for patients and their families when visiting our hospitals
                </p>
            </div>
        </div>
    );
};

export default About;