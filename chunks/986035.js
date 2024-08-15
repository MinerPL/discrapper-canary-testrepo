var i = s(735250),
  n = s(470079),
  a = s(120356),
  o = s.n(a),
  c = s(481060),
  r = s(600164),
  l = s(7422),
  d = s(224499);
class u extends n.PureComponent {
  render() {
let {
  title: e,
  description: t,
  agreement: s,
  disagreement: n,
  onAgree: a,
  onDisagree: u,
  imageClassName: g
} = this.props;
return (0, i.jsxs)(r.Z, {
  className: l.gatedContent,
  justify: r.Z.Justify.CENTER,
  align: r.Z.Align.CENTER,
  direction: r.Z.Direction.VERTICAL,
  children: [
    (0, i.jsx)('div', {
      className: o()(l.image, g)
    }),
    (0, i.jsx)('div', {
      className: o()(l.title, d.marginBottom8),
      children: e
    }),
    (0, i.jsx)('div', {
      className: o()(l.description, d.marginBottom20),
      children: t
    }),
    (0, i.jsxs)(r.Z, {
      justify: r.Z.Justify.CENTER,
      align: r.Z.Align.CENTER,
      grow: 0,
      children: [
        null != n ? (0, i.jsx)(c.Button, {
          className: l.action,
          size: c.ButtonSizes.LARGE,
          color: c.ButtonColors.PRIMARY,
          onClick: u,
          children: n
        }) : null,
        null != s ? (0, i.jsx)(c.Button, {
          className: l.action,
          color: c.Button.Colors.RED,
          size: c.ButtonSizes.LARGE,
          onClick: a,
          children: s
        }) : null
      ]
    })
  ]
});
  }
}
t.Z = u;