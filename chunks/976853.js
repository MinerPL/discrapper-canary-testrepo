"use strict";
t.r(n), t.d(n, {
  default: function() {
    return i
  }
});
var l = t("399606"),
  u = t("592125"),
  a = t("176505");

function i(e) {
  let n = (0, l.useStateFromStores)([u.default], () => {
    let n = u.default.getChannel(e);
    return (null == n ? void 0 : n.parent_id) != null && n.isForumPost() ? u.default.getChannel(null == n ? void 0 : n.parent_id) : null
  });
  return (null == n ? void 0 : n.hasFlag(a.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
}