"use strict";
n.d(t, {
  l: function() {
    return I
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(846519),
  _ = n(186325),
  d = n(790231);
(r = i || (i = {}))[r.TRANSLATE = 1] = "TRANSLATE", r[r.SCALE = 2] = "SCALE", r[r.FADE = 3] = "FADE";
let c = Object.freeze({
    1: d.translate,
    2: d.scale,
    3: d.fade
  }),
  E = Object.freeze({
    top: d.animatorTop,
    bottom: d.animatorBottom,
    left: d.animatorLeft,
    right: d.animatorRight,
    center: d.animatorCenter,
    window_center: d.animatorCenter
  });

function I(e) {
  let {
    position: t,
    type: n,
    children: i
  } = e, {
    reducedMotion: r
  } = o.useContext(_.S), a = r.enabled ? 3 : n, [I, T] = o.useState(null != t), [h] = o.useState(() => new u.V7);
  return o.useEffect(() => () => h.stop(), [h]), o.useEffect(() => {
    null != t && h.start(10, () => T(!0))
  }, [t, h]), (0, s.jsx)("div", {
    className: l()(null != t ? E[t] : null, {
      [c[a]]: null != t,
      [d.didRender]: I
    }),
    children: i
  })
}
I.Types = i