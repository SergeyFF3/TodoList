import React from 'react';
import cls from './SidebarItem.module.scss'
import Icon from 'shared/assets/icons/dashboard-tile.svg'

interface SidebarItemProps {
    item?: string
}

const SidebarItem = (props: SidebarItemProps) => {

    const {
        item
    } = props

    return (
        <div className={cls.wrapper}>
            <img
                className={cls.icon}
                alt="#"
                src={Icon}
            />
            <p>{item}</p>
        </div>
    );
};

export default React.memo(SidebarItem);