"use strict";
t.d(s, {
  U: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  l = t(481060),
  r = t(507893),
  o = t(689938),
  c = t(992911);
let u = e => {
  let {
    className: s,
    isPartiallyPurchased: t
  } = e;
  return t ? (0, n.jsx)(l.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, n.jsxs)("div", {
      className: i()(c.partialOwnStateContainer, s),
      ...e,
      children: [(0, n.jsx)("span", {
        className: c.iconWrapper,
        children: (0, n.jsx)(r.Z, {
          className: c.infoIcon
        })
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/semibold",
        children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, n.jsx)(l.Text, {
    variant: "text-md/semibold",
    className: s,
    children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}