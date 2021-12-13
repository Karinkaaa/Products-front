import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setUsers } from "../../actions/users";
import { USERS_API } from "../../utils/links/back";
import { GET_USERS_SAGA } from "../../utils/constants/usersSaga";
import { setMessageInfo } from "../../actions/info";

export function* getUserListSaga() {
    try {
        const result = yield call(
            axios.get,
            USERS_API
        );

        yield put(setUsers(result.data));
    } catch (e) {
        yield put(setMessageInfo({
            type: "warning",
            text: "User list is empty!"
        }));
    }
}

export function* watchGetUserListSaga() {
    yield takeEvery(GET_USERS_SAGA, getUserListSaga);
}