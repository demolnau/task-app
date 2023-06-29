import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((m) => {
        return <li key={m.id}>{m.task}</li>;
      })}
    </ul>
  );
};

export default Overview;