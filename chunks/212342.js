n(47120), n(789020);
var i, s, a, r, l = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(314897),
  d = n(592125),
  _ = n(496675),
  E = n(594174),
  I = n(630388),
  m = n(110630),
  T = n(981631);
let h = 'ChannelFollowingBumpChannels',
  N = new Set(),
  C = new Set();
class f extends(i = l.ZP.Store) {
  initialize() {
this.waitFor(u.default), N = new Set(o.K.get(h));
  }
  shouldShowBump(e) {
return C.has(e);
  }
}
r = 'ChannelFollowingPublishBumpStore', (a = 'displayName') in(s = f) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = new f(c.Z, {
  MESSAGE_CREATE: function(e) {
var t;
let {
  channelId: n,
  message: i,
  optimistic: s
} = e;
if (s || N.has(n))
  return !1;
let a = d.Z.getChannel(n),
  r = E.default.getCurrentUser();
if (!(null != a && a.type === T.d4z.GUILD_ANNOUNCEMENT && (0, m.Z)(i) && (null != r && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === r.id ? _.Z.can(T.Plq.SEND_MESSAGES, a) : _.Z.can(T.Plq.MANAGE_MESSAGES, a)) && !I.yE(Number(i.flags), T.iLy.CROSSPOSTED)))
  return !1;
C.add(i.id);
  },
  MESSAGE_UPDATE: function(e) {
let {
  message: t
} = e;
C.has(t.id) && I.yE(Number(t.flags), T.iLy.CROSSPOSTED) && C.delete(t.id);
  },
  CHANNEL_SELECT: function(e) {
C.clear();
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
let {
  messageId: t
} = e;
C.delete(t);
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
let {
  channelId: t
} = e;
N.add(t), o.K.set(h, N), C.clear();
  }
});