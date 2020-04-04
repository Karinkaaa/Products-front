import {call, put, select, takeEvery} from "redux-saga/effects";
import * as axios from "axios";
import {API_KEY, GET_NEWS_SAGA} from "../../additionalData/constants/news";
import {NEWS_API} from "../../additionalData/links/back";
import {setNews} from "../../actions/news/newsAction";
import {setMessageInfo} from "../../actions/info/infoAction";

export function* getNewsSaga() {

    try {
        const {country, category, pageSize} = yield select(state => state.news);

        const result = yield call(
            axios.get,
            NEWS_API,
            {
                params: {
                    pageSize: pageSize ? pageSize : undefined,
                    category: category.value,
                    country: country.code.toLowerCase(),
                    from: new Date().toJSON().slice(0, 10),
                    apiKey: API_KEY
                }
            }
        );

        const type = "success";
        const text = "Request completed successfully!";

        yield put(setMessageInfo({type, text}));
        yield put(setNews(result.data.articles));

    } catch (e) {
        yield put(setMessageInfo(
            {
                type: "error",
                text: "Request failed! Error occurred!"
            }
        ));
    }
}

export function* watchGetNewsSaga() {
    yield takeEvery(GET_NEWS_SAGA, getNewsSaga);
}