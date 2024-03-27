"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007"), s("881410");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("146606"),
  o = s("446674"),
  d = s("669491"),
  u = s("77078"),
  c = s("206230"),
  E = s("461380"),
  _ = s("578706"),
  I = s("171950");

function T(e) {
  let {
    checked: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: I.row,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: I.rowText,
      children: s
    }), t ? (0, a.jsx)(_.default, {
      backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
      className: i(I.rowIcon, I.rowIconChecked)
    }) : (0, a.jsx)("div", {
      className: i(I.rowIcon, I.rowIconEmpty)
    })]
  })
}

function S(e) {
  let {
    title: t,
    children: s,
    buttonLabel: n,
    buttonCallback: i,
    disabled: d
  } = e, [_, S] = l.useState(!1), f = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), m = s.flatMap(e => e.items.map(e => e.completed)), N = m.filter(e => e).length / m.length, g = (0, r.useSpring)({
    width: "".concat(100 * N, "%"),
    immediate: f
  });
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsxs)(u.Clickable, {
      className: I.headerBar,
      onClick: () => S(e => !e),
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        className: I.headerText,
        children: t
      }), (0, a.jsx)(E.default, {
        direction: _ ? E.default.Directions.DOWN : E.default.Directions.UP,
        className: I.headerCaret
      })]
    }), (0, a.jsx)("div", {
      className: I.progressBarOuter,
      children: (0, a.jsx)(r.animated.div, {
        className: I.progressBarInner,
        style: g
      })
    }), !_ && s.map((e, t) => {
      let {
        title: s,
        items: n
      } = e;
      return (0, a.jsxs)(l.Fragment, {
        children: [t > 0 && (0, a.jsx)(u.FormDivider, {
          className: I.divider
        }), (0, a.jsx)(u.FormTitle, {
          className: I.categoryTitle,
          children: s
        }), n.map((e, t) => (0, a.jsx)(T, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), null !== n && "" !== n && null !== i && (0, a.jsxs)("div", {
      children: [(0, a.jsx)(u.FormDivider, {
        className: I.divider
      }), (0, a.jsx)(u.Button, {
        className: I.button,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.BRAND_NEW,
        hover: u.Button.Colors.BRAND_NEW,
        onClick: i,
        disabled: 1 !== N || d,
        children: n
      })]
    })]
  })
}