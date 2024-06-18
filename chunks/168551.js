"use strict";
n.d(t, {
  PQ: function() {
    return _
  },
  e3: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(691324),
  s = n(442837),
  o = n(780384),
  a = n(813852),
  l = n(514361),
  u = n(629935);
let _ = "data-client-themes",
  d = "custom-theme-background",
  c = () => {
    let e = (0, s.e7)([l.Z], () => l.Z.gradientPreset),
      {
        enabled: t
      } = a.U.useExperiment({
        location: "useBackgroundGradientCSS"
      });
    return (0, i.useMemo)(() => {
      if (null == e) return null;
      let n = l.Z.getLinearGradient();
      if (null == n) return null;
      let [i, s] = [...e.colors].sort((e, t) => t.stop - e.stop).slice(0, 2).map(e => r.b[e.token].hex), a = (0, u.W4)({
        enabled: t,
        primaryColor: i,
        secondaryColor: s,
        isDarkTheme: (0, o.wj)(e.theme)
      }), _ = t ? "\n      ".concat(Object.entries(a).map(e => {
        let [t, n] = e;
        return "".concat(t, ": ").concat(n, ";")
      }).join("\n"), "\n    ") : "";
      return ".".concat(d, " {\n      --custom-theme-background: ").concat(n, ";\n      ").concat(_, "\n    }")
    }, [t, e])
  };
t.ZP = () => {
  let e = c();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: d
  }
}