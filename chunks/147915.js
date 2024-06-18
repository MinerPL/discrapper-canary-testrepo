"use strict";
n.d(t, {
  j: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(920906),
  _ = n(481060),
  d = n(855981),
  c = n(55543),
  E = n(806519),
  I = n(329196);
(i = r || (r = {}))[i.UPDATE = 0] = "UPDATE", i[i.NEW = 1] = "NEW";
let T = {
  config: {
    friction: 26,
    tension: 700,
    mass: 1
  },
  initial: {
    scale: 1,
    opacity: 1
  },
  from: {
    scale: .6,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  },
  leave: {
    scale: .6,
    opacity: 0
  }
};
t.Z = o.memo(function(e) {
  let {
    className: t,
    disabled: n = !1,
    innerClassName: i,
    childClassName: r,
    iconClassName: o,
    icon: a,
    children: h,
    onClick: S,
    isActive: f,
    onMouseEnter: N,
    onMouseLeave: A,
    onFocus: m,
    onBlur: O,
    pulse: R,
    sparkle: C,
    notification: p,
    "aria-label": g,
    "aria-expanded": L,
    "aria-haspopup": v,
    "aria-controls": D
  } = e, M = (0, u.useTransition)(null != h, {
    ...T,
    keys: e => e ? "children" : "icon"
  }), P = e => {
    let {
      component: t
    } = e;
    return null != p ? (0, s.jsxs)("div", {
      className: I.buttonContent,
      children: [(0, s.jsx)(E.ZP, {
        className: I.iconMask,
        mask: E.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: 24,
        height: 24,
        children: t
      }), (0, s.jsx)("span", {
        className: I.notificationDot
      })]
    }) : t
  };
  return (0, s.jsxs)(_.Button, {
    look: _.Button.Looks.BLANK,
    size: _.Button.Sizes.NONE,
    "aria-label": g,
    "aria-expanded": L,
    "aria-haspopup": v,
    "aria-controls": D,
    disabled: n,
    className: l()(t, {
      [I.active]: f
    }),
    innerClassName: l()(I.button, i, {
      [I.pulseButton]: R
    }),
    onClick: S,
    onMouseEnter: N,
    onMouseLeave: A,
    onFocus: m,
    onBlur: O,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [M((e, t, n) => {
      let {
        key: i
      } = n;
      return t ? (0, s.jsx)(u.animated.div, {
        style: e,
        className: l()(I.buttonWrapper, r),
        children: P({
          component: h
        })
      }, i) : null != a ? (0, s.jsx)(u.animated.div, {
        style: e,
        className: l()(I.buttonWrapper, r),
        children: P({
          component: (0, s.jsx)(a, {
            className: l()(I.icon, o, {
              [I.pulseIcon]: R
            })
          })
        })
      }, i) : void 0
    }), C && (0, s.jsxs)("div", {
      className: I.sparkleContainer,
      children: [(0, s.jsx)(c.Z, {
        className: I.sparkleStar
      }), (0, s.jsx)(d.Z, {
        className: I.sparklePlus
      })]
    })]
  })
})