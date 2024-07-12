var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(358221),
  d = n(594190),
  u = n(836157),
  h = n(199902),
  p = n(924557),
  m = n(435064),
  _ = n(354459),
  f = n(689938),
  E = n(147466);
t.Z = e => {
  let {
className: t,
channelId: n
  } = e, a = (0, p.Go)(), {
enableDecoupledGameClipping: C
  } = u.Z.useExperiment({
location: 'ClipsEnabledIndicator'
  }, {
autoTrackExposure: !1
  });
  return (0, s.e7)([
h.Z,
c.Z,
m.Z,
d.ZP
  ], () => {
var e;
if (null == n)
  return !1;
let t = h.Z.getCurrentUserActiveStream(),
  i = null === (e = d.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
return null != t && !!m.Z.getSettings().clipsEnabled && !!a || null != i && !!m.Z.getSettings().decoupledClipsEnabled && !!C || c.Z.getParticipants(n).some(e => e.type === _.fO.USER && m.Z.isClipsEnabledForUser(e.user.id));
  }) ? (0, i.jsxs)(o.TooltipContainer, {
text: f.Z.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
color: o.TooltipColors.GREY,
className: l()(t, E.clipsEnabledIndicator),
children: [
  (0, i.jsx)(o.IconBadge, {
    icon: o.ClipsIcon,
    shape: o.BadgeShapes.ROUND_LEFT,
    color: r.Z.unsafe_rawColors.PRIMARY_500.css,
    className: E.clipBadgeIcon
  }),
  (0, i.jsx)(o.TextBadge, {
    text: f.Z.Messages.CLIPS_ENABLED_BADGE,
    shape: o.BadgeShapes.ROUND_RIGHT,
    color: r.Z.unsafe_rawColors.PRIMARY_500.css,
    className: E.clipBadgeText
  })
]
  }) : null;
};