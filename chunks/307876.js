"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(232567),
  r = n(147913),
  s = n(592125),
  o = n(944486),
  a = n(594174),
  l = n(894257),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = !1;

function c(e) {
  let t = a.default.getCurrentUser();
  if (null == t) return;
  let n = o.Z.getChannelId(),
    i = s.Z.getDMFromUserId(l.I);
  if (!t.hasUrgentMessages() || i === n) return E({
    channelId: n
  });
  !d && (d = !0, e())
}

function E(e) {
  let {
    channelId: t
  } = e, n = a.default.getCurrentUser(), r = t === s.Z.getDMFromUserId(l.I);
  null != n && n.hasUrgentMessages() && r && (d = !1, i.mB(u.xW$.HAS_UNREAD_URGENT_MESSAGES, !1))
}
class I extends r.Z {
  constructor(e) {
    super(), _(this, "handleShowUrgentMessageAlert", void 0), _(this, "actions", void 0), this.handleShowUrgentMessageAlert = e, this.actions = {
      POST_CONNECTION_OPEN: () => c(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => c(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: E
    }
  }
}