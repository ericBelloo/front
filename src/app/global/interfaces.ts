import { onErrorResumeNext } from "rxjs";


export interface ResultList{
    count: number;
    next: any;
    previous: any;
    results: any[];
}
