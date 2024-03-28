"use strict";
n.r(t);
var s = n("392711"),
  a = n("897325");
t.default = (0, s.memoize)(function(e) {
  let {
    theme: t,
    layoutType: n
  } = e;
  return (0, a.buildPlatformPollResources)(t, n)
}, e => {
  let {
    theme: t,
    layoutType: n
  } = e;
  return "".concat(t, ":").concat(n)
})