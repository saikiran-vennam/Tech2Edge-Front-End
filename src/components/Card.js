import Card from "react-bootstrap/Card";
import React from "react";

const CardComp = (props) => {
  const { img, name, profession, age } = props.data;
  const image = `https://demo.tech2edge.co/samples/${img}`;

  const handleImgClick = () => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = image;
    captionText.innerHTML = name;
  };

  const handleCloseClick = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          onClick={handleImgClick}
          className="card-img"
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Profession: </strong>
            {profession}{" "}
          </Card.Text>
          <Card.Text>
            <strong>Age: </strong>
            {age}
          </Card.Text>
        </Card.Body>
      </Card>
      <div id="myModal" className="modal">
        <span className="close" onClick={handleCloseClick}>
          &times;
        </span>
        <img className="modal-content" id="img01" alt="Large-Img" />
        <div id="caption"></div>
      </div>
    </div>
  );
};

export default CardComp;
