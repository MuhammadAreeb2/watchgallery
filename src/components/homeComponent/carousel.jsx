import Carousel from 'react-bootstrap/Carousel';
import slider1 from "./slider1.jpg"

import slider2 from "./slider2.jpg"

import slider3 from "./slider3.jpg"
function Carousels() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className='imgz'>
        <img
          className="d-block w-100 h-50"
          src={slider3} />
        <Carousel.Caption>
          <h3>Smart Watches</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-50"
          src={slider1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Citizen Watch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={slider2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sveston Watch</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Carousels;