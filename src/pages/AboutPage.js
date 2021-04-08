import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <h2>    
            <p>Hello, my name is Alaa Magdy. I'm a Front-end engineer with experience in ReactJS,with basic knowledge of Express JS and Node JS </p>

            <p>My dream is to start one day my own business and become an entrepreneur</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with Front-end Development </p>
            </h2>
            </Content>
        </div>
    );

}

export default AboutPage;