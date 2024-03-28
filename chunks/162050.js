"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("287734"),
  r = n("770471"),
  o = n("592125"),
  u = n("306680"),
  d = n("944486"),
  c = n("594174"),
  f = n("153124"),
  h = n("436088"),
  C = n("51144"),
  p = n("603592"),
  m = n("674552"),
  g = n("689938");

function E() {
  var e;
  let t = (0, f.useUID)(),
    [n, E] = (0, a.useStateFromStoresArray)([d.default, o.default], () => [o.default.getChannel(d.default.getVoiceChannelId()), d.default.getCurrentlySelectedChannelId(null)]),
    S = (0, a.useStateFromStores)([u.default], () => null != n ? u.default.getMentionCount(n.id) : 0),
    _ = (0, a.useStateFromStores)([c.default], () => c.default.getUser(null == n ? void 0 : n.ownerId)),
    I = null !== (e = C.default.getGlobalName(_)) && void 0 !== e ? e : C.default.getUserTag(_),
    {
      canViewBroadcasts: N
    } = r.default.useExperiment({
      location: "broadcast_button_guilds_bar_no_track"
    }, {
      autoTrackExposure: !1
    }),
    T = null == n ? void 0 : n.isBroadcastChannel(),
    A = T && E === (null == n ? void 0 : n.id);
  return T && N ? (0, l.jsx)(p.default, {
    id: t,
    onClick: () => {
      T && null != n && i.default.selectPrivateChannel(n.id)
    },
    icon: h.default,
    tooltip: null != I ? g.default.Messages.BROADCASTING_CHANNEL_NAME.format({
      name: I
    }) : void 0,
    selected: A,
    upperBadge: (0, l.jsx)(s.Avatar, {
      size: s.AvatarSizes.SIZE_16,
      src: null == _ ? void 0 : _.getAvatarURL(null, 16),
      "aria-label": I
    }),
    lowerBadge: S > 0 ? (0, m.renderMentionBadge)(S) : null
  }) : null
}