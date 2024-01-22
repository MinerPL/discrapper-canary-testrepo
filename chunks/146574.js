"use strict";
n.r(t), n.d(t, {
  getNativeContextMenuChannelAnalytics: function() {
    return i
  }
});
var a = n("18494"),
  l = n("724210");

function i() {
  var e;
  let t = null !== (e = a.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
  return null != t && (0, l.isStaticChannelRoute)(t) ? {
    channel_static_route: t
  } : {
    channel_id: t
  }
}