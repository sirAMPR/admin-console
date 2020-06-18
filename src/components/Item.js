import React from "react";

const Item = ({ from, to, subject, date }) => (
  <tr>
    <td p={1}>{from}</td>
    <td p={1}>{to}</td>
    <td p={1}>{subject}</td>
    <td p={1}>{date}</td>
  </tr>
);

export default Item;
