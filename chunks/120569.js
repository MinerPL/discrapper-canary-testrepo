"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(695346),
  r = n(318661);

function s(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, r.Of)(e.user.id, t);
  if (null == n) return;
  let s = i.QK.getSetting(),
    o = n.getBannerURL({
      canAnimate: s,
      size: 480
    });
  if (null != o) new Image().src = o
}