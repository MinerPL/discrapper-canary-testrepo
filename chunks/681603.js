var i = n(470079),
  s = n(149765),
  a = n(442837),
  o = n(367907),
  r = n(731429),
  l = n(188471),
  c = n(318885),
  d = n(592125),
  u = n(984933),
  h = n(271383),
  p = n(430824),
  f = n(496675),
  _ = n(944486),
  g = n(914010),
  m = n(594174),
  E = n(237997),
  Z = n(145597),
  I = n(981631);
class S extends i.Component {
  componentDidUpdate(e) {
if (this.props.locked)
  return null;
let {
  selectedGuild: t,
  selectedChannel: n,
  isMemberPending: i,
  hasPreviewEnabled: s,
  postableChannelCount: a
} = this.props;
if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending) && ((0, c.Q)(I.rMx.GUILD_VIEWED, {
    ...i ? {
      is_pending: i,
      preview_enabled: s
    } : {},
    postable_channels: a
  }), (0, l.a)(I.rMx.GUILD_VIEWED_CLICKSTREAM, {
    guildId: t
  })), null != n && n !== e.selectedChannel) {
  let e = (0, r.K)(d.Z.getChannel(n), !0);
  (0, c.Q)(I.rMx.CHANNEL_OPENED, {
    ...e,
    ...(0, o.$H)(n)
  }), (0, l.a)(I.rMx.CHANNEL_OPENED_CLICKSTREAM, {
    channelId: n
  });
}
  }
  render() {
return null;
  }
}
t.Z = a.ZP.connectStores([
  g.Z,
  _.Z,
  p.Z,
  m.default,
  E.Z,
  u.ZP,
  f.Z,
  h.ZP
], () => {
  var e, t, n;
  let i = g.Z.getGuildId(),
a = _.Z.getChannelId(i),
o = p.Z.getGuild(i),
r = m.default.getCurrentUser(),
l = null !== (t = u.ZP.getChannels(null == o ? void 0 : o.id)[u.sH]) && void 0 !== t ? t : [],
c = l.length > 0 ? l.filter(e => {
  let {
    channel: t
  } = e;
  return f.Z.can(s.$e(I.Plq.SEND_MESSAGES, I.Plq.VIEW_CHANNEL), t);
}).length : 0,
d = null != r && null != i && null !== (n = null === (e = h.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
selectedGuild: i,
selectedChannel: a,
locked: E.Z.isUILocked((0, Z.QF)()),
hasPreviewEnabled: null == o ? void 0 : o.features.has(I.oNc.PREVIEW_ENABLED),
isMemberPending: d,
postableChannelCount: c
  };
})(S);