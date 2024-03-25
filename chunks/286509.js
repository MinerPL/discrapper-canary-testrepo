"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("550368"),
  a = n("954016");

function l(e, t) {
  return null == e || null == e.assets || null == e.assets.large_image ? null : (0, s.getAssetImage)(t, e.assets.large_image, [a.ACTIVITY_INVITE_COVER_IMAGE_SIZE, a.ACTIVITY_INVITE_COVER_IMAGE_SIZE])
}