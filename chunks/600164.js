var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(68162),
  l = n(483085);
let u = {
VERTICAL: l.vertical,
HORIZONTAL: o.horizontal,
HORIZONTAL_REVERSE: o.horizontalReverse
  },
  c = {
START: l.justifyStart,
END: l.justifyEnd,
CENTER: l.justifyCenter,
BETWEEN: l.justifyBetween,
AROUND: l.justifyAround
  },
  d = {
START: l.alignStart,
END: l.alignEnd,
CENTER: l.alignCenter,
STRETCH: l.alignStretch,
BASELINE: l.alignBaseline
  },
  _ = {
NO_WRAP: l.noWrap,
WRAP: l.wrap,
WRAP_REVERSE: l.wrapReverse
  },
  E = e => {
let {
  children: t,
  className: n,
  shrink: a,
  grow: l,
  basis: u,
  style: c,
  wrap: d = !1,
  ..._
} = e, E = {
  className: n = null != n ? n : o.flexChild,
  style: {
    flexGrow: l,
    flexShrink: a,
    flexBasis: u,
    ...c
  },
  ..._
};
if (!d && 'string' != typeof t && 1 === i.Children.count(t)) {
  let e = i.Children.only(t);
  return E.style = {
    ...E.style,
    ...e.props.style
  }, E.className = s()(e.props.className, n), i.cloneElement(e, E);
}
return (0, r.jsx)('div', {
  ...E,
  children: t
});
  };
E.defaultProps = {
  shrink: 1,
  grow: 1,
  basis: 'auto',
  wrap: !1
};
let f = e => {
  let {
children: t,
className: n,
direction: i = u.HORIZONTAL,
justify: a = c.START,
align: l = d.STRETCH,
wrap: E = _.NO_WRAP,
shrink: f,
grow: h,
basis: p,
style: m,
...I
  } = e;
  return (0, r.jsx)('div', {
style: {
  flexShrink: f,
  flexGrow: h,
  flexBasis: p,
  ...m
},
className: s()(o.flex, i, a, l, E, n),
...I,
children: t
  });
};
f.defaultProps = {
  shrink: 1,
  grow: 1,
  basis: 'auto'
}, f.Child = E, f.Direction = u, f.Align = d, f.Justify = c, f.Wrap = _, t.Z = f;