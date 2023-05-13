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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus veniam error. Deserunt, ab repellat optio ea dolore at aliquam saepe libero labore! Suscipit cum provident eius ab. Ea, nihil.
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default About;