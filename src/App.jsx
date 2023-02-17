import React, { useState } from "react";
import Aside from "./container/components/Aside/Aside";
import Creation from "./container/components/Creations/Creation";
import Header from "./container/components/Header/Header";
import Search from "./container/components/Search-component/Search";
import OurStory from "./container/components/ourStory/OurStory";

const App = () => {
  const [isMenueOpen, setIsMeneuOpen] = useState(false);
  return (
    <div className="app relative">
      <Aside setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Header setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Search />
      <Creation />
      <OurStory />
    </div>
  );
};

export default App;
