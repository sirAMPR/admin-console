import React from "react";
import Item from "./Item";

const Table = ({ data }) => (
  <table style={{ textAlign: "left", width: "100%" }}>
    <tr>
      <th>from</th>
      <th>to</th>
      <th>subject</th>
      <th>date</th>
    </tr>
    {data.map((item) => (
      <Item
        from={item.from}
        to={item.to}
        subject={item.subject}
        date={item.date}
        attachment={item.attachment}
      />
    ))}
  </table>
);

export default Table;
