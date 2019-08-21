import {
    Layout,
} from 'antd';
import React from 'react';
import { MainLeftPanelContainer } from '../../containers/MainLeftPanelContainer';
const {
    Sider,
} = Layout;

interface SiderComponentProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}
export const SiderComponent: React.FC<SiderComponentProps> = props =>
    (
        <Sider
            collapsible={true}
            collapsed={props.collapsed}
            onCollapse={() => props.setCollapsed(!props.collapsed)}
            width={280}
            collapsedWidth="0"
            trigger={null}
        >
            <MainLeftPanelContainer
                collapsed={props.collapsed}
                setCollapsed={props.setCollapsed}
            />
        </Sider>
    );
