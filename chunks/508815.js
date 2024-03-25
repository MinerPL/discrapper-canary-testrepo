"use strict";
t.r(r), t.d(r, {
  toggle: function() {
    return i
  },
  clearAll: function() {
    return o
  }
});
var a = t("913144"),
  n = t("916523");

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