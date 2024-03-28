"use strict";
t.r(a), t.d(a, {
  BulletedValueProp: function() {
    return o
  },
  ValueProp: function() {
    return r
  },
  ValuePropContainer: function() {
    return i
  }
});
var l = t("735250");
t("470079");
var n = t("481060"),
  s = t("837537");

function r(e) {
  let {
    text: a,
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: s.valueProp,
    children: [(0, l.jsx)("div", {
      className: s.valuePropIconContainer,
      children: t
    }), (0, l.jsx)(n.Text, {
      variant: "text-sm/medium",
      children: a
    })]
  })
}

function o(e) {
  let {
    title: a,
    bulletPoints: t,
    icon: r
  } = e;
  return (0, l.jsxs)("div", {
    className: s.bulletedValueProp,
    children: [(0, l.jsx)("div", {
      className: s.valuePropIconContainer,
      children: r
    }), (0, l.jsxs)("div", {
      className: s.bulletPointsContainer,
      children: [(0, l.jsx)(n.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: a
      }), (0, l.jsx)("div", {
        className: s.bulletPoints,
        children: t.map(e => (0, l.jsxs)("div", {
          className: s.bulletPoint,
          children: [(0, l.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: "•"
          }), (0, l.jsx)(n.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: s.bulletPointText,
            children: e
          })]
        }, e))
      })]
    })]
  })
}

function i(e) {
  let {
    children: a
  } = e;
  return (0, l.jsx)("div", {
    className: s.valuePropContainer,
    children: a
  })
}