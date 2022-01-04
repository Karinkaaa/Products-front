import { CHANGE_FORM_DATA, CLEAR_FORM, SET_FORM_DATA } from "../../utils/constants/form";

export const setFormData = (formKey, formData) => ({
    type: SET_FORM_DATA,
    formKey,
    formData
});

export const changeFormData = (formKey, key, value) => ({
    type: CHANGE_FORM_DATA,
    formKey,
    key,
    value
});

export const clearForm = (formKey) => ({
    type: CLEAR_FORM,
    formKey
});