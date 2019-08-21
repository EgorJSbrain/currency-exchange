import React, { useState } from 'react';
import { USDComponent } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsdGet, selectUsdsPeriodGet, selectUsdLoading, usdGetRequest, usdGetPeriodRequest } from '../../modules/USD';

export const USDContainer = () => {
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const dispatch = useDispatch();
    const usd = useSelector(selectUsdGet);
    const usds = useSelector(selectUsdsPeriodGet);
    const loading = useSelector(selectUsdLoading)
    const code = 145;
    const param_mode = 0;
    const getDate = (e: any) => {
        const date = new Date(e._d).toISOString().substring(0, 10);
        dispatch(usdGetRequest(code, date, param_mode))
    }
    const getСoursePeriod = () => {
        if (!end || !start) {
            return alert('Введите даты')
        } else {
            const date_end = new Date(end).toISOString().substring(0, 10);
            const start_date = new Date(start).toISOString().substring(0, 10);
            dispatch(usdGetPeriodRequest(code, start_date, date_end));
        }
    }
    return (
        <USDComponent
            getDate={getDate}
            setStart={setStart}
            setEnd={setEnd}
            usd={usd}
            getСoursePeriod={getСoursePeriod}
            usds={usds}
            loading={loading}
        />
    )

};
