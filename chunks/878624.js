"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("884691"),
  a = n("316693"),
  l = n("446674"),
  s = n("716241"),
  o = n("701916"),
  r = n("918105"),
  d = n("939398"),
  u = n("42203"),
  c = n("923959"),
  f = n("26989"),
  h = n("305961"),
  p = n("957255"),
  g = n("18494"),
  m = n("162771"),
  E = n("697218"),
  S = n("901165"),
  v = n("819068"),
  y = n("49111");
class O extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: a,
      postableChannelCount: l
    } = this.props;
    if ((t !== e.selectedGuild || i && !e.isMemberPending) && (0, d.trackWithOverlayMetadata)(y.AnalyticEvents.GUILD_VIEWED, {
        ...i ? {
          is_pending: i,
          preview_enabled: a
        } : {},
        postable_channels: l
      }), null != n && n !== e.selectedChannel) {
      let e = (0, o.collectThreadMetadata)(u.default.getChannel(n), !0);
      (0, d.trackWithOverlayMetadata)(y.AnalyticEvents.CHANNEL_OPENED, {
        ...e,
        ...(0, s.getChannelOpenedMetadata)(n)
      }), (0, r.trackClickstream)(y.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
var C = l.default.connectStores([m.default, g.default, h.default, E.default, S.default, c.default, p.default, f.default], () => {
  var e, t, n;
  let i = m.default.getGuildId(),
    l = g.default.getChannelId(i),
    s = h.default.getGuild(i),
    o = E.default.getCurrentUser(),
    r = null !== (t = c.default.getChannels(null == s ? void 0 : s.id)[c.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
    d = r.length > 0 ? r.filter(e => {
      let {
        channel: t
      } = e;
      return p.default.can(a.combine(y.Permissions.SEND_MESSAGES, y.Permissions.VIEW_CHANNEL), t)
    }).length : 0,
    u = null != o && null != i && null !== (n = null === (e = f.default.getMember(i, o.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: l,
    locked: S.default.isUILocked((0, v.getPID)()),
    hasPreviewEnabled: null == s ? void 0 : s.features.has(y.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: u,
    postableChannelCount: d
  }
})(O)