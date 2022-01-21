import Tab from "./Tab";

function TabBlock({ tabList, tabActive, setTabActive }) {
  const getTabActive = (tabList) => {
    const active = tabList.filter((item) => item.idtab === tabActive);
    return active[0];
  };
  const { idtab } = getTabActive(tabList);
  const tabActiveHandler = (tab) => {
    setTabActive(tab);
  };
  return (
    <nav
      className="bloc-tabs"
      onClick={(e) => tabActiveHandler(e.target.textContent)}
    >
      {tabList.map((tab, indx) => (
        <Tab
          key={`Tab${indx}`}
          tabName={tab.idtab}
          active={idtab === tab.idtab}
        />
      ))}
    </nav>
  );
}

export default TabBlock;
