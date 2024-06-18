"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(374470),
  o = n(442837),
  a = n(481060),
  l = n(626135),
  u = n(5967),
  _ = n(607070),
  d = n(446108),
  c = n(981631);

function E(e) {
  var t;
  if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== c.yXg.TAB || null == e.target) return;
  let {
    target: n
  } = e, i = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  (0, s.k)(n) && l.default.track(c.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: "tab_navigation",
    source_class_list: null != i ? Array.from(i.classList) : [],
    location_object: n.tagName
  })
}

function I(e) {
  let {
    children: t
  } = e, n = (0, o.cj)([_.Z], () => ({
    enabled: _.Z.useReducedMotion,
    rawValue: _.Z.rawPrefersReducedMotion
  })), s = (0, o.cj)([_.Z], () => ({
    enabled: _.Z.useForcedColors,
    rawValue: _.Z.systemForcedColors
  })), l = (0, o.e7)([_.Z], () => _.Z.alwaysShowLinkDecorations), u = r.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: !1,
    forcedColors: s,
    alwaysShowLinkDecorations: l
  }), [n, s, l]);
  return r.useEffect(() => ((0, d.d1)(), window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E)), []), (0, i.jsx)(a.AccessibilityPreferencesContext.Provider, {
    value: u,
    children: t
  })
}