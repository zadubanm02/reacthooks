import React from "react";

const DetailCard = props => {
  <div>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{props.state}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  </div>;
};

export default DetailCard;
