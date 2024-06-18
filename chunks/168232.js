"use strict";
n.d(t, {
  G: function() {
    return c
  },
  QI: function() {
    return _
  },
  VR: function() {
    return d
  },
  jX: function() {
    return l
  }
}), n(789020);
var i = n(512722),
  r = n.n(i),
  s = n(630388),
  o = n(48541),
  a = n(981631);

function l(e, t, n) {
  !e && void 0 !== t && r()(n === t, "Premium type should not change for non-staff users")
}

function u(e) {
  return "production" === o.C.TEST && null != e ? e : "production"
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  return u(t) === o.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.C.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  return u(t) === o.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.C.STAGING || null != e && (!!(null != e.flags && (0, s.yE)(e.flags, a.xW$.STAFF)) || null != e.personal_connection_id)
}

function c(e) {
  return void 0 !== e ? e === a.WND ? null : e : e
}