import { Button } from "bootstrap";
import React, { useState } from "react";

const UserObj = () => {
  const [user, setuser] = useState({
    name: "Sawaira",
    age: 20,
    email: "itsawaira@gmail.com",
  });

  const [isMarried, setMarried] = useState(false);
  const { name, age, email } = user;
  const update = () => {
    setMarried(!isMarried);
  };
  return (
    <div>
      <button onClick={update}>Update Marriage Status</button>
      {isMarried ? (
        <>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{email}</h1>
        </>
      ) : null}
    </div>
  );
};

export default UserObj;
