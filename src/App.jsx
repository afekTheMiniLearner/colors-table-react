import React from "react";

import { ManagedColorsTable } from "./components";

function App() {
  return (
    <div className="app-container">
      <ManagedColorsTable
        rows={5}
        columns={5}
        allowRepeatedColors={false}
        colors={[
          "red",
          "blue",
          "green",
          "pink",
          "gold",
          "cyan",
          "black",
          "silver",
        ]}
      />
    </div>
  );
}

export default App;
