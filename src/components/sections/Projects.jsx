import React from 'react';
import ComputerZone from '../../assets/Computer-Zone.png';
import CreativePhotography from '../../assets/Home-Creative-Photography.png';
import UsedCarZone from '../../assets/UsedCarZone.png';
import Card from './Card';

const Projects = () => {
    const data = [
        {
            id: 1,
            title:'UsedCarZone',
            image: UsedCarZone,
            desc: 'This is a website for selling used car. People can sell their car through this website',
            url:'https://used-car-zone.web.app/'
        },
        {
            id: 2,
            title:'CreativePhotography',
            image: CreativePhotography,
            desc: 'This is a website for Individual Entrepreneur.Who is providing some services with his team related photography',
            url:'https://creative-photographer.web.app/'
        },
        {
            id: 3,
            title:'ComputerZone',
            image: ComputerZone,
            desc: 'This website provide computer related courses. People can see the details for each course and they can download the details page as PDF',
            url:'https://learning-app-171dc.web.app/'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-3 place-items-center'>
            {
                data.map(details => <Card key={details.id} details={ details} />)
            }
        </div>
    );
};

export default Projects;