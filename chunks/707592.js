t.d(n, {
  Gi: function() {
return u;
  },
  YJ: function() {
return d;
  },
  zY: function() {
return m;
  }
});
var o = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(481060),
  s = t(489813),
  l = t(592286),
  c = t(994735);

function u(e) {
  let {
value: n,
placeholder: t,
onChange: r,
disabled: s,
autofocus: u,
className: d
  } = e;
  return (0, o.jsx)(a.TextInput, {
inputClassName: i()(c.textInputFieldBodyInput, d),
maxLength: l.tL,
value: null != n ? n : '',
placeholder: t,
onChange: r,
disabled: s,
autoFocus: u
  });
}

function d(e) {
  let {
formField: n
  } = e;
  return (0, o.jsx)(s.hK, {
title: n.label,
children: (0, o.jsx)(a.TextArea, {
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
  return (0, o.jsx)(s.hK, {
title: n.label,
children: (0, o.jsx)(u, {
  className: c.fieldBackground,
  onChange: r,
  value: n.response,
  autofocus: t
})
  });
}