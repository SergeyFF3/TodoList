import React from 'react';
import cls from './Navbar.module.scss'
import Tile from 'shared/assets/icons/tile.svg'
import Arrow from 'shared/assets/icons/arrow-shape.svg'

const Navbar = () => {

    return (
        <menu className={cls.Navbar}>
           <img alt="#" className={cls.image} src={Tile}/>
           <img alt="#" className={cls.image} src={Arrow}/>
           <button className={cls.active}>Просмотр</button>
           <button className={cls.text}>Управление</button>
        </menu>
    );
};

export default React.memo(Navbar);