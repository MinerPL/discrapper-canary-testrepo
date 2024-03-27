"use strict";
t.r(r), t.d(r, {
  Properties: function() {
    return s
  },
  Property: function() {
    return c
  },
  BooleanPropertyValue: function() {
    return d
  }
});
var a = t("37983");
t("884691");
var n = t("414456"),
  i = t.n(n),
  o = t("77078"),
  l = t("699412");

function s(e) {
  let {
    className: r,
    children: t
  } = e;
  return (0, a.jsx)("dl", {
    className: i(l.properties, r),
    children: t
  })
}

function c(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: l.propertyName,
      children: r
    }), (0, a.jsx)("dd", {
      children: t
    })]
  })
}

function d(e) {
  let {
    value: r
  } = e;
  return (0, a.jsx)(o.Checkbox, {
    size: 16,
    value: r,
    shape: o.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}