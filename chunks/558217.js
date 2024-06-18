"use strict";
n.d(t, {
  O: function() {
    return a
  }
});
var i = n(594174),
  r = n(339085),
  s = n(396352),
  o = n(664437);

function a(e) {
  if (null == e || null == i.default.getCurrentUser()) return;
  let t = r.Z.getTopEmojisMetadata(e);
  if (null != t) {
    let {
      topEmojisTTL: e
    } = t;
    if (null == e || Date.now() < e) return
  }
  if (!s.Z.getIsFetching(e))(0, o.pj)(e)
}