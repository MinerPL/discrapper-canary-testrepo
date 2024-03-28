"use strict";
t.r(a), t.d(a, {
  showInvalidUsernameToast: function() {
    return o
  }
});
var e = t("481060"),
  n = t("689938");

function o() {
  (0, e.showToast)((0, e.createToast)(n.default.Messages.USER_SETTINGS_UPDATE_FAILURE, e.ToastType.FAILURE))
}