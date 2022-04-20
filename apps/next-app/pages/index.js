import React from "react";
import Button from "@monorepo-starter/button";

function HomePage() {
  return (
    <Button
      isSelected={true}
      onClick={() => {
        console.log("click");
      }}
    >
      test
    </Button>
  );
}

export default HomePage;
