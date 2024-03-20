import React from "react";
import { useAtom } from "jotai";
import { accountAtom } from "../App";

import Navbar from "../components/Navbar";

function Home() {
  const [account] = useAtom(accountAtom);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;
