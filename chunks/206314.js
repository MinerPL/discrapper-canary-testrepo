n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  s = n(692547),
  l = n(481060),
  c = n(600164),
  d = n(4912),
  u = n(876975);
let m = [
  'firCount',
  'nackCount'
];
class p extends a.PureComponent {
  renderValueIcon() {
let {
  label: e
} = this.props;
return m.includes(e) ? (0, r.jsx)(d.Z, {
  color: s.Z.unsafe_rawColors.YELLOW_300.css,
  className: u.valueIcon
}) : null;
  }
  render() {
let {
  children: e,
  className: t,
  valueRendered: n,
  section: a,
  label: i,
  renderGraph: s
} = this.props;
return (0, r.jsxs)(c.Z, {
  className: o()(u.item, t),
  direction: c.Z.Direction.VERTICAL,
  basis: '50%',
  children: [
    (0, r.jsxs)(c.Z, {
      className: u.kvContainer,
      align: c.Z.Align.START,
      children: [
        (0, r.jsx)(c.Z.Child, {
          children: (0, r.jsx)(l.H, {
            className: u.title,
            children: e
          })
        }),
        Array.isArray(n) ? (0, r.jsx)(c.Z.Child, {
          grow: 1,
          children: n
        }) : (0, r.jsxs)(c.Z.Child, {
          grow: 0,
          shrink: 0,
          children: [
            this.renderValueIcon(),
            (0, r.jsx)('span', {
              className: u.itemValue,
              title: n,
              children: n
            })
          ]
        })
      ]
    }),
    null !== s && (0, r.jsx)(c.Z.Child, {
      className: u.graph,
      children: (0, r.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        children: s
      })
    }, null != a ? ''.concat(a, '-').concat(i) : i),
    (0, r.jsx)(l.FormDivider, {
      className: u.divider
    })
  ]
});
  }
}