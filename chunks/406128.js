var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(600164),
  u = n(312586);
class c extends i.PureComponent {
  render() {
let {
  note: e,
  title: t,
  action: n,
  className: i
} = this.props;
return (0, r.jsx)('div', {
  className: s()(u.wrapper, i),
  children: (0, r.jsxs)(l.Z, {
    className: u.flexWrapper,
    direction: l.Z.Direction.VERTICAL,
    align: l.Z.Align.CENTER,
    justify: l.Z.Justify.CENTER,
    children: [
      (0, r.jsx)(l.Z.Child, {
        grow: 0,
        className: u.image
      }),
      (0, r.jsxs)(l.Z.Child, {
        grow: 0,
        className: u.text,
        children: [
          (0, r.jsx)(o.H, {
            className: u.title,
            children: t
          }),
          null != e ? (0, r.jsx)('div', {
            className: u.note,
            children: e
          }) : null
        ]
      }),
      n
    ]
  })
});
  }
}
t.Z = c;