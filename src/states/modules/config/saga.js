import { all, fork, put, takeLatest } from "redux-saga/effects";
import { setBreadcrumb, setTitlePage } from "../app";
import {
  handleGetInfoBanks,
  handleGetInfoLarks,
  handleGetInfoOtp,
} from "../../../api/config";
import {
  setErrorInfoBank,
  setErrorInfoLark,
  setErrorInfoSMS,
  updateInfoBankFailure,
  updateInfoBankSuccess,
  updateInfoLarkFailure,
  updateInfoLarkSuccess,
  updateInfoSMSFailure,
  updateInfoSMSSuccess,
} from ".";
import { getNotification } from "../../../utils/helper";
import _ from "lodash";

function* loadRouteData() {
  yield put(setTitlePage("Cấu hình"));
  yield put(
    setBreadcrumb([
      {
        path: "/",
        name: "Trang chủ",
      },
      {
        path: "/config-management",
        name: "Cấu hình",
      },
    ])
  );
  yield put(handleGetInfoBanks());
  yield put(handleGetInfoLarks());
  yield put(handleGetInfoOtp());
  yield put(setErrorInfoBank({
    bank_id: "",
    account_no: "",
    template: "",
    account_name: "",
    bank_name: "",
  }));
  yield put(setErrorInfoLark({
    app_id: "",
    app_secret: "",
    group_id: "",
    oauth_url: "",
    message_url: "",
  }));
  yield put(setErrorInfoSMS({
    app_key: "",
    template_register: "",
    template_forgot_password: "",
  }));
}

function* handleActions() {
  yield takeLatest(updateInfoBankSuccess, function* () {
    getNotification("success", "Cập nhật tài khoản ngân hàng thành công!");
    yield put(handleGetInfoBanks());
  });

  yield takeLatest(updateInfoBankFailure, function* (action) {
    const errorStatus = action.payload.data.status;
    if (errorStatus === 400) {
      const errors = action.payload.data.detail;

      yield put(
        setErrorInfoBank({
          bank_id: _.get(errors, "bank_id", ""),
          account_no: _.get(errors, "account_no", ""),
          template: _.get(errors, "template", ""),
          account_name: _.get(errors, "account_name", ""),
          bank_name: _.get(errors, "bank_name", ""),
        })
      );
    } else {
      getNotification("error", "Cập nhật tài khoản ngân hàng thất bại!");
    }
  });

  yield takeLatest(updateInfoLarkSuccess, function* () {
    getNotification("success", "Cập nhật thông tin lark thành công!");
    yield put(handleGetInfoLarks());
  });

  yield takeLatest(updateInfoLarkFailure, function* (action) {
    const errorStatus = action.payload.data.status;
    if (errorStatus === 400) {
      const errors = action.payload.data.detail;

      yield put(
        setErrorInfoLark({
          app_id: _.get(errors, 'app_id', ""),
          app_secret: _.get(errors, 'app_secret', ""),
          group_id: _.get(errors, 'group_id', ""),
          oauth_url: _.get(errors, 'oauth_url', ""),
          message_url: _.get(errors, 'message_url', ""),
        })
      );
    } else {
      getNotification("error", "Cập nhật thông tin lark thất bại!");
    }
  });

  yield takeLatest(updateInfoSMSSuccess, function* () {
    getNotification("success", "Cập nhật thông tin OTP thành công!");
    yield put(handleGetInfoOtp());
  });

  yield takeLatest(updateInfoSMSFailure, function* (action) {
    const errorStatus = action.payload.data.status;
    if (errorStatus === 400) {
      const errors = action.payload.data.detail;

      yield put(
        setErrorInfoSMS({
          app_key: _.get(errors, 'app_key', ""),
          template_register: _.get(errors, 'template_register', ""),
          template_forgot_password: _.get(errors, 'template_forgot_password', ""),
        })
      );
    } else {
      getNotification("error", "Cập nhật thông tin OTP thất bại!");
    }
  });
}

export default function* loadConfigSaga() {
  yield all([
    fork(loadRouteData), 
    fork(handleActions)
  ]);
}
