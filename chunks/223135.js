"use strict";
var i = n(735250);
n(470079);
var r = n(788307),
  s = n(833858),
  o = n(981631);
t.Z = e => {
  var t;
  let {
    className: n,
    hangStatusActivity: a,
    animate: l = !0
  } = e;
  if ((null == a ? void 0 : a.state) === o.tNA.CUSTOM) return null != a.emoji ? (0, i.jsx)(r.I, {
    emoji: a.emoji,
    className: n,
    hideTooltip: !0,
    animate: l
  }) : null;
  let u = null === (t = (0, s.tV)(a)) || void 0 === t ? void 0 : t.icon;
  return null != u ? (0, i.jsx)("img", {
    src: u,
    alt: "",
    className: null != n ? n : void 0
  }) : null
}