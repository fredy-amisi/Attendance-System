import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Styling.css';
import About from '../Pages/About';
import Attendance from '../Pages/Attendance';
import Courses from "./Courses";
const Index = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Login');
    }

    const handleSignupClick = () => {
        navigate('/signup');
    }

    const slides = [
        {
            id: 1,
            WelcomeText: 'Welcome to E-Attendance System',
            heading1: 'Mark Attendance Anytime, Anywhere',
            heading2: 'Efficient and Convenient Attendance Tracking',
            description1: 'Quickly mark attendance using your mobile device.',
            description2: 'View attendance records and statistics instantly.',
        },

        {
            id: 2,
            WelcomeText: 'E-Attendance System',
            heading1: 'Why Choose E-Attendance?',
            heading2: 'Features and Benefits',
            description1: 'Real-time attendance updates for students and teachers.',
            description2: 'Secure and easy-to-use platform for educational institutions.',
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
    };

    return (
        <div id="root">
            <section className="banner_main">
                <Slider className="custom-slider" {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`carousel-item${slide.id}`}>
                            <div className="slide-content">
                                <div className="welcome">
                                    <h4>{slide.WelcomeText}</h4>
                                </div>
                                
                                <h2>{slide.heading1}</h2>
                                <h2>{slide.heading2}</h2>

                                <p>{slide.description1}</p>
                                <p>{slide.description2}</p>

                                <div className="gl-buttons">
                                    <Button className="g-button" variant="primary" onClick={handleSignupClick}>
                                        <span>Get Started</span>
                                    </Button>
                                    <Button className="l-button" variant="primary" onClick={handleLoginClick}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <About/>
            <Courses/>
            <Attendance/>

        </div>
    );
};

export default Index;
