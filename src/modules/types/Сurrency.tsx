export interface Сurrency {
    Cur_ID : number;
    Date : Date;
    Cur_Abbreviation : string;
    Cur_Scale : number;
    Cur_Name : string;
    Cur_OfficialRate : number;
}

export interface СurrencyPeriod {
    Cur_ID: number;
    Cur_OfficialRate: number;
    Date: Date;
}