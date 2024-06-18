"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(470716),
  l = n(266067),
  u = n(873546),
  _ = n(442837),
  d = n(316792),
  c = n(481060),
  E = n(607070),
  I = n(168551),
  T = n(19759),
  h = n(706454),
  S = n(210887),
  f = n(451478),
  N = n(792125),
  A = n(597952),
  m = n(252618),
  O = n(587061),
  R = n(392358),
  C = n(981631);
n(799623);
let p = new Set([C.Z5c.LOGIN, C.Z5c.REGISTER]);
t.Z = r.memo(function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: s
  } = e;
  (0, m.ZD)({
    skipsSettingDefaultPageTitle: s
  });
  let {
    clientThemesClassName: C,
    clientThemesCSS: g
  } = (0, I.ZP)(), L = r.createElement("style", {
    [I.PQ]: !0
  }, g);
  return (0, i.jsxs)(a.ql, {
    children: [function(e) {
      let {
        locale: t,
        theme: n
      } = (0, _.cj)([S.Z, h.default], () => ({
        locale: h.default.locale,
        theme: S.Z.theme
      })), s = (0, _.e7)([f.Z], () => f.Z.isFocused(), []), {
        reducedMotion: a,
        alwaysShowLinkDecorations: d
      } = r.useContext(c.AccessibilityPreferencesContext), {
        fontScale: I,
        fontScaleClass: m,
        keyboardModeEnabled: C,
        saturation: g,
        desaturateUserColors: L,
        useForcedColors: v,
        systemForcedColors: D
      } = (0, _.cj)([E.Z], () => {
        let {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: r,
          useForcedColors: s,
          systemForcedColors: o
        } = E.Z;
        return {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: r,
          useForcedColors: s,
          systemForcedColors: o
        }
      }), M = (0, l.TH)(), P = r.useMemo(() => p.has(M.pathname), [M.pathname]);
      (0, O.Z)(window, P);
      let y = (0, R.Z)(window, __OVERLAY__ || s),
        U = (0, _.e7)([T.Z], () => T.Z.sidebarWidth),
        b = (0, c.useRedesignIconContext)().enabled,
        G = window.CSS.supports("selector(::-webkit-scrollbar)");
      return (0, i.jsx)("html", {
        lang: t,
        style: "font-size: ".concat(I, "%; --saturation-factor: ").concat(g, "; --devtools-sidebar-width: ").concat(U, "px;"),
        className: o()(e, {
          overlay: __OVERLAY__,
          "mouse-mode": y,
          "keyboard-mode": C,
          "reduce-motion": a.enabled,
          "full-motion": !a.enabled,
          "is-mobile": u.tq,
          "app-focused": s,
          "low-saturation": g <= c.LOW_SATURATION_THRESHOLD,
          "decorate-links": d,
          "desaturate-user-colors": L,
          "disable-forced-colors": !v && "active" === D,
          "enable-forced-colors": v,
          "show-redesigned-icons": b,
          "no-webkit-scrollbar": !G,
          "has-webkit-scrollbar": G
        }, (0, N.Q)(n), (0, A.Z)(), m)
      })
    }(C), function() {
      let [e, t] = r.useState([]);
      return r.useEffect(() => {
        Promise.all(d.L.map(e => n(529305)("./".concat(e, ".woff2")).then(e => {
          let {
            default: t
          } = e;
          return t
        }))).then(e => t(e))
      }, []), (0, i.jsx)(i.Fragment, {
        children: e.map((e, t) => (0, i.jsx)("link", {
          rel: "preload",
          href: e,
          as: "font",
          type: "font/woff2",
          crossOrigin: "true"
        }, t))
      })
    }(), L, t]
  })
})