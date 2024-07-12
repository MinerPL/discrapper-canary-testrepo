n.d(l, {
  Z: function() {
return s;
  }
});
var t = n(735250);
n(470079);
var i = n(868819),
  r = n(970184),
  a = n(249963);

function s(e) {
  let {
components: l,
renderComponents: n
  } = e, {
message: s
  } = (0, r.CJ)();
  return null == l || 0 === l.length ? null : (0, t.jsxs)('div', {
className: a.container,
children: [
  (0, t.jsx)('div', {
    className: a.children,
    children: n(l)
  }),
  null != s ? (0, t.jsx)(i.ZP, {
    className: a.error,
    message: s,
    component: e
  }) : null
]
  });
}