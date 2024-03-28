"use strict";
n.r(t);
var l, a = n("442837"),
  s = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {};
class o extends(l = a.default.PersistedStore) {
  initialize(e) {
    null != e && Object.keys(e).forEach(t => {
      "number" == typeof e[t] && (r[t] = e[t])
    })
  }
  getState() {
    return r
  }
  hasViewed(e) {
    return null != r[e]
  }
}
i(o, "displayName", "ViewHistoryStore"), i(o, "persistKey", "ViewHistoryStore"), t.default = new o(s.default, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    r[t] = Date.now()
  }
})