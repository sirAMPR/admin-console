import React, { useState } from "react";
import "./App.css";
import { Box, Flex } from "rebass";
import { Input } from "@rebass/forms";
import Table from "./components/Table";
import data from "./data.json";

const App = () => {
  const [result, setResult] = useState(0);
  const [emailData] = useState(data);

  return (
    <Box p={4}>
      <Box width={[1, 1, 1 / 3]}>
        <Flex>
          <Input id="date-from" name="date" type="date" />
          <Input id="date-to" name="date" type="date" />
        </Flex>
      </Box>
      <p>Result: {result} email(s)</p>
      <Table data={emailData} />
    </Box>
  );
};

export default App;
