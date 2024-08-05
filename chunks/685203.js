n.d(t, {
  a: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(296325);

function l(e) {
  let {
children: t,
onClick: n,
className: i,
tooltip: l
  } = e;
  return (0, r.jsx)(s.Tooltip, {
text: l,
children: e => {
  let {
    onClick: l,
    ...u
  } = e;
  return (0, r.jsx)(s.Button, {
    ...u,
    onClick: e => {
      null == n || n(e), null == l || l();
    },
    innerClassName: o.buttonReset,
    color: a()(o.cta, i),
    size: s.Button.Sizes.MIN,
    children: t
  });
}
  });
}