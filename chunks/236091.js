"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("692547"),
  o = n("481060"),
  u = n("358221"),
  d = n("594190"),
  c = n("836157"),
  f = n("199902"),
  h = n("529653"),
  m = n("26290"),
  p = n("924557"),
  E = n("435064"),
  C = n("354459"),
  g = n("689938"),
  S = n("583507");
t.default = e => {
  let {
    className: t,
    channelId: n
  } = e, l = (0, p.useEnableClips)(), {
    enableDecoupledGameClipping: _
  } = c.default.useExperiment({
    location: "ClipsEnabledIndicator"
  }, {
    autoTrackExposure: !1
  });
  return (0, i.useStateFromStores)([f.default, u.default, E.default, d.default], () => {
    var e;
    if (null == n) return !1;
    let t = f.default.getCurrentUserActiveStream(),
      a = null === (e = d.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
    return null != t && !!E.default.getSettings().clipsEnabled && !!l || null != a && !!E.default.getSettings().decoupledClipsEnabled && !!_ || u.default.getParticipants(n).some(e => e.type === C.ParticipantTypes.USER && E.default.isClipsEnabledForUser(e.user.id))
  }) ? (0, a.jsxs)(o.TooltipContainer, {
    text: g.default.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
    color: o.TooltipColors.GREY,
    className: s()(t, S.clipsEnabledIndicator),
    children: [(0, a.jsx)(m.IconBadge, {
      icon: h.default,
      shape: m.BadgeShapes.ROUND_LEFT,
      color: r.default.unsafe_rawColors.PRIMARY_500.css,
      className: S.clipBadgeIcon
    }), (0, a.jsx)(m.TextBadge, {
      text: g.default.Messages.CLIPS_ENABLED_BADGE,
      shape: m.BadgeShapes.ROUND_RIGHT,
      color: r.default.unsafe_rawColors.PRIMARY_500.css,
      className: S.clipBadgeText
    })]
  }) : null
}