import { Button, Col, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { StoreFullView } from "./StoreFullView";
import { StoreTableView } from "./StoreTableView";

export function StoreTabs() {
  const [state, setState] = useState<boolean>(true);
  const icon:string = state ? "bi-list":"bi-grid-3x3-gap-fill"
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button
            className={`mx-2 my-2 bi ${icon}`}
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
