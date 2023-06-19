import { Tab, Tabs } from "react-bootstrap";
import { filters } from "./Filter";
import { useState } from "react";
import { PortfolioView } from "./PortfolioView";

export function PortfolioFun() {
  const [currentFilter, setCurrentFilter] = useState<string>(filters[0]);

  return (
    <>
    <Tabs
      defaultActiveKey={currentFilter}
      key="currentFilter"
      id="PortfolioFun"
      className="mb-3"
      onSelect={(k) => k !== null ? setCurrentFilter(k): setCurrentFilter(currentFilter)}
    >
      {filters.map((filter) => (
        <Tab
          key={filter}
          eventKey={filter}
          title={filter}
        >
        </Tab>
      ))}
      
    </Tabs>
    <PortfolioView filter={currentFilter}/>
    </>
  );
}
