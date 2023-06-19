import { Button, Col, Container, Row } from "react-bootstrap";
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
            className="mx-2 my-2 bi bi-list"
            variant="light"
            onClick={() => setState(!state)}
          />
        </Col>
      </Row>
      <Row>
        {state ? <StoreFullView /> : <StoreTableView />}
      </Row>
    </>
  );
}
