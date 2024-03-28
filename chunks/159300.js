"use strict";
n.r(t), n.d(t, {
  canViewInviteModal: function() {
    return i
  }
});
var l = n("981631");

function i(e, t, n, i) {
  let a = null != n ? n : t;
  return null != a && e.can(l.Permissions.CREATE_INSTANT_INVITE, a) || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
}