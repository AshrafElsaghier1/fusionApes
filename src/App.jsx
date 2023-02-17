import React, { useState } from "react";
import Aside from "./container/components/Aside/Aside";
import Creation from "./container/components/Creations/Creation";
import Header from "./container/components/Header/Header";
<<<<<<< HEAD
import Search from "./container/components/Search-component/Search";
=======
import OurStory from "./container/components/ourStory/OurStory";
>>>>>>> b88a24e7f79342d13bc5304226d7c469f79f8a8b

const App = () => {
  const [isMenueOpen, setIsMeneuOpen] = useState(false);
  return (
    <div className="app relative">
      <Aside setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
<<<<<<< HEAD
      <Header setIsMeneuOpen={setIsMeneuOpen} isMenueOpen={isMenueOpen} />
      <Search />
=======
      <Creation />
      <OurStory />
>>>>>>> b88a24e7f79342d13bc5304226d7c469f79f8a8b
    </div>
  );
};

export default App;
