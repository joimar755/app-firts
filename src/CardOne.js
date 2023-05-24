import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CardOne = ({ title, ImgPro }) => {
  return (
     <div className="card text-center bg-black">
        <Card.Img variant="top" src={ImgPro} />
        <Card.Body className="text-white">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
     </div>
  );
};
