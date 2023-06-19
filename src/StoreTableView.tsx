import { Button, Col, Table } from "react-bootstrap";
import { storeData } from "./StoreData";
import Image from "react-bootstrap/Image";

export function StoreTableView() {
  return (
    <Col>
      <Table striped bordered hover>
        <tbody>
          {storeData.map((item) => (
            <tr>
              <td >
                <Image style={{maxHeight: 80}} src={item.img} />
              </td>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price} руб</td>
              <td> <Button variant="danger">Add to card</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}
