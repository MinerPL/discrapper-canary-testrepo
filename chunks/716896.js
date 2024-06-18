"use strict";
n(47120);
var i = n(147913),
  r = n(592125),
  s = n(109590),
  o = n(176505);
class a extends i.Z {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, o.AB)(t)) return;
    let n = r.Z.getChannel(t);
    null != n && n.isForumLikeChannel() && (0, s.EB)(n)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new a