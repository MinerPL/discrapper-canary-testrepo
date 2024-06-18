"use strict";
t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(556012),
  a = t(485670);

function r(e) {
  var s;
  let {
    action: t,
    actionType: r,
    triggerType: o
  } = e, c = (0, l.c)(null !== (s = null == t ? void 0 : t.type) && void 0 !== s ? s : r, t, o);
  if (null == c) return null;
  let {
    headerText: d,
    helperText: u,
    icon: E
  } = c;
  return (0, n.jsxs)("div", {
    className: a.actionContainer,
    children: [(0, n.jsx)("div", {
      className: a.actionIconContainer,
      children: (0, n.jsx)(E, {
        width: 14,
        height: 14,
        className: a.actionIcon
      })
    }), (0, n.jsx)("div", {
      className: a.actionTextContainer,
      children: (0, n.jsxs)(i.Text, {
        className: a.actionTextHeader,
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: [d, null != u && (0, n.jsx)(i.Text, {
          className: a.actionTextHelper,
          variant: "text-xs/medium",
          color: "text-muted",
          tag: "span",
          children: u
        })]
      })
    })]
  })
}