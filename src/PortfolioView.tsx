import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { PortfolioData } from "./PortfolioData";
import { filters } from "./Filter";

export function PortfolioView(props: { filter: string }) {
  const currentPortfolioFilter = props.filter;
  const currentPortfolioData =
    currentPortfolioFilter === filters[0]
      ? PortfolioData
      : PortfolioData.filter((item) => item.category === currentPortfolioFilter);
  return (
    <>
      <Row>
        {currentPortfolioData.map((d) => (
          <Col className="mx-2 my-2">
            <Image src={d.img} />
          </Col>
        ))}
      </Row>
    </>
  );
}
