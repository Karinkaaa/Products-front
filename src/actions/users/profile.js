import {SET_CURRENT_USER} from "../../additionalData/constants/user";

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
});

export const logOut = () => ({
    type: SET_CURRENT_USER,
    user: null
});