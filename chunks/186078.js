t.d(n, {
  BO: function() {
return u;
  },
  QH: function() {
return m;
  },
  sp: function() {
return _;
  }
});
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(481060),
  l = t(489813),
  c = t(707592),
  d = t(902681);

function u(e) {
  let {
disabled: n,
field: t,
value: i,
radioItemClassName: l,
radioItemIconClassName: c,
onChange: u
  } = e, {
choices: m
  } = t, _ = r.useMemo(() => m.map((e, n) => ({
name: e,
value: n,
radioItemIconClassName: s()(d.multipleChoiceIcon, c)
  })), [
m,
c
  ]);
  return (0, a.jsx)(o.RadioGroup, {
disabled: n,
options: _,
value: i,
onChange: u,
radioItemClassName: l,
withTransparentBackground: !0
  });
}

function m(e) {
  let {
formField: n
  } = e, t = null != n.response ? n.choices[n.response] : '';
  return (0, a.jsx)(l.hK, {
title: n.label,
children: (0, a.jsx)(c.Gi, {
  className: d.fieldBackground,
  value: t,
  disabled: !0
})
  });
}

function _(e) {
  let {
formField: n,
onChange: t
  } = e;
  return (0, a.jsx)(l.hK, {
title: n.label,
children: (0, a.jsx)(u, {
  radioItemClassName: d.fieldBackground,
  field: n,
  value: n.response,
  onChange: t
})
  });
}