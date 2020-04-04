import {call, put, takeEvery} from "redux-saga/effects";
import *  as axios from "axios";
import {setProductList} from "../../actions/products/productListAction";
import {PRODUCTS_API} from "../../additionalData/links/back";
import {GET_PRODUCTS_SAGA} from "../../additionalData/constants/product";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* getProductListSaga() {

    try {
        const result = yield call(
            axios.get,
            PRODUCTS_API
        );
        yield put(setProductList(result.data));

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "warning",
                text: "Product list is empty!"
            }
        ));
    }
}

export function* watchGetProductListSaga() {
    yield takeEvery(GET_PRODUCTS_SAGA, getProductListSaga);
}