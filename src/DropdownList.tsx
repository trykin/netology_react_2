import { useRef, useState } from "react";
import { Button, Overlay, Tooltip } from "react-bootstrap";

export function DropdownList() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <>
      <Button variant="success" ref={target} onClick={() => setShow(!show)}>Выпадающий... тултип</Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
           Здесь должен быть список, но делать его лень, будет тултип
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
