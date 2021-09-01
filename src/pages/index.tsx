import React from "react";
import { CssBaseline } from "@material-ui/core";

import Drawer from "./components/drawer";
import Converter from "./components/converter/";

const IndexPage = () => {
  return (
    <div>
      <CssBaseline />
      <Drawer />
      <Converter />
    </div>
  );
};

export default IndexPage;
