"use strict";
n.r(t), n.d(t, {
  InvitePropertiesType: function() {
    return a
  }
});
var l, a, s = n("493683"),
  i = n("904245"),
  r = n("710845"),
  o = n("592125"),
  u = n("70956"),
  d = n("651655");
let c = 1 * u.default.Millis.SECOND + 10;
(l = a || (a = {}))[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL";
class I extends d.default {
  _sendInvite(e, t, n, l, a) {
    i.default.sendInvite(e.id, t, n, l).then(() => a(null, !0), () => a(null, !1))
  }
  drain(e, t) {
    let {
      location: n,
      suggested: l
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, l, t);
        break;
      case 1:
        s.default.ensurePrivateChannel(e.user.id).then(a => {
          let s = o.default.getChannel(a);
          null != s && this._sendInvite(s, e.inviteKey, n, l, t)
        }, () => t(null, !1))
    }
  }
  constructor() {
    super(new r.default("InviteQueue"), c)
  }
}
t.default = new I