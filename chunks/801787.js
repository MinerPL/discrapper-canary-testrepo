"use strict";
n.d(t, {
  C1: function() {
    return h
  },
  Od: function() {
    return l
  },
  TC: function() {
    return T
  },
  bg: function() {
    return i
  },
  wM: function() {
    return c
  },
  wR: function() {
    return I
  },
  ze: function() {
    return E
  }
}), n(789020), n(411104);
var i, r, s = n(735250),
  o = n(470079),
  a = n(231338);

function l(e, t) {
  return e | t
}

function u(e) {
  let t = JSON.stringify(e);
  return {
    ...e,
    key: t
  }
}(r = i || (i = {}))[r.MOBILE_REDESIGN_ENABLED = 2] = "MOBILE_REDESIGN_ENABLED", r[r.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4] = "MOBILE_DARK_GRADIENT_THEME_ENABLED", r[r.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED", r[r.REDUCED_CONTRAST_ENABLED = 16] = "REDUCED_CONTRAST_ENABLED", r[r.INCREASED_CONTRAST_ENABLED = 32] = "INCREASED_CONTRAST_ENABLED", r[r.REDUCE_SATURATION_ENABLED = 64] = "REDUCE_SATURATION_ENABLED";
let _ = {
    theme: "light",
    primaryColor: null,
    secondaryColor: null,
    gradient: null,
    key: "light-false-null-null-null",
    flags: 0,
    contrast: 1,
    saturation: 1
  },
  d = o.createContext(_);

function c(e) {
  let {
    children: t,
    theme: n = a.BR.DARK,
    primaryColor: i = null,
    secondaryColor: r = null,
    gradient: l = null,
    flags: _ = 0,
    contrast: c = 1,
    saturation: E = 1
  } = e, I = o.useMemo(() => u({
    theme: n,
    primaryColor: i,
    secondaryColor: r,
    gradient: l,
    flags: _,
    contrast: c,
    saturation: E
  }), [n, i, r, l, _, c, E]);
  return (0, s.jsx)(d.Provider, {
    value: I,
    children: t
  })
}

function E(e) {
  let {
    children: t,
    theme: n,
    primaryColor: i,
    secondaryColor: r,
    gradient: a,
    flags: l,
    contrast: _,
    saturation: c
  } = e, E = o.useContext(d), I = o.useMemo(() => u({
    theme: null != n ? n : E.theme,
    primaryColor: null != i ? i : E.primaryColor,
    secondaryColor: null != r ? r : E.secondaryColor,
    gradient: null != a ? a : E.gradient,
    flags: null != l ? l : E.flags,
    contrast: null != _ ? _ : E.contrast,
    saturation: null != c ? c : E.saturation
  }), [n, E.theme, E.primaryColor, E.secondaryColor, E.gradient, E.flags, E.contrast, E.saturation, i, r, a, l, _, c]);
  return (0, s.jsx)(d.Provider, {
    value: I,
    children: t
  })
}

function I(e) {
  let t = T(),
    n = o.useMemo(() => u({
      ...t,
      primaryColor: null,
      secondaryColor: null
    }), [t]);
  return (0, s.jsx)(d.Provider, {
    value: n,
    children: e.children
  })
}

function T() {
  let e = o.useContext(d);
  if (null == e) throw Error("useThemeContext must be used within a ThemeContext.Provider");
  return e
}

function h(e) {
  let {
    children: t
  } = e, n = T();
  return (0, s.jsx)(s.Fragment, {
    children: t(n)
  })
}