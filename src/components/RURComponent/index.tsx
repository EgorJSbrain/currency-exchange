import React from 'react';
import { Table, Button, DatePicker } from 'antd';
import { LoadingContainer } from '../../containers';
import { СurrencyPeriod, Сurrency } from '../../modules/types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import style from './RUR.module.css';

interface RURComponentProps {
    getDate: (e: any) => void;
    rur: Сurrency | undefined;
    setStart: (e: any) => void;
    setEnd: (e: any) => void;
    getСoursePeriod: () => void;
    rurs: СurrencyPeriod[] | undefined;
    loading: boolean;
}

export const RURComponent: React.FC<RURComponentProps> = props => {
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
    const dataR = props.rurs && props.rurs.map(item =>
        ({
            ...item,
            date: new Date(item.Date).toISOString().substring(0, 10)
        })
    );
    const data: СurrencyPeriod[] | undefined = props.rurs && props.rurs.map(item =>
        ({
            ...item,
            key: item.Date,
        })
    );
    return (
        <div className={style.wrapper}>
            <h2>RUR</h2>
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
                            <span>Курс RUR {props.rur ? props.rur.Cur_OfficialRate : '-----'} на дату: {props.rur ? new Date(props.rur.Date).toLocaleDateString() : '-----'}</span>
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
                            props.rurs ? <Table columns={columns} dataSource={data} style={{ margin: 5 }}/> : null
                        }
                    </div >
                    <div className={style.info}>
                        {
                            props.rurs ?
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






{/* <div className={style.wrapper}>
            
            <span>RUR</span>
            <span>
                {
                    props.loading ? <LoadingContainer /> : null
                }
            </span>
            <div>
                <div>
                    <span>Выберите дату: </span>
                    <span><DatePicker onChange={(e) => props.getDate(e)} /></span>
                </div>
                <div>
                    <span>Курс RUR {props.rur && props.rur.Cur_OfficialRate} на дату: {props.rur && new Date(props.rur.Date).toLocaleDateString()}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Выберите период: </span>
                    <span><DatePicker
                        showTime
                        format="YYYY-MM-DD"
                        placeholder="Start"
                        onChange={(e) => props.setStart(e)}
                    />
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD"
                            placeholder="End"
                            onChange={(e) => props.setEnd(e)}
                        />
                    </span>
                    <div>
                        <Button onClick={() => props.getСoursePeriod()}>
                            Показать
                        </Button>
                    </div>
                    <div>
                        {
                            props.rurs ? <Table columns={columns} dataSource={data} /> : null
                        }
                    </div>
                </div>
            </div>
        </div> */}