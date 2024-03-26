"use strict";
t.r(n), t.d(n, {
  useCurrentUserCommunicationDisabled: function() {
    return a
  },
  default: function() {
    return s
  },
  userCommunicationDisabled: function() {
    return c
  }
});
var i = t("446674"),
  l = t("26989"),
  u = t("697218"),
  r = t("509");

function a(e) {
  let n = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser());
  return s(null == n ? void 0 : n.id, e)
}

function o(e, n, t) {
  return null != n && null != e ? t.getMember(n, e) : null
}

function d(e) {
  var n;
  return [null !== (n = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== n ? n : null, (0, r.isMemberCommunicationDisabled)(e)]
}

function s(e, n) {
  let t = (0, i.useStateFromStores)([l.default], () => o(e, n, l.default), [n, e]);
  return d(t)
}

function c(e, n) {
  let t = o(e, n, l.default);
  return d(t)
}