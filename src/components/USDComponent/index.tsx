import React from 'react';
import { Table, DatePicker, Button } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { LoadingContainer } from '../../containers';
import { СurrencyPeriod, Сurrency } from '../../modules/types';
import style from './USD.module.css'

interface USDComponentProps {
    getDate: (e: any) => void;
    usd: Сurrency | undefined;
    setStart: (e: any) => void;
    setEnd: (e: any) => void;
    getСoursePeriod: () => void;
    usds: СurrencyPeriod[] | undefined;
    loading: boolean;
}

export const USDComponent: React.FC<USDComponentProps> = props => {
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
    const data: СurrencyPeriod[] | undefined = props.usds && props.usds.map(item =>
        ({
            ...item,
            key: item.Date,
        })
    );
    const dataR = props.usds && props.usds.map(item =>
        ({
            ...item,
            date: new Date(item.Date).toISOString().substring(0, 10)
        })
    );
    return (
        <div className={style.wrapper}>
            <h2>USD</h2>
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
                        <div style={{ margin: 5 }}>
                            <DatePicker onChange={(e) => props.getDate(e)} />
                        </div>
                        <div style={{ margin: 5 }}>
                            <span>Курс USD {props.usd ? props.usd.Cur_OfficialRate : '-----'} на дату: {props.usd ? new Date(props.usd.Date).toLocaleDateString() : '-----'}</span>
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
                            props.usds ? <Table columns={columns} dataSource={data} /> : null
                        }
                    </div >
                    <div className={style.info}>
                        {
                            props.usds ?
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
