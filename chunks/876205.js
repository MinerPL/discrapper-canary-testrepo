"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(442837),
  o = n(331650),
  r = n(278724),
  d = n(481060),
  c = n(556296),
  u = n(357727),
  h = n(779863),
  p = n(13140),
  f = n(981631),
  E = n(480004);
let Z = {
  [f.kg4.TOGGLE_MUTE]: {
    legacy: {
      slash: h.Z,
      default: u.Z
    },
    new: {
      slash: r.n,
      default: o.S
    }
  }
};

function g(e) {
  let {
    value: t,
    action: n,
    shouldShow: s
  } = e, o = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(n, !1, !0)), r = (0, d.useRedesignIconContext)().enabled;
  if (null == o || !s) return null;
  let u = p.BB(o.shortcut),
    h = r ? Z[n].new : Z[n].legacy,
    f = t ? h.slash : h.default;
  return (0, i.jsxs)("div", {
    className: E.keybindIndicator,
    children: [(0, i.jsx)(f, {
      className: E.keybindIcon,
      width: 16,
      height: 16
    }), (0, i.jsx)(d.Text, {
      variant: "text-xxs/semibold",
      className: l()(E.keybindIndicatorText),
      children: u
    })]
  })
}