"use strict";
n.r(t), n.d(t, {
  canViewInviteModal: function() {
    return u
  }
});
var l = n("49111");

function u(e, t, n, u) {
  let i = null != n ? n : t,
    a = null != i && e.can(l.Permissions.CREATE_INSTANT_INVITE, i);
  return a || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
}