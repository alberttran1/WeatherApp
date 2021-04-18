import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'


function* addAsync(cityNameHolder){
    try {
        const { data } = yield call(axios.get,`https://api.openweathermap.org/data/2.5/weather?q=${cityNameHolder.payload}&appid=c3f905ff0a6cf9e4483e3643929c42da`);
        yield put({ type: 'ADD_SUCCESS', payload: data});
    } catch (error) {
        console.log(error);
    }
}


export function* watchDataAdd(){
    yield takeEvery('ADD', addAsync);
}

export default function* rootSaga() {
    yield all([
        watchDataAdd(),
    ]);
}