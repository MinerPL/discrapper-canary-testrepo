"use strict";
t.r(r), t.d(r, {
  clearAll: function() {
    return o
  },
  toggle: function() {
    return i
  }
});
var a = t("570140"),
  n = t("91311");

function i(e, r) {
  let t = "boolean" == typeof r ? r : !n.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: t
  })
}

function o() {
  for (let e in n.default.all()) i(e, !1)
}