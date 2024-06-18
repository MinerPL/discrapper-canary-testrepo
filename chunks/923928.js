"use strict";
var i = n(570140);
t.Z = {
  clearVADWarning() {
    i.Z.dispatch({
      type: "PERMISSION_CLEAR_VAD_WARNING"
    })
  },
  clearSuppressWarning() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    i.Z.dispatch({
      type: "PERMISSION_CLEAR_SUPPRESS_WARNING",
      forever: e
    })
  },
  clearPTTAdminWarning() {
    i.Z.dispatch({
      type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING"
    })
  },
  requestElevatedProcess(e) {
    i.Z.dispatch({
      type: "PERMISSION_REQUEST_ELEVATED_PROCESS",
      pid: e
    })
  },
  clearElevatedProcess() {
    i.Z.dispatch({
      type: "PERMISSION_CLEAR_ELEVATED_PROCESS"
    })
  },
  continueNonelevatedProcess(e) {
    i.Z.dispatch({
      type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS",
      pid: e
    })
  }
}