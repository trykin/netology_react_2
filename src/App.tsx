import { Tab, Tabs } from "react-bootstrap";
import { PortfolioFun } from "./FunctionalComponentTabs";

function App() {
  return (
    <>
      <Tabs
        defaultActiveKey="Functional component"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Functional component" title="Functional component">
          <PortfolioFun />
        </Tab>
        <Tab eventKey="Class component" title="Class component">
          Tab content for Profile
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
