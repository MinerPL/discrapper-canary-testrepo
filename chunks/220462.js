"use strict";
t.r(r), t.d(r, {
  toggle: function() {
    return i
  }
});
var a = t("913144"),
  n = t("676574");

function i(e, r) {
  let t = "boolean" == typeof r ? r : !n.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: t
  })
}