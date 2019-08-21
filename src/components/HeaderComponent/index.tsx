import {
    Icon,
    Layout,
} from 'antd';
import React from 'react';
import style from './Header.module.css';
const {
    Header,
} = Layout;

interface HeaderComponentProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = props => (
    <Header
        className={style.wrapper}
        style={{ padding: 0 }}
    >
        <Icon
            className={style.trigger}
            style={{ fontSize: '38px', color: '#fff', margin: '13px 0px 0px 10px' }}
            type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => props.setCollapsed(!props.collapsed)}
        />
    </Header>
);
