import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { data } from "./Data";
import { filters } from "./Filter";

export function FunctionalComponentView(props: { filter: string }) {
  const currentFilter = props.filter;
  const currentData =
    currentFilter === filters[0]
      ? data
      : data.filter((item) => item.category === currentFilter);
  return (
    <>
      <Row>
        {currentData.map((d) => (
          <Col className="mx-2 my-2">
            <Image src={d.img} />
          </Col>
        ))}
      </Row>
    </>
  );
}
