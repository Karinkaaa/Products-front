import {call, put, select, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setCurrentUser} from "../../actions/users/profile";
import {USERS_API} from "../../additionalData/links/back";
import {CLEAR_SIGN_IN, LOG_IN_SAGA} from "../../additionalData/constants/auth";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* signInSaga() {

    const {email, password} = yield select(state => state.signIn);

    const result = yield call(
        axios.get,
        USERS_API + "/profile",
        {
            params: {
                email,
                password
            }
        }
    );

    if (!result.data) {
        const type = "error";
        const text = "Your login or password are not valid!";
        yield put(setMessageInfo({type, text}));
    }

    yield put(setCurrentUser(result.data));
    yield put({type: CLEAR_SIGN_IN});
}

export function* watchSignInSaga() {
    yield takeEvery(LOG_IN_SAGA, signInSaga);
}