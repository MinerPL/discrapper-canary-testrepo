"use strict";
t.r(n), t.d(n, {
  getNativeContextMenuChannelAnalytics: function() {
    return a
  }
});
var l = t("944486"),
  u = t("176505");

function a() {
  var e;
  let n = null !== (e = l.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
  return null != n && (0, u.isStaticChannelRoute)(n) ? {
    channel_static_route: n
  } : {
    channel_id: n
  }
}