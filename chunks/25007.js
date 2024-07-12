var i = n(735250),
  a = n(470079),
  l = n(481369),
  s = n(944103),
  r = n(946050),
  o = n(256413),
  c = n(292853),
  d = n(359565),
  u = n(226027);
t.Z = a.memo(function(e) {
  let {
channel: t,
narrow: n
  } = e, a = (0, o.Z)(t), h = (0, l.Z)(), {
canRenderNotice: p,
recordNoticeRender: m
  } = (0, s.Z)(t);
  return t.isArchivedLockedThread() ? (0, i.jsx)(d.s, {
channel: t,
narrow: n
  }) : t.isLockedThread() ? (0, i.jsx)(d.q, {
channel: t,
narrow: n
  }) : a && h.includes(u.E.OPT_IN_CHANNEL) ? (0, i.jsx)(c.Z, {
channel: t,
narrow: n
  }) : p ? (0, i.jsx)(r.Z, {
channel: t,
onChannelChange: m
  }) : null;
});