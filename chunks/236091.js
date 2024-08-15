var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(358221),
  u = n(594190),
  d = n(836157),
  h = n(199902),
  m = n(924557),
  p = n(435064),
  _ = n(354459),
  f = n(689938),
  E = n(318553);
t.Z = e => {
  let {
className: t,
channelId: n
  } = e, a = (0, m.Go)(), {
enableDecoupledGameClipping: g
  } = d.Z.useExperiment({
location: 'ClipsEnabledIndicator'
  }, {
autoTrackExposure: !1
  });
  return (0, l.e7)([
h.Z,
c.Z,
p.Z,
u.ZP
  ], () => {
var e;
if (null == n)
  return !1;
let t = h.Z.getCurrentUserActiveStream(),
  i = null === (e = u.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
return null != t && !!p.Z.getSettings().clipsEnabled && !!a || null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!g || c.Z.getParticipants(n).some(e => e.type === _.fO.USER && p.Z.isClipsEnabledForUser(e.user.id));
  }) ? (0, i.jsxs)(o.TooltipContainer, {
text: f.Z.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
color: o.TooltipColors.GREY,
className: s()(t, E.clipsEnabledIndicator),
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