"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("917351"),
  a = n("410328"),
  l = (0, s.memoize)(function(e) {
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