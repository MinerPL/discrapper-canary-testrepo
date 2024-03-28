"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("479099"),
  s = n("798620");

function i(e) {
  let {
    appliedTags: t,
    setAppliedTags: n
  } = e, i = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : void 0;
  return (0, a.jsx)("div", {
    className: s.tags,
    children: Array.from(t).map(e => (0, a.jsx)(l.default, {
      tag: e,
      onRemove: i,
      size: null == i ? l.default.Sizes.SMALL : l.default.Sizes.MEDIUM
    }, e.id))
  })
}