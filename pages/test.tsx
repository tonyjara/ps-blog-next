import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";

const Child = ({ value }: { value: string }) => {
  console.log(value);

  return <div>{value}</div>;
};

const Test = () => {
  let value = "test";
  const myRef = useRef("");
  console.log("parent");
  const handleChange = () => {
    myRef.current = "changed";
  };
  const memoizedChild = React.useMemo(
    () => <Child value={myRef.current} />,
    []
  );

  return (
    <div>
      <h1>Test</h1>
      <Button onClick={handleChange}>change me</Button>
      <Child value={myRef.current} />
      {/* {memoizedChild} */}
    </div>
  );
};

export default Test;
