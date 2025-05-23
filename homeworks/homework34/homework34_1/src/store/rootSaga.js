import { all } from 'redux-saga/effects';
import { watchHotelsSaga } from './hotels/hotelsSaga';

export default function* rootSaga() {
    yield all([
        watchHotelsSaga(),
    ]);
}
