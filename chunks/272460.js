"use strict";
n.r(t), n.d(t, {
  QuestionRenderer: function() {
    return u
  },
  RequirementRenderer: function() {
    return c
  },
  RequirementWithActionRenderer: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  s = n("77078"),
  l = n("578706"),
  o = n("381546"),
  a = n("142435");

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a.questionContainer,
    children: [(0, r.jsx)(s.Text, {
      className: a.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function c(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a.requirementContainer,
    children: [(0, r.jsx)(t, {
      className: a.requirementIcon,
      height: 20,
      width: 20
    }), (0, r.jsx)(s.Text, {
      className: a.requirementText,
      variant: "text-md/normal",
      children: n
    }), u ? (0, r.jsx)(l.default, {
      width: 24,
      height: 24,
      className: a.requirementSuccess,
      backgroundColor: i.default.unsafe_rawColors.WHITE_500.css
    }) : (0, r.jsx)(o.default, {
      width: 24,
      height: 24,
      className: a.requirementFailure,
      backgroundColor: i.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    footnote: o,
    meetsRequirement: u,
    children: c
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a.requirementContainer,
      children: [(0, r.jsx)(t, {
        className: a.requirementIcon,
        height: 20,
        width: 20
      }), (0, r.jsx)(s.Text, {
        className: a.requirementText,
        variant: "text-md/normal",
        children: n
      }), u ? (0, r.jsx)(l.default, {
        width: 24,
        height: 24,
        className: a.requirementSuccess,
        backgroundColor: i.default.unsafe_rawColors.WHITE_500.css
      }) : c]
    }), null != o && (0, r.jsx)(s.Text, {
      color: "header-secondary",
      className: a.footnote,
      variant: "text-xs/normal",
      children: o
    })]
  })
}