"use strict";
n.r(t), n.d(t, {
  useListingThumbnailUrl: function() {
    return u
  }
});
var i = n("884691"),
  r = n("845579"),
  l = n("271560"),
  s = n("624180");

function u(e, t) {
  let {
    shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = r.GifAutoPlay.useSetting(), o = (0, s.useIsWindowFocused)(), a = n && o && u;
  return i.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, l.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
  }, [t, e, a])
}