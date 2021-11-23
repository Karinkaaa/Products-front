import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setCurrentUser } from "../../actions/profile";
import { setMessageInfo } from "../../actions/info";
import { USERS_API } from "../../additionalData/links/back";
import { CLEAR_SIGN_IN } from "../../additionalData/constants/auth";
import { LOG_IN_SAGA } from "../../additionalData/constants/authSaga";

export function* signInSaga() {
    try {
        const { email, password } = yield select(state => state.signIn);

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

        if (result.data) {
            yield put(setMessageInfo({ type: "success", text: "Login OK" }));
            yield put(setCurrentUser(result.data));
        } else {
            yield put(setMessageInfo(
                {
                    type: "error",
                    text: "Your login or password are not valid!"
                }
            ));
        }
    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: e.message
            }
        ));
    }

    yield put({ type: CLEAR_SIGN_IN });
}

export function* watchSignInSaga() {
    yield takeEvery(LOG_IN_SAGA, signInSaga);
}