import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img3 from "./galleryComponent/img(3).jpg"
import Navbar from "./homeComponent/navbar"

function About() {
  return (
    <>
      <Navbar />
      <div
        className="modal show"
        style={{ display: 'block', border: "0px", position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>About Us - Watch Gallery </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={img3} className="w-100" alt="" />
            <p>
              Welcome to Watch Gallery official website,
              the premium luxury brand of watches in Pakistan.  Watch Gallery  is a global
              watch brand with over 4 decades of experience in watchmaking industry and a family of 10 million happy customers.
              Only at our store, shoppers can find  Watch Gallery  watches original price in Pakistan. We encourage shoppers to buy luxury watches for men from the best online watch store at affordable rates. Latest  watches price in Pakistan 2020 are affordable considering the quality and luxury gift box that comes with the package.
              You can buy  watches online and pay cash on delivery anywhere in karachi, lahore, rawalpindi, islamabad, faisalabad, peshawar, hyderabad, sialkot, multan and across country.

            </p>
          </Modal.Body>

          <Modal.Footer>

            <Button variant="primary">Have a Good Day</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default About;
