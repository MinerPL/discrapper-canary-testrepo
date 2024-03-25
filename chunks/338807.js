"use strict";
n.r(t), n.d(t, {
  ChecklistItem: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var a = n("414456"),
  o = n.n(a),
  l = n("669491"),
  r = n("77078");
n("357412");
var s = n("381546"),
  d = n("775955");
n("782340");
var c = n("894555");
n("283117"), n("487663");
let u = e => {
  let {
    name: t,
    description: n,
    checked: a,
    actionLabel: u,
    actionHandler: E
  } = e, _ = null;
  return _ = a ? (0, i.jsx)(d.default, {
    width: 20,
    height: 20
  }) : (0, i.jsx)(s.default, {
    color: l.default.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), (0, i.jsxs)("div", {
    className: c.checklistItem,
    children: [(0, i.jsx)("div", {
      className: c.checklistIcon,
      children: _
    }), (0, i.jsxs)("div", {
      className: o(c.checklistText, a && c.ineligibleRow),
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        className: c.checklistItemName,
        children: t
      }), (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n
      })]
    }), null != u && (0, i.jsx)("div", {
      className: c.eligibilityActionContainer,
      children: (0, i.jsx)(r.Button, {
        className: c.eligibilityActionButton,
        look: r.ButtonLooks.OUTLINED,
        color: r.ButtonColors.PRIMARY,
        onClick: E,
        grow: !0,
        children: u
      })
    })]
  })
}