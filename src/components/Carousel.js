import React from 'react';

import Card from '../components/Card';

import coding from '../assets/images/Coding.jpg';
import alaa from '../assets/images/alaa.png';
import xena from '../assets/images/LogoFinal.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'My Github',
                    subTitle: 'Technical projects',
                    imgSrc: coding,
                    link: 'https://github.com/alaamagdyomar',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Alaa Magdy',
                    subTitle: 'linkedin',
                    imgSrc: alaa,
                    link: 'https://www.linkedin.com/in/alaa-magdy-25a666189/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Xena POS',
                    subTitle: 'Managment sys. for Restaurants & Chains',
                    imgSrc: xena,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;