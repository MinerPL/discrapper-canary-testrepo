"use strict";
t.d(s, {
  Z: function() {
    return N
  }
}), t(47120), t(390547);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(920906),
  o = t(442837),
  c = t(692547),
  d = t(481060),
  u = t(607070),
  E = t(259580),
  _ = t(441674),
  I = t(295612);

function T(e) {
  let {
    checked: s,
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: I.row,
    children: [(0, n.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: I.rowText,
      children: t
    }), s ? (0, n.jsx)(_.Z, {
      backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(I.rowIcon, I.rowIconChecked)
    }) : (0, n.jsx)("div", {
      className: a()(I.rowIcon, I.rowIconEmpty)
    })]
  })
}

function N(e) {
  let {
    title: s,
    children: t,
    buttonLabel: l,
    buttonCallback: a,
    disabled: c
  } = e, [_, N] = i.useState(!1), m = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), S = t.flatMap(e => e.items.map(e => e.completed)), h = S.filter(e => e).length / S.length, g = (0, r.useSpring)({
    width: "".concat(100 * h, "%"),
    immediate: m
  });
  return (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsxs)(d.Clickable, {
      className: I.headerBar,
      onClick: () => N(e => !e),
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: I.headerText,
        children: s
      }), (0, n.jsx)(E.Z, {
        direction: _ ? E.Z.Directions.DOWN : E.Z.Directions.UP,
        className: I.headerCaret
      })]
    }), (0, n.jsx)("div", {
      className: I.progressBarOuter,
      children: (0, n.jsx)(r.animated.div, {
        className: I.progressBarInner,
        style: g
      })
    }), !_ && t.map((e, s) => {
      let {
        title: t,
        items: l
      } = e;
      return (0, n.jsxs)(i.Fragment, {
        children: [s > 0 && (0, n.jsx)(d.FormDivider, {
          className: I.divider
        }), (0, n.jsx)(d.FormTitle, {
          className: I.categoryTitle,
          children: t
        }), l.map((e, s) => (0, n.jsx)(T, {
          children: e.description,
          checked: e.completed
        }, s))]
      }, s)
    }), null !== l && "" !== l && null !== a && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.FormDivider, {
        className: I.divider
      }), (0, n.jsx)(d.Button, {
        className: I.button,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.BRAND,
        onClick: a,
        disabled: 1 !== h || c,
        children: l
      })]
    })]
  })
}