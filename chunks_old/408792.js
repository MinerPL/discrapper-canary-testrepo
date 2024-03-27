"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("819855"),
  l = n("77078"),
  i = n("841098"),
  r = n("449918"),
  o = n("451166"),
  u = n("45029"),
  d = n("300113"),
  c = n("106413"),
  f = n("843455"),
  E = n("365696");
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
  } = e, S = (0, i.default)(), I = (0, c.getPoggermodeAchievementData)(n);
  if (null == I) return null;
  let m = (0, l.getAvatarSpecs)(C),
    {
      name: p,
      rarity: T
    } = I,
    {
      color: g
    } = (0, c.getAchievementStyles)(T),
    A = (0, s.isThemeDark)(S) ? h : _,
    N = (m.size - m.offset - 2 * m.stroke) * .8,
    R = m.size - m.stroke,
    O = {
      width: .4 * N,
      height: .4 * N
    },
    v = {
      width: O.width + 1,
      height: O.height + 1,
      right: m.stroke + 1,
      bottom: m.stroke + 1,
      padding: 0
    };
  return (0, a.jsxs)("div", {
    className: E.container,
    style: {
      width: R,
      height: R,
      padding: m.stroke
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
      style: v,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(A.locked),
        ...O
      })
    }), f && T === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: v,
      children: (0, a.jsx)(o.default, {
        className: E.confettiIcon,
        ...O
      })
    })]
  })
}
C.Sizes = l.AvatarSizes