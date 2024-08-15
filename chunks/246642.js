n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  o = n(44315),
  a = n(641033),
  l = n(989830),
  r = n(689938),
  c = n(328933);

function u(e) {
  let {
channelId: t
  } = e, n = (0, l.Z)(t);
  if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)))
return null;
  let {
multiplier: u
  } = n, {
color: d
  } = (0, a.yz)(u);
  return (0, i.jsxs)('div', {
className: c.container,
children: [
  (0, i.jsx)(s.Text, {
    variant: 'text-xs/normal',
    children: r.Z.Messages.POGGERMODE_COMBO_BAR
  }),
  (0, i.jsx)(s.Progress, {
    foregroundColor: (0, o.Lq)(d),
    className: c.progress,
    size: s.Progress.Sizes.LARGE,
    percent: 100 * (0, a.nc)(n),
    animate: !0
  })
]
  });
}