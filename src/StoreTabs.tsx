import { Button, Col, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { StoreFullView } from "./StoreFullView";
import { StoreTableView } from "./StoreTableView";

export function StoreTabs() {
  const [state, setState] = useState<boolean>(true);

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button
            className="bi bi-list"
            variant="light"
            onClick={() => setState(!state)}
          />
        </Col>
      </Row>
      <Row>
        <Col>{state ? <StoreFullView /> : <StoreTableView />}</Col>
      </Row>
    </>
  );
}
