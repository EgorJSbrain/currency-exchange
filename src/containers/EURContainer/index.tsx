import React, { useState } from 'react';
import { EURComponent } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectEurGet, eurGetRequest, eurGetPeriodRequest, selectEursPeriodGet, selectEurLoading } from '../../modules/EUR';

export const EURContainer: React.FC = () => {
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const dispatch = useDispatch();
    const eur = useSelector(selectEurGet);
    const eurs = useSelector(selectEursPeriodGet);
    const loading = useSelector(selectEurLoading)
    const code = 292;
    const param_mode = 0;
    const getDate = (e: any) => {
        const date = new Date(e._d).toISOString().substring(0, 10);
        dispatch(eurGetRequest(code, date, param_mode))
    }
    const getСoursePeriod = () => {
        if (!end || !start) {
            return alert('Введите даты')
        } else {
            const date_end = new Date(end).toISOString().substring(0, 10);
            const start_date = new Date(start).toISOString().substring(0, 10);
            dispatch(eurGetPeriodRequest(code, start_date, date_end));
        }
    }
    return (
        <EURComponent
            getDate={getDate}
            setStart={setStart}
            setEnd={setEnd}
            eur={eur}
            getСoursePeriod={getСoursePeriod}
            eurs={eurs}
            loading={loading}
        />
    )
};
