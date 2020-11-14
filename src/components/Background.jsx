import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import photo1 from "./../images/img31.jpg"
import photo2 from "./../images/img32.jpg"


 import "./Background.css"


const items = [
  {
src: photo2,
    altText: 'Slide 1',
    caption: 'آباژور آفتاب',
    header: 'محصولات ما',
    key: '1',


  },
  {
    src: photo1,
    altText: 'Slide 2',    
    caption: 'آباژور آفتاب',
    header: 'محصولات ما',
    key: '2'
  },

];

const Example = () => <UncontrolledCarousel items={items} />;
export default Example;