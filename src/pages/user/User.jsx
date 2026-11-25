import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const param = useParams();
    console.log(param);
  return (
    <span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        User ID: {param.id}
      </h1>
    </span>
  );
}

export default User;
