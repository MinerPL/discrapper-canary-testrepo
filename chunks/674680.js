"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("780384"),
  l = n("481060"),
  i = n("410030"),
  r = n("44315"),
  o = n("889901"),
  u = n("630641"),
  d = n("783539"),
  c = n("955204"),
  f = n("231338"),
  E = n("546271");
let h = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  },
  _ = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  };

function C(e) {
  var t;
  let {
    achievementId: n,
    unlocked: f,
    size: C = l.AvatarSizes.SIZE_40
  } = e, m = (0, i.default)(), S = (0, c.getPoggermodeAchievementData)(n);
  if (null == S) return null;
  let I = (0, l.getAvatarSpecs)(C),
    {
      name: p,
      rarity: T
    } = S,
    {
      color: g
    } = (0, c.getAchievementStyles)(T),
    A = (0, s.isThemeDark)(m) ? h : _,
    N = (I.size - I.offset - 2 * I.stroke) * .8,
    v = I.size - I.stroke,
    O = {
      width: .4 * N,
      height: .4 * N
    },
    R = {
      width: O.width + 1,
      height: O.height + 1,
      right: I.stroke + 1,
      bottom: I.stroke + 1,
      padding: 0
    };
  return (0, a.jsxs)("div", {
    className: E.container,
    style: {
      width: v,
      height: v,
      padding: I.stroke
    },
    "aria-label": "".concat(null !== (t = p()) && void 0 !== t ? t : ""),
    children: [(0, a.jsx)("div", {
      className: E.trophyIconContainer,
      children: (0, a.jsx)(d.default, {
        color: f ? g : (0, r.getColor)(A.trophy),
        width: N,
        height: N
      })
    }), !f && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: R,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(A.locked),
        ...O
      })
    }), f && T === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: R,
      children: (0, a.jsx)(o.default, {
        className: E.confettiIcon,
        ...O
      })
    })]
  })
}
C.Sizes = l.AvatarSizes