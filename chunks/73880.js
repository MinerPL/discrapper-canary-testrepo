t.d(n, {
  Q8: function() {
return d;
  },
  jn: function() {
return u;
  },
  lX: function() {
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
className: d,
autofocus: u
  } = e;
  return (0, a.jsx)(s.TextArea, {
className: i()(c.paragraphFieldBody, d),
maxLength: l.RS,
value: null != n ? n : '',
placeholder: null != t ? t : '',
onChange: r,
disabled: o,
autoFocus: u,
autosize: !0
  });
}

function u(e) {
  let {
formField: n
  } = e;
  return (0, a.jsx)(o.hK, {
title: n.label,
children: (0, a.jsx)(d, {
  className: c.fieldBackground,
  value: n.response,
  disabled: !0
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
  value: n.response,
  onChange: r,
  autofocus: t
})
  });
}