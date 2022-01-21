import { useState } from "react";
import TabBlock from "./components/TabBlock";
import TabContent from "./components/TabContent";
import { TabList } from "./utils/TabList";
function App() {
  const [tabActive, setTabActive]= useState("Tab1")
  return (
    <main className="App container">
      <TabBlock tabList={TabList}  tabActive={tabActive} setTabActive={setTabActive}/>
      <TabContent tabList={TabList} tabActive={tabActive} />
    </main>
  );
}

export default App;
