var i, a, s, r, l = n(735250),
  o = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(481060),
  _ = n(689938),
  E = n(20356);
let I = {
  BLOCK: E.block,
  INLINE: E.inline
};
class m extends(r = o.PureComponent) {
  render() {
let {
  children: e,
  className: t,
  textClassName: n,
  type: i = I.BLOCK,
  style: a
} = this.props;
return (0, l.jsxs)('div', {
  className: d()(t, i),
  style: a,
  children: [
    (0, l.jsxs)(u.Text, {
      variant: 'text-sm/bold',
      tag: 'div',
      color: 'text-positive',
      className: E.pro,
      children: [
        _.Z.Messages.FORM_LABEL_ROLES_PRO_TIP,
        ':'
      ]
    }),
    (0, l.jsx)(u.Text, {
      className: d()(E.tip, n),
      variant: 'text-sm/normal',
      children: e
    })
  ]
});
  }
}
i = m, a = 'Types', s = I, a in i ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = m;