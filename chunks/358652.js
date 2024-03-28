"use strict";
n.r(t), n("47120");
var l, a, s, i, r = n("442837"),
  o = n("570140"),
  u = n("131704"),
  d = n("251625"),
  c = n("592125"),
  f = n("306680"),
  h = n("944486"),
  C = n("55589");
let p = [];

function m() {
  let e = C.default.getPrivateChannelIds().filter(e => f.default.getMentionCount(e) > 0);
  return e.length > 20 && (e.length = 20), !(0, d.areArraysShallowlyEqual)(e, p) && (p = e, !0)
}

function g() {
  return m()
}

function E(e) {
  let {
    channelId: t
  } = e, n = c.default.getChannel(t);
  return !!(null != n && (0, u.isPrivate)(n.type)) && m()
}
class S extends(l = r.default.Store) {
  initialize() {
    this.waitFor(C.default, c.default, h.default, f.default)
  }
  getUnreadPrivateChannelIds() {
    return p
  }
}
i = "PrivateChannelReadStateStore", (s = "displayName") in(a = S) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new S(o.default, {
  CONNECTION_OPEN: g,
  OVERLAY_INITIALIZE: g,
  MESSAGE_CREATE: E,
  MESSAGE_ACK: E,
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = c.default.getChannel(t);
    return !!(null != n && (0, u.isPrivate)(n.type)) && m()
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = c.default.getChannel(t);
    return !!(null != n && (0, u.isPrivate)(n.type)) && m()
  },
  WINDOW_FOCUS: function() {
    let e = c.default.getChannel(h.default.getChannelId());
    return !!(null != e && (0, u.isPrivate)(e.type)) && m()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = c.default.getChannel(t);
    return !!(null != n && (0, u.isPrivate)(n.type)) && m()
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = c.default.getChannel(e);
      null != t && (0, u.isPrivate)(t.type) && (n = !0)
    }
    return !!n && m()
  }
})