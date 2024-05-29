import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isLoadingConfig: false,
    isLoadingLark: false,
    isLoadingBank: false,
    isLoadingSMS: false,
    updateInfoBank: {
      bank_id: "",
      template: "compact2",
      account_no: "",
      account_name: "",
      bank_name: "",
    },
    updateInfoLark: {
      app_id: "",
      app_secret: "",
      group_id: "",
      oauth_url: "",
      message_url: "",
    },
    updateInfoSMS: {
      app_key: "",
      template_register: "",
      template_forgot_password: "",
    },
    errorInfoBank: {
      bank_id: "",
      account_no: "",
      template: "",
      account_name: "",
      bank_name: "",
    },
    errorInfoLark: {
      app_id: "",
      app_secret: "",
      group_id: "",
      oauth_url: "",
      message_url: "",
    },
    errorInfoSMS: {
      app_key: "",
      template_register: "",
      template_forgot_password: "",
    },
  },
  reducers: {
    getInfoBanks: (state) => ({
      ...state,
      isLoadingConfig: true,
    }),
    getInfoBankSuccess: (state, action) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoBank: {
        bank_id: action.payload.data.bank_id,
        template: action.payload.data.template,
        account_no: action.payload.data.account_no,
        account_name: action.payload.data.account_name,
        bank_name: action.payload.data.bank_name,
      },
    }),
    getInfoBankFailure: (state) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoBank: {
        bank_id: "",
        template: "compact2",
        account_no: "",
        account_name: "",
        bank_name: "",
      },
    }),
    getInfoLarks: (state) => ({
      ...state,
      isLoadingConfig: true,
    }),
    getInfoLarkSuccess: (state, action) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoLark: {
        app_id: action.payload.data.app_id,
        app_secret: action.payload.data.app_secret,
        group_id: action.payload.data.group_id,
        oauth_url: action.payload.data.oauth_url,
        message_url: action.payload.data.message_url,
      },
    }),
    getInfoLarkFailure: (state) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoLark: {
        app_id: "",
        app_secret: "",
        group_id: "",
        oauth_url: "",
        message_url: "",
      },
    }),
    getInfoOtp: (state) => ({
      ...state,
      isLoadingConfig: true,
    }),
    getInfoOtpSuccess: (state, action) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoSMS: {
        app_key: action.payload.data.app_key,
        template_register: action.payload.data.template_register,
        template_forgot_password: action.payload.data.template_forgot_password,
      },
    }),
    getInfoOtpFailure: (state) => ({
      ...state,
      isLoadingConfig: false,
      updateInfoSMS: {
        app_key: "",
        template_register: "",
        template_forgot_password: "",
      },
    }),
    updateInfoBank: (state) => ({
      ...state,
      isLoadingLark: true,
    }),
    updateInfoBankSuccess: (state) => ({
      ...state,
      isLoadingBank: false,
    }),
    updateInfoBankFailure: (state) => ({
      ...state,
      isLoadingBank: false,
    }),
    updateInfoLark: (state) => ({
      ...state,
      isLoadingLark: true,
    }),
    updateInfoLarkSuccess: (state) => ({
      ...state,
      isLoadingLark: false,
    }),
    updateInfoLarkFailure: (state) => ({
      ...state,
      isLoadingLark: false,
    }),
    updateInfoSMS: (state) => ({
      ...state,
      isLoadingSMS: true,
    }),
    updateInfoSMSSuccess: (state) => ({
      ...state,
      isLoadingSMS: false,
    }),
    updateInfoSMSFailure: (state) => ({
      ...state,
      isLoadingSMS: false,
    }),
    setUpdateInfoBank: (state, action) => ({
      ...state,
      updateInfoBank: action.payload,
    }),
    setUpdateInfoLark: (state, action) => ({
      ...state,
      updateInfoLark: action.payload,
    }),
    setUpdateInfoSMS: (state, action) => ({
      ...state,
      updateInfoSMS: action.payload,
    }),
    setErrorInfoBank: (state, action) => ({
      ...state,
      errorInfoBank: action.payload,
    }),
    setErrorInfoLark: (state, action) => ({
      ...state,
      errorInfoLark: action.payload,
    }),
    setErrorInfoSMS: (state, action) => ({
      ...state,
      errorInfoSMS: action.payload,
    }),
  },
});

export const {
  getInfoBanks,
  getInfoBankSuccess,
  getInfoBankFailure,
  getInfoLarks,
  getInfoLarkSuccess,
  getInfoLarkFailure,
  getInfoOtp,
  getInfoOtpSuccess,
  getInfoOtpFailure,
  updateInfoBank,
  updateInfoBankSuccess,
  updateInfoBankFailure,
  updateInfoLark,
  updateInfoLarkFailure,
  updateInfoLarkSuccess,
  updateInfoSMS,
  updateInfoSMSFailure,
  updateInfoSMSSuccess,
  setUpdateInfoBank,
  setUpdateInfoLark,
  setUpdateInfoSMS,
  setErrorInfoBank,
  setErrorInfoLark,
  setErrorInfoSMS,
} = configSlice.actions;

export default configSlice.reducer;
