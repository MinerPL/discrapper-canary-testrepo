"use strict";
n.d(t, {
  W4: function() {
    return o
  }
}), n(47120);
var i = n(688619),
  r = n.n(i);

function s(e) {
  let {
    primaryColor: t,
    secondaryColor: n,
    isDarkTheme: i
  } = e, s = r()(t), o = r()(n), [a, l] = s.luminance() > o.luminance() ? [s, o] : [o, s], u = l.get("hsl.h");
  (0 === u || Number.isNaN(u)) && (l = a);
  let _ = i ? a.set("hsl.s", 1) : l.set("hsl.s", 1),
    d = _.get("hsl.h");
  return _ = _.set("hsl.l", d >= 200 && d <= 300 ? i ? .8 : .25 : i ? .95 : .15), {
    base: i ? l.set("hsl.s", 1).set("hsl.l", .05) : a.set("hsl.s", 1).set("hsl.l", .9),
    text: _
  }
}

function o(e) {
  let {
    enabled: t,
    primaryColor: n,
    secondaryColor: i,
    baseMixAmount: r = 50,
    textMixAmount: o = 38
  } = e, {
    base: l,
    text: u
  } = s({
    primaryColor: n,
    secondaryColor: i,
    isDarkTheme: !0
  }), {
    base: _,
    text: d
  } = s({
    primaryColor: n,
    secondaryColor: i,
    isDarkTheme: !1
  });
  return {
    "--theme-base-color-light-hsl": a(_),
    "--theme-base-color-light": _.css(),
    "--theme-text-color-light": d.css(),
    "--theme-base-color-dark-hsl": a(l),
    "--theme-base-color-dark": l.css(),
    "--theme-text-color-dark": u.css(),
    "--theme-base-color-amount": "".concat(t ? r : 0, "%"),
    "--theme-text-color-amount": "".concat(t ? o : 0, "%"),
    "--bg-overlay-selected": "unset",
    "--bg-overlay-hover": "unset",
    "--bg-overlay-active": "unset"
  }
}

function a(e) {
  let [t, n, i] = e.hsl();
  return "".concat(Number.isNaN(t) ? 0 : t, " ").concat(100 * n, "% ").concat(100 * i, "%")
}