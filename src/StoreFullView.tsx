import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { storeData } from "./StoreData";

export function StoreFullView() {
  return (
    <>
      {storeData.map((item, index) => (
        <Col key={index}>
          <Card className="mx-2 my-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-center">{item.name}</div>
              </Card.Title>
                <div className="d-flex justify-content-center">
                  {item.color}
                </div>
              <Row>
                <Col className="d-flex justify-content-left">
                  <Container style={{ fontSize: 32, color: "red" }}>
                    {item.price} руб
                  </Container>
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
