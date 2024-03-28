"use strict";
n.r(t), n.d(t, {
  QuestionRenderer: function() {
    return u
  },
  RequirementRenderer: function() {
    return d
  },
  RequirementWithActionRenderer: function() {
    return c
  }
});
var r = n("735250");
n("470079");
var s = n("692547"),
  o = n("481060"),
  i = n("441674"),
  a = n("696202"),
  l = n("445721");

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: l.questionContainer,
    children: [(0, r.jsx)(o.Text, {
      className: l.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: u
  } = e;
  return (0, r.jsxs)("div", {
    className: l.requirementContainer,
    children: [(0, r.jsx)(t, {
      className: l.requirementIcon,
      height: 20,
      width: 20
    }), (0, r.jsx)(o.Text, {
      className: l.requirementText,
      variant: "text-md/normal",
      children: n
    }), u ? (0, r.jsx)(i.default, {
      width: 24,
      height: 24,
      className: l.requirementSuccess,
      backgroundColor: s.default.unsafe_rawColors.WHITE_500.css
    }) : (0, r.jsx)(a.default, {
      width: 24,
      height: 24,
      className: l.requirementFailure,
      backgroundColor: s.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function c(e) {
  let {
    icon: t,
    text: n,
    footnote: a,
    meetsRequirement: u,
    children: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l.requirementContainer,
      children: [(0, r.jsx)(t, {
        className: l.requirementIcon,
        height: 20,
        width: 20
      }), (0, r.jsx)(o.Text, {
        className: l.requirementText,
        variant: "text-md/normal",
        children: n
      }), u ? (0, r.jsx)(i.default, {
        width: 24,
        height: 24,
        className: l.requirementSuccess,
        backgroundColor: s.default.unsafe_rawColors.WHITE_500.css
      }) : d]
    }), null != a && (0, r.jsx)(o.Text, {
      color: "header-secondary",
      className: l.footnote,
      variant: "text-xs/normal",
      children: a
    })]
  })
}