"use strict";
a.r(e), a.d(e, {
  useListingThumbnailUrl: function() {
    return r
  }
});
var n = a("884691"),
  s = a("845579"),
  l = a("271560"),
  i = a("624180");

function r(t, e) {
  let {
    shouldAnimate: a = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = s.GifAutoPlay.useSetting(), u = (0, i.useIsWindowFocused)(), o = a && u && r;
  return n.useMemo(() => {
    if ((null == t ? void 0 : t.image_asset) != null) return (0, l.getAssetURL)(t.application_id, t.image_asset, e, o ? void 0 : "webp")
  }, [e, t, o])
}