n.d(t, {
  C1: function() {
return p;
  },
  Od: function() {
return l;
  },
  TC: function() {
return h;
  },
  bg: function() {
return r;
  },
  wM: function() {
return _;
  },
  wR: function() {
return f;
  },
  ze: function() {
return E;
  }
}), n(789020), n(411104);
var r, i, a = n(735250),
  o = n(470079),
  s = n(231338);

function l(e, t) {
  return e | t;
}

function u(e) {
  let t = JSON.stringify(e);
  return {
...e,
key: t
  };
}
(i = r || (r = {}))[i.MOBILE_REDESIGN_ENABLED = 2] = 'MOBILE_REDESIGN_ENABLED', i[i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED', i[i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED', i[i.REDUCED_CONTRAST_ENABLED = 16] = 'REDUCED_CONTRAST_ENABLED', i[i.INCREASED_CONTRAST_ENABLED = 32] = 'INCREASED_CONTRAST_ENABLED', i[i.REDUCE_SATURATION_ENABLED = 64] = 'REDUCE_SATURATION_ENABLED';
let c = {
theme: 'light',
primaryColor: null,
secondaryColor: null,
gradient: null,
key: 'light-false-null-null-null',
flags: 0,
contrast: 1,
saturation: 1
  },
  d = o.createContext(c);

function _(e) {
  let {
children: t,
theme: n = s.BR.DARK,
primaryColor: r = null,
secondaryColor: i = null,
gradient: l = null,
flags: c = 0,
contrast: _ = 1,
saturation: E = 1
  } = e, f = o.useMemo(() => u({
theme: n,
primaryColor: r,
secondaryColor: i,
gradient: l,
flags: c,
contrast: _,
saturation: E
  }), [
n,
r,
i,
l,
c,
_,
E
  ]);
  return (0, a.jsx)(d.Provider, {
value: f,
children: t
  });
}

function E(e) {
  let {
children: t,
theme: n,
primaryColor: r,
secondaryColor: i,
gradient: s,
flags: l,
contrast: c,
saturation: _
  } = e, E = o.useContext(d), f = o.useMemo(() => u({
theme: null != n ? n : E.theme,
primaryColor: null != r ? r : E.primaryColor,
secondaryColor: null != i ? i : E.secondaryColor,
gradient: null != s ? s : E.gradient,
flags: null != l ? l : E.flags,
contrast: null != c ? c : E.contrast,
saturation: null != _ ? _ : E.saturation
  }), [
n,
E.theme,
E.primaryColor,
E.secondaryColor,
E.gradient,
E.flags,
E.contrast,
E.saturation,
r,
i,
s,
l,
c,
_
  ]);
  return (0, a.jsx)(d.Provider, {
value: f,
children: t
  });
}

function f(e) {
  let t = h(),
n = o.useMemo(() => u({
  ...t,
  primaryColor: null,
  secondaryColor: null
}), [t]);
  return (0, a.jsx)(d.Provider, {
value: n,
children: e.children
  });
}

function h() {
  let e = o.useContext(d);
  if (null == e)
throw Error('useThemeContext must be used within a ThemeContext.Provider');
  return e;
}

function p(e) {
  let {
children: t
  } = e, n = h();
  return (0, a.jsx)(a.Fragment, {
children: t(n)
  });
}