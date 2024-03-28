"use strict";
i.r(t);
var n, a = i("442837"),
  s = i("570140");

function l(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let o = {};
class r extends(n = a.default.PersistedStore) {
  initialize(e) {
    Object.assign(o, e)
  }
  getState() {
    return o
  }
  shouldShowEducation(e) {
    return !0 !== o[e]
  }
}
l(r, "displayName", "ActivityInviteEducationStore"), l(r, "persistKey", "ActivityInviteEducationExperimentStore"), t.default = new r(s.default, {
  ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
    return o[e.key] = e.value, !0
  }
})