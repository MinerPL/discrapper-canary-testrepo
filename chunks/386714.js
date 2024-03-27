"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("845579"),
  r = n("217513");

function l(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, r.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let l = i.GifAutoPlay.getSetting(),
    s = n.getBannerURL({
      canAnimate: l,
      size: 480
    });
  if (null == s) return;
  let o = new Image;
  o.src = s
}