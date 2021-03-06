import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {USERS_API} from "../../additionalData/links/back";
import {CLEAR_USER_FORM, SAVE_USER_SAGA} from "../../additionalData/constants/user";

export function* saveUserSaga() {

    const {user} = yield select(state => state.userForm);

    const result = yield call(
        axios.post,
        USERS_API,
        user
    );

    console.log(result);
    yield put({type: CLEAR_USER_FORM});
}

export function* watchSaveUserSaga() {
    yield takeEvery(SAVE_USER_SAGA, saveUserSaga);
}