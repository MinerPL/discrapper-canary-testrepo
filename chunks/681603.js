"use strict";
var i = n(470079),
  s = n(149765),
  l = n(442837),
  a = n(367907),
  o = n(731429),
  r = n(188471),
  d = n(318885),
  c = n(592125),
  u = n(984933),
  h = n(271383),
  p = n(430824),
  f = n(496675),
  E = n(944486),
  Z = n(914010),
  g = n(594174),
  m = n(237997),
  _ = n(145597),
  I = n(981631);
class S extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: s,
      postableChannelCount: l
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending) && ((0, d.Q)(I.rMx.GUILD_VIEWED, {
        ...i ? {
          is_pending: i,
          preview_enabled: s
        } : {},
        postable_channels: l
      }), (0, r.a)(I.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })), null != n && n !== e.selectedChannel) {
      let e = (0, o.K)(c.Z.getChannel(n), !0);
      (0, d.Q)(I.rMx.CHANNEL_OPENED, {
        ...e,
        ...(0, a.$H)(n)
      }), (0, r.a)(I.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
t.Z = l.ZP.connectStores([Z.Z, E.Z, p.Z, g.default, m.Z, u.ZP, f.Z, h.ZP], () => {
  var e, t, n;
  let i = Z.Z.getGuildId(),
    l = E.Z.getChannelId(i),
    a = p.Z.getGuild(i),
    o = g.default.getCurrentUser(),
    r = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
    d = r.length > 0 ? r.filter(e => {
      let {
        channel: t
      } = e;
      return f.Z.can(s.$e(I.Plq.SEND_MESSAGES, I.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    c = null != o && null != i && null !== (n = null === (e = h.ZP.getMember(i, o.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: l,
    locked: m.Z.isUILocked((0, _.QF)()),
    hasPreviewEnabled: null == a ? void 0 : a.features.has(I.oNc.PREVIEW_ENABLED),
    isMemberPending: c,
    postableChannelCount: d
  }
})(S)