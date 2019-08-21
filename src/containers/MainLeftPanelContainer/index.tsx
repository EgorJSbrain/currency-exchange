import React from 'react';
import MainLeftComponent from '../../components/MainLeftPanelComponent';

interface MainLeftPanelContainerProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const MainLeftPanelContainer: React.FC<MainLeftPanelContainerProps> = props => {    
    return (
        <MainLeftComponent
                collapsed={props.collapsed}
                setCollapsed={props.setCollapsed}
        />
    );
};
