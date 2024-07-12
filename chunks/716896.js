n(47120);
var r = n(147913),
  i = n(592125),
  a = n(109590),
  o = n(176505);
class s extends r.Z {
  handleChannelPreload(e) {
let {
  channelId: t
} = e;
if ((0, o.AB)(t))
  return;
let n = i.Z.getChannel(t);
null != n && n.isForumLikeChannel() && (0, a.EB)(n);
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  CHANNEL_PRELOAD: this.handleChannelPreload
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new s();