n(627341);
var s, r, a = n(735250);
n(470079);
var o = n(120356),
  i = n.n(o),
  c = n(278074),
  l = n(780384),
  d = n(481060),
  u = n(410030),
  f = n(884697),
  p = n(689938),
  g = n(353517);
(r = s || (s = {})).BANNER = 'banner', r.MODAL = 'modal', r.CARD = 'card';
t.Z = e => {
  let {
category: t,
display: n,
className: s
  } = e, r = (0, u.ZP)();
  if (null == t.unpublishedAt)
return null;
  let o = (0, f.OT)(t.unpublishedAt);

  function C(e) {
return (0, a.jsx)(d.TextBadge, {
  disableColor: !0,
  text: e,
  className: i()((0, l.wj)(r) ? g.badgeDark : g.badgeLight, s)
});
  }
  return (0, c.EQ)([
n,
o > 1
  ]).with([
'card',
!0
  ], () => null).with([
'banner',
!0
  ], () => C(p.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
days: o
  }))).with([
'modal',
!0
  ], () => C(p.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
days: o
  }))).otherwise(() => C(p.Z.Messages.COLLECTIBLES_LAST_DAY));
};