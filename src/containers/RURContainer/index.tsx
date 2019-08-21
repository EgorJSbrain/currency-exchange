import React, { useState } from 'react';
import { RURComponent } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectRurGet, selectRursPeriodGet, selectRurLoading, rurGetRequest, rurGetPeriodRequest } from '../../modules/RUR';

export const RURContainer: React.FC = () => {
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const dispatch = useDispatch();
    const rur = useSelector(selectRurGet);
    const rurs = useSelector(selectRursPeriodGet);
    const loading = useSelector(selectRurLoading)
    const code = 170;
    const param_mode = 0;
    const getDate = (e: any) => {
        const date = new Date(e._d).toISOString().substring(0, 10);
        dispatch(rurGetRequest(code, date, param_mode))
    }
    const getСoursePeriod = () => {
        if (!end || !start) {
            return alert('Введите даты')
        } else {
            const date_end = new Date(end).toISOString().substring(0, 10);
            const start_date = new Date(start).toISOString().substring(0, 10);
            dispatch(rurGetPeriodRequest(code, start_date, date_end));
        }
    }
    return (
        <RURComponent
            getDate={getDate}
            setStart={setStart}
            setEnd={setEnd}
            rur={rur}
            getСoursePeriod={getСoursePeriod}
            rurs={rurs}
            loading={loading}
        />
    )
};
