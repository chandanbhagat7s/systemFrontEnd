import { useState } from "react";
import MainLayout from "./Layout/MainLayout";
import Content from "./Components/Content";
import Approuting from "./Routes/Approuting";
import { AlertBox } from "./Components/DisplayAlert";

function App() {
  return (
    <>
      {/* <MainLayout>
        <Content />
      </MainLayout> */}
      <AlertBox />
      <Approuting />
    </>
  );
}

export default App;
