import React from 'react';
import cls from './Main.module.scss'
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from "widgets/Sidebar";
import {TodoPage} from 'pages/TodoPage';

const Main = () => {

    return (
        <div className={cls.Main}>
            <Navbar/>
            <div className={cls.content}>
                <Sidebar/>
                <TodoPage/>
            </div>
        </div>
    );
};

export default React.memo(Main);