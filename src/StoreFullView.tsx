import { Button, Card, Col, Row } from "react-bootstrap";
import { storeData } from "./StoreData";

export function StoreFullView() {
  return (
    <>
      {storeData.map((item) => (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-center">{item.name}</div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  {item.color}
                </div>
              </Card.Text>
              <Row>
                <Col className="d-flex justify-content-left">
                  <p style={{ fontSize: 32, color: "red" }}>{item.price} руб</p>
                </Col>
                <Col className="d-flex justify-content-right">
                  <Button variant="danger">Add to card</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
