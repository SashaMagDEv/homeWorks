import { call, put, takeLatest } from 'redux-saga/effects';
import axiosClient from '@/services/axiosClient';
import {
    fetchHotelsRequest,
    fetchHotelsSuccess,
    fetchHotelsFailure,
} from './hotelsSlice';
import { push } from 'redux-first-history';

function* fetchHotelsSaga(action) {
    try {
        const response = yield call(axiosClient.get, '/hotels', {
            params: action.payload,
        });
        yield put(fetchHotelsSuccess(response.data));
        yield put(push('/hotels'));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

export function* watchHotelsSaga() {
    yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
}
