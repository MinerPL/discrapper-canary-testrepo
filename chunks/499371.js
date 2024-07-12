var n = i(735250),
  s = i(470079),
  a = i(120356),
  o = i.n(a),
  c = i(481060),
  r = i(285952),
  l = i(1902),
  d = i(549856);
class u extends s.PureComponent {
  render() {
let {
  title: e,
  description: t,
  agreement: i,
  disagreement: s,
  onAgree: a,
  onDisagree: u,
  imageClassName: g
} = this.props;
return (0, n.jsxs)(r.Z, {
  className: l.gatedContent,
  justify: r.Z.Justify.CENTER,
  align: r.Z.Align.CENTER,
  direction: r.Z.Direction.VERTICAL,
  children: [
    (0, n.jsx)('div', {
      className: o()(l.image, g)
    }),
    (0, n.jsx)('div', {
      className: o()(l.title, d.marginBottom8),
      children: e
    }),
    (0, n.jsx)('div', {
      className: o()(l.description, d.marginBottom20),
      children: t
    }),
    (0, n.jsxs)(r.Z, {
      justify: r.Z.Justify.CENTER,
      align: r.Z.Align.CENTER,
      grow: 0,
      children: [
        null != s ? (0, n.jsx)(c.Button, {
          className: l.action,
          size: c.ButtonSizes.LARGE,
          color: c.ButtonColors.PRIMARY,
          onClick: u,
          children: s
        }) : null,
        null != i ? (0, n.jsx)(c.Button, {
          className: l.action,
          color: c.Button.Colors.RED,
          size: c.ButtonSizes.LARGE,
          onClick: a,
          children: i
        }) : null
      ]
    })
  ]
});
  }
}
t.Z = u;