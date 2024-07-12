n.d(t, {
  Z: function() {
return d;
  }
});
var a = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  r = n(481060),
  l = n(154921),
  i = n(689938),
  c = n(624226);

function d(e) {
  let {
onComplete: t
  } = e;
  return (0, a.jsxs)(r.Clickable, {
className: c.container,
onClick: t,
children: [
  (0, a.jsx)(l.Z, {
    size: l.Z.Sizes.SIZE_24,
    className: c.title,
    children: i.Z.Messages.NUF_COMPLETE_TITLE
  }),
  (0, a.jsx)(l.Z, {
    size: l.Z.Sizes.SIZE_24,
    className: o()(c.title, c.subtitle),
    children: i.Z.Messages.NUF_COMPLETE_SUBTITLE
  }),
  (0, a.jsx)(r.Button, {
    color: r.Button.Colors.WHITE,
    onClick: t,
    children: i.Z.Messages.NUF_COMPLETE_CTA
  })
]
  });
}