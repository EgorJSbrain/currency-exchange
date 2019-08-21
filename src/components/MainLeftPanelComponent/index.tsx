import {
    Icon,
    Menu,
} from 'antd';
import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

const { SubMenu } = Menu;

export interface MainLeftComponentProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const MainLeftComponent: React.FC<MainLeftComponentProps> = props => (
    <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
    >
        <SubMenu
            key="sub1"
            title={
                <span>
                    <Icon
                        type="bank"
                        style={{ fontSize: '20px' }}
                    />
                    <span style={{ fontSize: '16px' }}>Курсы валют</span>
                </span>
            }
        >
            <Menu.Item
                key="3"
                style={{ fontSize: '16px' }}
            >
                <NavLink
                    to="/USD"
                    onClick={() => props.setCollapsed(!props.collapsed)}
                >
                    <span>BYN/USD</span>
                </NavLink>
            </Menu.Item>

            <Menu.Item
                key="4"
                style={{ fontSize: '16px' }}
            >
                <NavLink
                    to="/EUR"
                    onClick={() => props.setCollapsed(!props.collapsed)}
                >
                    <span>BYN/EUR</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item
                key="5"
                style={{ fontSize: '16px' }}
            >
                <NavLink
                    to="/RUR"
                    onClick={() => props.setCollapsed(!props.collapsed)}
                >
                    <span>BYN/RUR</span>
                </NavLink>
            </Menu.Item>
        </SubMenu>
    </Menu>
);

export default MainLeftComponent;
