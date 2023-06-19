import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { portfolioData } from "./PortfolioData";
import { filters } from "./Filter";

export function PortfolioView(props: { filter: string }) {
  const currentPortfolioFilter = props.filter;
  const currentPortfolioData =
    currentPortfolioFilter === filters[0]
      ? portfolioData
      : portfolioData.filter((item) => item.category === currentPortfolioFilter);

  return (
    <>
      <Row>
        {currentPortfolioData.map((item, index) => (
          <Col key={index} className="mx-2 my-2">
            <Image src={item.img} />
          </Col>
        ))}
      </Row>
    </>
  );
}
