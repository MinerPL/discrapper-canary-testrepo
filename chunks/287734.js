n.r(t);
var r = n(570140),
  i = n(254238),
  a = n(258609);
n(473241);
var o = n(788983),
  s = n(703656),
  l = n(700615),
  u = n(592125),
  c = n(731290),
  d = n(131951),
  _ = n(944486),
  E = n(914010),
  f = n(594174),
  h = n(934415),
  p = n(604151),
  m = n(981631);
t.default = {
  selectChannel(e) {
let {
  guildId: t,
  channelId: n,
  messageId: i,
  jumpType: a,
  preserveDrawerState: o,
  source: s
} = e;
r.Z.dispatch({
  type: 'CHANNEL_SELECT',
  guildId: t === m.ME ? null : t,
  channelId: n,
  messageId: i,
  jumpType: a,
  preserveDrawerState: o,
  source: s
});
  },
  selectPrivateChannel(e) {
(0, s.uL)(m.Z5c.CHANNEL(m.ME, e));
  },
  selectVoiceChannel(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  i = u.Z.getChannel(e),
  a = null == i ? void 0 : i.getGuildId();
if ((null == i ? void 0 : i.isGuildVocal()) && (null == i ? void 0 : i.isNSFW()) && (!(null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !c.Z.didAgree(a))) {
  (0, s.uL)(m.Z5c.CHANNEL(a, e));
  return;
}
d.Z.isSupported() && (null != e && d.Z.getMediaEngine().interact(), (0, p.h)(e, a, n, r));
  },
  disconnect() {
let e = a.Z.getRemoteSessionId();
if (null != e && i._(e), (0, l.ur)())
  this.selectVoiceChannel(null);
else {
  let e = u.Z.getChannel(_.Z.getChannelId()),
    t = _.Z.getChannelId() === _.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
  if (this.selectVoiceChannel(null), o.xv(m.KJ3.CHANNEL_CALL_POPOUT), t) {
    let e = E.Z.getGuildId();
    null != e && (0, s.uL)((0, h.LY)(e));
  }
}
  }
};