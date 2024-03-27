"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("446674"),
  s = n("913144"),
  l = n("299039"),
  a = n("42203");
let r = {},
  d = r;

function h() {
  l.default.keys(d).forEach(e => {
    null == a.default.getChannel(e) && delete d[e]
  })
}
class o extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(a.default), d = null != e ? e : r
  }
  getState() {
    return d
  }
  getCollapsed() {
    return d
  }
  isCollapsed(e) {
    return d[e] || !1
  }
}
o.displayName = "CollapsedVoiceChannelStore", o.persistKey = "collapsedChannels";
var u = new o(s.default, {
  CONNECTION_OPEN: h,
  OVERLAY_INITIALIZE: h,
  CHANNEL_COLLAPSE: function(e) {
    let {
      channelId: t
    } = e;
    d[t] ? delete d[t] : d[t] = !0, d = {
      ...d
    }
  }
})