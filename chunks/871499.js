"use strict";
n.d(t, {
  Z: function() {
    return I
  },
  d: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(131388),
  l = n(259580),
  u = n(806519),
  _ = n(618158),
  d = n(362267),
  c = n(689938),
  E = n(431606);

function I(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: r,
    onMouseEnter: a,
    onMouseLeave: l,
    onContextMenu: u,
    className: d,
    wrapperClassName: c,
    iconClassName: I,
    iconComponent: T,
    themeable: h = !1,
    disabled: S = !1,
    isActive: f = !1,
    tooltipPosition: N = "top",
    shouldShowTooltip: A = !0,
    forceTooltipOpen: m = !1,
    buttonRef: O,
    grow: R,
    "aria-label": C
  } = e;
  return (0, i.jsx)(_.Z, {
    children: (0, i.jsx)(o.Tooltip, {
      position: N,
      text: t,
      "aria-label": C,
      shouldShow: A,
      forceOpen: m,
      children: e => {
        let {
          onClick: t,
          onContextMenu: _,
          onMouseEnter: N,
          onMouseLeave: A,
          ...m
        } = e;
        return (0, i.jsx)(o.Button, {
          look: o.Button.Looks.BLANK,
          size: o.Button.Sizes.NONE,
          onKeyDown: e => {
            null == r || r(e)
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == N || N(), null == a || a(e)
          },
          onMouseLeave: e => {
            null == A || A(), null == l || l(e)
          },
          onContextMenu: e => {
            null == _ || _(), null == u || u(e)
          },
          onFocus: e => {
            null == N || N(), null == a || a(e)
          },
          onBlur: e => {
            null == A || A(), null == l || l(e)
          },
          disabled: S,
          innerClassName: E.lineHeightReset,
          className: s()({
            [E.active]: f
          }, d),
          wrapperClassName: c,
          buttonRef: O,
          grow: R,
          "aria-label": C,
          ...m,
          children: (0, i.jsx)(T, {
            className: s()(E.controlIcon, I, {
              [E.themeable]: h,
              [E.active]: f
            }),
            color: "currentColor"
          })
        })
      }
    })
  })
}
let T = {
  red: E.red,
  white: E.white,
  green: E.green,
  yellow: E.yellow,
  primaryDark: E.primaryDark,
  primaryLight: E.primaryLight,
  activeLight: E.activeLight
};

function h(e) {
  let {
    color: t,
    isActive: n = !1,
    className: r,
    iconClassName: h,
    onPopoutClick: S,
    popoutOpen: f = !1,
    premiumGlow: N = !1,
    ...A
  } = e, m = (0, d.Z)(t, n), O = (0, a.Z)("(max-width: 456px)"), R = (0, i.jsx)(I, {
    ...A,
    grow: !1,
    onContextMenu: S,
    iconClassName: s()(h, E.centerIcon),
    className: s()(O ? r : null, E.staticButton, E.centerButton, T[m])
  });
  return O ? R : (0, i.jsxs)("div", {
    className: s()(r, E.contextMenuContainer),
    children: [(0, i.jsx)(u.ZP, {
      className: s()(E.buttonMask, {
        [E.buttonPremiumGlow]: N
      }),
      mask: null == S ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
      width: 56,
      height: 56,
      children: R
    }), null != S ? (0, i.jsx)(_.Z, {
      children: (0, i.jsx)(o.Clickable, {
        "aria-label": c.Z.Messages.MORE_OPTIONS,
        onClick: S,
        onContextMenu: S,
        className: s()(E.contextMenuNub, T[m], {
          [E.active]: f
        }),
        children: (0, i.jsx)(l.Z, {
          className: s()(E.contextMenuCaret, {
            [E.open]: f
          })
        })
      })
    }) : null]
  })
}