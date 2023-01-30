import React from 'react';
import cls from './Sidebar.module.scss'
import SidebarList from "../SidebarList/SidebarList";
import ArrowDown from 'shared/assets/icons/caret-down.svg'

const Sidebar = () => {

    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>
                <p className={cls.title}>Название проекта</p>
                <p className={cls.text}>Аббревиатура</p>
                <img
                    className={cls.arrow}
                    alt="#"
                    src={ArrowDown}
                />
            </div>
            <menu className={cls.sidebar}>
                <SidebarList/>
            </menu>
        </div>
    );
};

export default React.memo(Sidebar);