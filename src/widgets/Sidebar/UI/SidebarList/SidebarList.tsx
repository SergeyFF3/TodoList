import React from 'react';
import {sidebarData} from "../../model/selectors/getSidebarData";
import SidebarItem from "../SidebarItem/SidebarItem";

const SidebarList = () => {

    return (
        <>
            {sidebarData.map((item) => {
                    return <SidebarItem
                        key={item}
                        item={item}
                    />
                }
            )}
        </>
    );
};

export default React.memo(SidebarList);