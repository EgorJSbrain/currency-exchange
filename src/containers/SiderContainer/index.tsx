import React from 'react';
import { SiderComponent } from '../../components';

interface SiderContainerProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const SiderContainer: React.FC<SiderContainerProps> = props => (
    <SiderComponent
        collapsed={props.collapsed}
        setCollapsed={props.setCollapsed}
    />
);
