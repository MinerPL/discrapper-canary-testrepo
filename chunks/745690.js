"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("106413"),
  u = n("624043"),
  d = n("408792"),
  c = n("145229");
let f = e => {
  let {
    color: t
  } = e;
  return (0, a.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: c.toastBG
    }), (0, a.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: c.toastBG
    }), (0, a.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: c.toastBG
    }), (0, a.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, a.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, a.jsx)("rect", {
      x: "44.5903",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 44.5903 13)",
      fill: t
    })]
  })
};

function E(e) {
  let {
    achievement: t,
    unlocked: n
  } = e, {
    name: l,
    description: E,
    rarity: h,
    hideDescriptionUntilUnlock: _,
    onAction: C
  } = t, {
    color: S
  } = (0, o.getAchievementStyles)(h);
  s.useEffect(() => {
    let e = setTimeout(() => {
      u.default.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let I = null != C && n,
    m = I ? r.Clickable : "div";
  return (0, a.jsxs)(m, {
    className: i(c.container, I && c.actionable),
    onClick: () => {
      I && C()
    },
    children: [(0, a.jsx)("div", {
      className: c.iconContainer,
      children: (0, a.jsx)(d.default, {
        achievementId: t.id,
        size: d.default.Sizes.SIZE_40,
        unlocked: n
      })
    }), (0, a.jsxs)("div", {
      className: c.nameContainer,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: l()
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: _ && !n ? "?????" : E()
      })]
    }), (0, a.jsx)("div", {
      className: c.flair,
      children: (0, a.jsx)(f, {
        color: S
      })
    })]
  })
}