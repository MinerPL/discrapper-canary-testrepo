"use strict";
n.r(t), n.d(t, {
  PopoutCSSAnimator: function() {
    return h
  }
}), n("222007");
var i, s, r = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("862337"),
  d = n("413197"),
  c = n("685551");
(s = i || (i = {}))[s.TRANSLATE = 1] = "TRANSLATE", s[s.SCALE = 2] = "SCALE", s[s.FADE = 3] = "FADE";
let f = Object.freeze({
    1: c.translate,
    2: c.scale,
    3: c.fade
  }),
  _ = Object.freeze({
    top: c.animatorTop,
    bottom: c.animatorBottom,
    left: c.animatorLeft,
    right: c.animatorRight,
    center: c.animatorCenter,
    window_center: c.animatorCenter
  });

function h(e) {
  let {
    position: t,
    type: n,
    children: i
  } = e, {
    reducedMotion: s
  } = a.useContext(d.AccessibilityPreferencesContext), o = s.enabled ? 3 : n, [h, g] = a.useState(null != t), [m] = a.useState(() => new u.Timeout);
  return a.useEffect(() => () => m.stop(), [m]), a.useEffect(() => {
    null != t && m.start(10, () => g(!0))
  }, [t, m]), (0, r.jsx)("div", {
    className: l(null != t ? _[t] : null, {
      [f[o]]: null != t,
      [c.didRender]: h
    }),
    children: i
  })
}
h.Types = i