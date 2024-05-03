"use strict";
s.r(t), s("411104");
var a, r, i = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  o = s("442837"),
  u = s("481060"),
  d = s("700582"),
  c = s("451478"),
  _ = s("689938"),
  E = s("376826");
(r = a || (a = {}))[r.STAFF_NOTES = 1] = "STAFF_NOTES";
let T = o.default.connectStores([c.default], () => ({
    animate: c.default.isFocused()
  }))(e => {
    let {
      user: t,
      className: s,
      animate: a
    } = e;
    return (0, i.jsxs)("div", {
      className: l()(E.staffReviewHeader, s),
      children: [(0, i.jsx)(d.default, {
        size: u.AvatarSizes.SIZE_32,
        user: t,
        animate: a
      }), (0, i.jsxs)("div", {
        className: E.headerText,
        children: [(0, i.jsx)("div", {
          className: E.label,
          children: _.default.Messages.APPLICATION_STORE_STAFF_PICK
        }), (0, i.jsx)("div", {
          className: E.username,
          children: t.username
        })]
      })]
    })
  }),
  I = e => {
    let {
      data: t,
      className: s
    } = e;
    if (1 === t.type) {
      if (null == t.staffNotes) return null;
      let {
        user: e,
        content: a
      } = t.staffNotes;
      return null == e ? null : (0, i.jsxs)("div", {
        className: s,
        children: [(0, i.jsx)(T, {
          user: e,
          className: E.header
        }), (0, i.jsx)("div", {
          className: E.notes,
          children: a
        })]
      })
    }
    throw Error("Unknown type")
  };
I.Types = a, t.default = I