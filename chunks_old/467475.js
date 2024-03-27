"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("65597"),
  l = n("42203"),
  i = n("724210");

function u(e) {
  let t = (0, a.useStateFromStores)([l.default], () => {
    let t = l.default.getChannel(e);
    return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? l.default.getChannel(null == t ? void 0 : t.parent_id) : null
  });
  return (null == t ? void 0 : t.hasFlag(i.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
}