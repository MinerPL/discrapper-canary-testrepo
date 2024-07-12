n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(470716),
  l = n(266067),
  u = n(873546),
  c = n(442837),
  d = n(316792),
  _ = n(481060),
  E = n(607070),
  f = n(168551),
  h = n(19759),
  p = n(706454),
  m = n(210887),
  I = n(451478),
  T = n(792125),
  g = n(597952),
  S = n(252618),
  A = n(587061),
  N = n(392358),
  v = n(981631);
n(852746);
let O = new Set([
  v.Z5c.LOGIN,
  v.Z5c.REGISTER
]);
t.Z = i.memo(function(e) {
  let {
children: t,
skipsSettingDefaultPageTitle: a
  } = e;
  (0, S.ZD)({
skipsSettingDefaultPageTitle: a
  });
  let {
clientThemesClassName: v,
clientThemesCSS: R
  } = (0, f.ZP)(), C = i.createElement('style', {
[f.PQ]: !0
  }, R);
  return (0, r.jsxs)(s.ql, {
children: [
  function(e) {
    let {
      locale: t,
      theme: n
    } = (0, c.cj)([
      m.Z,
      p.default
    ], () => ({
      locale: p.default.locale,
      theme: m.Z.theme
    })), a = (0, c.e7)([I.Z], () => I.Z.isFocused(), []), {
      reducedMotion: s,
      alwaysShowLinkDecorations: d
    } = i.useContext(_.AccessibilityPreferencesContext), {
      fontScale: f,
      fontScaleClass: S,
      keyboardModeEnabled: v,
      saturation: R,
      desaturateUserColors: C,
      useForcedColors: y,
      systemForcedColors: D
    } = (0, c.cj)([E.Z], () => {
      let {
        fontScale: e,
        fontScaleClass: t,
        keyboardModeEnabled: n,
        saturation: r,
        desaturateUserColors: i,
        useForcedColors: a,
        systemForcedColors: o
      } = E.Z;
      return {
        fontScale: e,
        fontScaleClass: t,
        keyboardModeEnabled: n,
        saturation: r,
        desaturateUserColors: i,
        useForcedColors: a,
        systemForcedColors: o
      };
    }), L = (0, l.TH)(), b = i.useMemo(() => O.has(L.pathname), [L.pathname]);
    (0, A.Z)(window, b);
    let M = (0, N.Z)(window, __OVERLAY__ || a),
      P = (0, c.e7)([h.Z], () => h.Z.sidebarWidth),
      U = (0, _.useRedesignIconContext)().enabled,
      w = window.CSS.supports('selector(::-webkit-scrollbar)');
    return (0, r.jsx)('html', {
      lang: t,
      style: 'font-size: '.concat(f, '%; --saturation-factor: ').concat(R, '; --devtools-sidebar-width: ').concat(P, 'px;'),
      className: o()(e, {
        overlay: __OVERLAY__,
        'mouse-mode': M,
        'keyboard-mode': v,
        'reduce-motion': s.enabled,
        'full-motion': !s.enabled,
        'is-mobile': u.tq,
        'app-focused': a,
        'low-saturation': R <= _.LOW_SATURATION_THRESHOLD,
        'decorate-links': d,
        'desaturate-user-colors': C,
        'disable-forced-colors': !y && 'active' === D,
        'enable-forced-colors': y,
        'show-redesigned-icons': U,
        'no-webkit-scrollbar': !w,
        'has-webkit-scrollbar': w
      }, (0, T.Q)(n), (0, g.Z)(), S)
    });
  }(v),
  function() {
    let [e, t] = i.useState([]);
    return i.useEffect(() => {
      Promise.all(d.L.map(e => n(529305)('./'.concat(e, '.woff2')).then(e => {
        let {
          default: t
        } = e;
        return t;
      }))).then(e => t(e));
    }, []), (0, r.jsx)(r.Fragment, {
      children: e.map((e, t) => (0, r.jsx)('link', {
        rel: 'preload',
        href: e,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'true'
      }, t))
    });
  }(),
  C,
  t
]
  });
});