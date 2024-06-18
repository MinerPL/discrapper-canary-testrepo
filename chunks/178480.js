"use strict";
n.d(t, {
  $N: function() {
    return E
  },
  RB: function() {
    return c
  },
  a3: function() {
    return l
  },
  hn: function() {
    return d
  },
  mH: function() {
    return _
  },
  r: function() {
    return u
  }
});
var i = n(695346),
  r = n(709054),
  s = n(360629),
  o = n(497089),
  a = n(925928);
let l = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.ZP)({
      since: e,
      getFormatter: t ? a.d0 : a.Zk
    })
  },
  u = (e, t) => e.acked || t !== i.uL && r.default.compare(t, e.id) >= 0;

function _(e, t) {
  let n = r.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: !1,
    forceUnacked: !0,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: o.O7.INCOMING_FRIEND_REQUESTS,
    id: n
  }
}

function d(e) {
  return {
    acked: !1,
    enableBadge: !0,
    id: r.default.fromTimestamp(new Date().getTime()),
    kind: "notification-center-item",
    local_id: "mobile_update_available_".concat(e.build),
    type: o.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
    deeplink: e.urls.install.toString()
  }
}
let c = e => e.type === o.DY.RECENT_MENTION || e.type === o.DY.REPLY_MENTION;

function E() {
  return (0, s.Fl)()
}