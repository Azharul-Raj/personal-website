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
        <>
            <div id='projects' className="text-center mt-10">
        <h3 className="text-4xl font-bold text-white">
          PROJECTS
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative flex py-5 items-center w-9/12 lg:w-[20%]">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-2 place-items-center lg:mb-20'>
            {
                data.map(details => <Card key={details.id} details={ details} />)
            }
            </div>
            </>
    );
};

export default Projects;