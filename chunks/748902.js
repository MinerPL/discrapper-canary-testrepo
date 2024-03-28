"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("786761"),
  d = n("594174"),
  c = n("355298"),
  f = n("333984");
let h = {},
  m = new Set;

function p(e) {
  return c.default.isMessageRequest(e) || f.default.isSpam(e)
}

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!p(e) || null != t && e !== (null == t ? void 0 : t.channel_id)) return;
  let a = null == t ? null : (0, u.createMessageRecord)(t);
  h[e] = {
    loaded: !0,
    error: n,
    message: a
  }
}
class C extends(a = r.default.Store) {
  initialize() {
    this.waitFor(c.default, f.default, d.default)
  }
  shouldLoadMessageRequestPreview(e) {
    return !m.has(e)
  }
  getMessageRequestPreview(e) {
    return !(e in h) && (h[e] = {
      loaded: !1,
      error: !1,
      message: null
    }), h[e]
  }
}
i = "MessageRequestPreviewStore", (s = "displayName") in(l = C) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new C(o.default, {
  CONNECTION_OPEN: function() {
    h = {}, m.clear()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    p(t.id) && m.add(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) !p(e.id) && (m.delete(e.id), delete h[e.id])
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    m.delete(t.id), delete h[t.id]
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification) return !1;
    E(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.channel_id;
    if (null == t) return !1;
    let n = h[t];
    if (null == n || null == n.message) return !1;
    h[t] = {
      ...n,
      message: (0, u.updateMessageRecord)(n.message, e.message)
    }
  },
  MESSAGE_DELETE: function(e) {
    if (!p(e.channelId)) return !1;
    h[e.channelId] = {
      loaded: !0,
      error: !1,
      message: null
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
    let {
      requestedChannelIds: t,
      supplementalData: n
    } = e, a = new Set([...t]);
    for (let e of (n.forEach(e => {
        E(e.channel_id, e.message_preview), a.delete(e.channel_id)
      }), Array.from(a))) E(e, null)
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
    let {
      requestedChannelIds: t
    } = e;
    t.forEach(e => {
      E(e, null, !0)
    })
  }
})