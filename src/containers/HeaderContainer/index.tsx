import React from 'react';
import { HeaderComponent } from '../../components';

interface HeaderContainerProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const HeaderContainer: React.FC<HeaderContainerProps> = props => (
    <HeaderComponent
        collapsed={props.collapsed}
        setCollapsed={props.setCollapsed}
    />
);
