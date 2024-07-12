n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  o = n(607070),
  c = n(254238),
  d = n(689938),
  u = n(120164);

function h(e) {
  let {
height: t
  } = e, a = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: u.root,
children: [
  (0, i.jsx)(r.LottieAnimation, {
    importData: () => n.e('70036').then(n.t.bind(n, 141923, 19)).then(e => {
      let {
        default: t
      } = e;
      return t;
    }),
    shouldAnimate: !a,
    className: l()(u.art, {
      [u.hidden]: t <= 280
    })
  }),
  (0, i.jsx)(r.Heading, {
    className: u.header,
    variant: 'heading-md/bold',
    children: d.Z.Messages.PLAYSTATION_TRANSFERRING
  }),
  (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: d.Z.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({
      onCancel: c.s6
    })
  })
]
  });
}