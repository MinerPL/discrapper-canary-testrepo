"use strict";
n.r(t), n.d(t, {
  ChecklistItem: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var a = n("803997"),
  o = n.n(a),
  l = n("692547"),
  s = n("481060");
n("651711");
var r = n("696202"),
  d = n("551556");
n("689938");
var c = n("367942");
n("347157"), n("177266");
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
  }) : (0, i.jsx)(r.default, {
    color: l.default.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), (0, i.jsxs)("div", {
    className: c.checklistItem,
    children: [(0, i.jsx)("div", {
      className: c.checklistIcon,
      children: _
    }), (0, i.jsxs)("div", {
      className: o()(c.__invalid_checklistText, a && c.ineligibleRow),
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: c.checklistItemName,
        children: t
      }), (0, i.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n
      })]
    }), null != u && (0, i.jsx)("div", {
      className: c.eligibilityActionContainer,
      children: (0, i.jsx)(s.Button, {
        className: c.eligibilityActionButton,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        onClick: E,
        grow: !0,
        children: u
      })
    })]
  })
}