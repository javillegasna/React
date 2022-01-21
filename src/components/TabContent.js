function TabContent({ tabList, tabActive }) {
  const getTabActive = (tabList) => {
    const active = tabList.filter((el) => el.idtab === tabActive);
    return active[0];
  };
  const { content } = getTabActive(tabList);
  return (
    <section className="content">
      <p>{content}</p>
    </section>
  );
}

export default TabContent;
