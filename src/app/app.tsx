import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { BattleResult } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={ <BattleResult /> } />
      </Routes>
    </>
  );
};

export default App;
