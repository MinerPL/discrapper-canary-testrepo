"use strict";
n.d(t, {
  s: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(302454),
  s = n.n(r),
  o = n(481060);
let a = {
  ...s().defaultRules.link,
  react: function(e, t, n) {
    return (0, i.jsx)(o.Anchor, {
      href: e.target,
      target: "_blank",
      children: t(e.content, n)
    })
  }
}