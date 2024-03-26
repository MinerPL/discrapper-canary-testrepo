"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("845579"),
  i = n("217513");

function u(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, i.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let u = l.GifAutoPlay.getSetting(),
    r = n.getBannerURL({
      canAnimate: u,
      size: 480
    });
  if (null == r) return;
  let a = new Image;
  a.src = r
}