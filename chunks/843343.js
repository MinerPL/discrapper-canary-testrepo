n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  r = n(481060),
  a = n(299379),
  s = n(486472),
  o = n(430824),
  c = n(682662),
  u = n(662146),
  d = n(981631),
  h = n(689938),
  p = n(673732);

function _() {
  let e = (0, l.e7)([
s.Z,
o.Z
  ], () => s.Z.unavailableGuilds.filter(e => null == o.Z.getGuild(e)).length);
  return e <= 0 ? null : (0, i.jsx)(c.H, {
children: (0, i.jsx)(u.Z, {
  text: h.Z.Messages.PARTIAL_OUTAGE.format({
    count: e
  }),
  color: r.Tooltip.Colors.RED,
  children: (0, i.jsx)(r.Anchor, {
    href: (0, a.Z)(d.RK.TWITTER),
    target: '_blank',
    className: p.guildsError,
    'aria-label': h.Z.Messages.PARTIAL_OUTAGE_A11Y.format({
      count: e
    }),
    children: (0, i.jsx)('span', {
      'aria-hidden': !0,
      className: p.errorInner,
      children: '!'
    })
  })
})
  });
}