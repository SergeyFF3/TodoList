import React from 'react';
import { Navbar } from 'widgets/Navbar';
import cls from './Main.module.scss'

const Main = () => {

    return (
        <div className={cls.Main}>
           <Navbar/>
           <div className={cls.content}>

           </div>
        </div>
    );
};

export default React.memo(Main);