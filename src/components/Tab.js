function Tab({tabName, active}) {
    return ( 
        <button className={active? "tabs active-tabs" : "tabs"}>
            {tabName}
        </button>
     );
}

export default Tab;