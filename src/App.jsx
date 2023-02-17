import React, { useState } from "react";
import Aside from "./container/components/Aside/Aside";
import Header from "./container/components/Header/Header";

const App = () => {
  const [isMenueOpen, setIsMeneuOpen] = useState(false);
  return (
    <div className="app relative">
      <Header setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Aside setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
    </div>
  );
};

export default App;
