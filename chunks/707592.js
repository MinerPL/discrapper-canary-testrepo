t.d(n, {
  Gi: function() {
return d;
  },
  YJ: function() {
return u;
  },
  zY: function() {
return m;
  }
});
var a = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(481060),
  o = t(489813),
  l = t(592286),
  c = t(902681);

function d(e) {
  let {
value: n,
placeholder: t,
onChange: r,
disabled: o,
autofocus: d,
className: u
  } = e;
  return (0, a.jsx)(s.TextInput, {
inputClassName: i()(c.textInputFieldBodyInput, u),
maxLength: l.tL,
value: null != n ? n : '',
placeholder: t,
onChange: r,
disabled: o,
autoFocus: d
  });
}

function u(e) {
  let {
formField: n
  } = e;
  return (0, a.jsx)(o.hK, {
title: n.label,
children: (0, a.jsx)(s.TextArea, {
  className: i()(c.textInputFieldBodyInput, c.fieldBackground),
  value: n.response,
  disabled: !0,
  autoFocus: !0,
  rows: 2
})
  });
}

function m(e) {
  let {
formField: n,
autofocus: t,
onChange: r
  } = e;
  return (0, a.jsx)(o.hK, {
title: n.label,
children: (0, a.jsx)(d, {
  className: c.fieldBackground,
  onChange: r,
  value: n.response,
  autofocus: t
})
  });
}