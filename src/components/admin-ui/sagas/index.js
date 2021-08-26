import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import * as AccountSaga from './users/account';

export default function* () {
    yield all([...Object.values(AccountSaga)].map(fork)); 
    console.log("WELCOME SAGA");
}
