import { Spin } from 'antd';
import React from 'react';
import style from './Loading.module.css';

export const LoadingComponent: React.FC = () => (
    <div className={style.wrapper}>
        <Spin size="small" />
    </div>
);
