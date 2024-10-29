import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { toast } from "react-toastify";

const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      toast.warning("You can not add values more than 10");
    }
  };
  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast.warning("You can't goes as values are more than 0");
    }
  };

  return (
    <div className="d-flex justify-content-center align-item-center mt-6 gap-3">
      <Button className="btn btn-danger" onClick={sub}>
        -
      </Button>
      <h2>{count}</h2>
      <Button className="btn btn-success" onClick={add}>
        +
      </Button>
    </div>
  );
};

export default Counter;
