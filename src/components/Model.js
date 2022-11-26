import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Rating from "@mui/material/Rating";

function Model() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="review" onClick={() => setLgShow(true)}>
        Reviews
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <div className="slide container">
                <Rating name="disabled" value={2} disabled />
                <h3 className="slider">First slide label</h3>
                <p className="slider">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide container">
                <Rating name="disabled" value={3} disabled />
                <h3 className="slider">Second slide label</h3>
                <p className="slider">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide container">
                <Rating name="disabled" value={4} disabled />
                <h3 className="slider">Third slide label</h3>
                <p className="slider">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Model;
