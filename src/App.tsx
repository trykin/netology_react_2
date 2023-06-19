import { Tab, Tabs } from "react-bootstrap";
import { PortfolioFun } from "./PortfolioTabs";
import { StoreTabs } from "./StoreTabs";

function App() {
  return (
    <>
      <Tabs
        defaultActiveKey="Portfolio"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Portfolio" title="Portfolio">
          <PortfolioFun />
        </Tab>
        <Tab eventKey="Store" title="Store">
          <StoreTabs/>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
