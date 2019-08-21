import React from 'react';
import { DatePicker, Button, Table } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Сurrency, СurrencyPeriod } from '../../modules/types';
import style from './EUR.module.css';
import { LoadingContainer } from '../../containers';

interface EURComponentProps {
    getDate: (e: any) => void;
    eur: Сurrency | undefined;
    setStart: (e: any) => void;
    setEnd: (e: any) => void;
    getСoursePeriod: () => void;
    eurs: СurrencyPeriod[] | undefined;
    loading: boolean;
}

export const EURComponent: React.FC<EURComponentProps> = props => {
    const columns = [
        {
            title: 'Курс',
            dataIndex: 'Cur_OfficialRate',
            key: 'Cur_OfficialRate',
        },
        {
            title: 'Дата',
            dataIndex: 'Date',
            key: 'Date',
            render: (record: Date) => new Date(record).toLocaleDateString(),
        },
    ];
    const dataR = props.eurs && props.eurs.map(item =>
        ({
            ...item,
            date: new Date(item.Date).toISOString().substring(0, 10)
        })
    );
    const data: СurrencyPeriod[] | undefined = props.eurs && props.eurs.map(item =>
        ({
            ...item,
            key: item.Date,
        })
    );
    return (
        <div className={style.wrapper}>
            <h2>EUR</h2>
            <div className={style.setting}>
                <div>
                    {
                        props.loading ? <LoadingContainer /> : null
                    }
                </div>
                    <div className={style.currencyblock}>
                        <div style={{ margin: 5 }}>
                            Выберите дату:
                        </div>
                        <div>
                            <DatePicker onChange={(e) => props.getDate(e)} />
                        </div>
                        <div style={{ margin: 5 }}>
                            <span>Курс EUR {props.eur ? props.eur.Cur_OfficialRate : '-----'} на дату: {props.eur ? new Date(props.eur.Date).toLocaleDateString() : '-----'}</span>
                        </div>
                        <div>
                            <div style={{ margin: 5 }} className={style.dateblock}>
                                <span>Выберите период: </span>
                                <span style={{ margin: 5 }}>
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD"
                                        placeholder="Start"
                                        onChange={(e) => props.setStart(e)}
                                        style={{ margin: 5 }}
                                    />
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD"
                                        placeholder="End"
                                        onChange={(e) => props.setEnd(e)}
                                        style={{ margin: 5 }}
                                    />
                                </span>
                                <div>
                                    <Button onClick={() => props.getСoursePeriod()}>
                                        Показать
                                    </Button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div className={style.info2}>
                    
                    <div className={style.table}>
                        {
                            props.eurs ? <Table columns={columns} dataSource={data} /> : null
                        }
                    </div >
                    <div className={style.info}>
                        {
                            props.eurs ?
                                <LineChart
                                    width={1000}
                                    height={640}
                                    data={dataR}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey='date' interval={1} />
                                    <YAxis type="number" domain={['dataMin', 'dataMax']} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="Cur_OfficialRate" stroke="#8884d8" />
                                </LineChart> :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};
