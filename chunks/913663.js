"use strict";
var i, r, s, o = n(445346),
  a = n(570140),
  l = n(703558);
let u = {},
  _ = {};
class d extends o.y {
  getStickerPreview(e, t) {
    return (t === l.d.FirstThreadMessage ? _ : u)[e]
  }
}
s = "StickerMessagePreviewStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s;
let c = new d(a.Z, {
  ADD_STICKER_PREVIEW: function(e) {
    let {
      channelId: t,
      sticker: n,
      draftType: i
    } = e;
    (i === l.d.FirstThreadMessage ? _ : u)[t] = [n]
  },
  CLEAR_STICKER_PREVIEW: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e, i = n === l.d.FirstThreadMessage ? _ : u;
    null != i[t] && delete i[t]
  },
  LOGOUT: function() {
    u = {}, _ = {}
  }
});
t.Z = c