n.d(t, {
  RB: function() {
return d;
  },
  a3: function() {
return o;
  },
  hn: function() {
return c;
  },
  mH: function() {
return u;
  },
  r: function() {
return l;
  }
});
var r = n(695346),
  i = n(709054),
  a = n(497089),
  s = n(925928);
let o = function(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
return (0, s.ZP)({
  since: e,
  getFormatter: t ? s.d0 : s.Zk
});
  },
  l = (e, t) => e.acked || t !== r.uL && i.default.compare(t, e.id) >= 0;

function u(e, t) {
  let n = i.default.fromTimestamp(new Date(t).getTime());
  return {
acked: !1,
forceUnacked: !0,
other_user: e,
kind: 'notification-center-item',
local_id: 'incoming_friend_requests_'.concat(e.id, '_').concat(n),
deeplink: 'https://discord.com/users/'.concat(e.id),
type: a.O7.INCOMING_FRIEND_REQUESTS,
id: n
  };
}

function c(e) {
  return {
acked: !1,
enableBadge: !0,
id: i.default.fromTimestamp(new Date().getTime()),
kind: 'notification-center-item',
local_id: 'mobile_update_available_'.concat(e.build),
type: a.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
deeplink: e.urls.install.toString()
  };
}
let d = e => e.type === a.DY.RECENT_MENTION || e.type === a.DY.REPLY_MENTION;