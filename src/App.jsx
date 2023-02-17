import React, { useState } from "react";
import Aside from "./container/components/Aside/Aside";
import Creation from "./container/components/Creations/Creation";
import Header from "./container/components/Header/Header";
import OurStory from "./container/components/ourStory/OurStory";

const App = () => {
  const [isMenueOpen, setIsMeneuOpen] = useState(false);
  return (
    <div className="app relative">
      <Header setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Aside setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Creation />
      <OurStory />
    </div>
  );
};

export default App;
