"use strict";
let n;
l.r(t);
var u, i, r, a, s = l("442837"),
  d = l("544891"),
  o = l("570140"),
  E = l("70956"),
  f = l("314897"),
  c = l("300429"),
  T = l("981631"),
  I = l("176505");
let _ = 10 * E.default.Millis.SECOND,
  A = 1.5 * E.default.Millis.SECOND,
  S = {},
  p = Object.freeze({});

function O(e) {
  var t;
  return null !== (t = S[e]) && void 0 !== t ? t : p
}

function N(e) {
  var t, l;
  let {
    channelId: n,
    userId: u
  } = e, i = {
    ...O(n)
  };
  clearTimeout(i[u]), i[u] = (t = n, l = u, setTimeout(() => {
    o.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: l
    })
  }, _)), S[n] = i
}

function h(e) {
  let {
    channelId: t,
    userId: l
  } = e, n = S[t];
  if (null == n || null == n[l]) return !1;
  let u = {
    ...n
  };
  clearTimeout(u[l]), delete u[l], S[t] = u
}

function C() {
  S = {}
}
class m extends(a = s.default.Store) {
  getTypingUsers(e) {
    return O(e)
  }
  isTyping(e, t) {
    return null != O(e)[t]
  }
}
r = "TypingStore", (i = "displayName") in(u = m) ? Object.defineProperty(u, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = r, t.default = new m(o.default, {
  TYPING_START: N,
  TYPING_STOP: h,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, l = f.default.getId();
    if (null == l || t === I.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), n = null);
    let u = Date.now(),
      i = .8 * _;
    if (null != n && (null != n.timeout || n.prevSend + i > u)) return !1;
    let r = setTimeout(() => {
      if (null != n && n.channelId === t && l === f.default.getId() && null != n.timeout) n.timeout = null, !(function(e) {
        let t = O(e);
        return t === p ? 0 : Object.keys(t).length
      }(t) > 5) && d.HTTP.post({
        url: T.Endpoints.TYPING(t),
        oldFormErrors: !0
      }).then(e => {
        if (200 === e.status) {
          var l, n;
          let u = null !== (l = e.body.message_send_cooldown_ms) && void 0 !== l ? l : 0,
            i = null !== (n = e.body.thread_create_cooldown_ms) && void 0 !== n ? n : 0;
          u > 0 && o.default.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: c.SlowmodeType.SendMessage,
            cooldownMs: u
          }), i > 0 && o.default.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: c.SlowmodeType.CreateThread,
            cooldownMs: i
          })
        }
      })
    }, null == n || n.prevSend > u - 2 * i ? A : 0);
    return n = {
      channelId: t,
      timeout: r,
      prevSend: u
    }, N({
      channelId: t,
      userId: l
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, l = f.default.getId();
    return null != l && null != n && n.channelId === t && null != n.timeout && (clearTimeout(n.timeout), n = null, h({
      channelId: t,
      userId: l
    }))
  },
  CONNECTION_OPEN: C,
  OVERLAY_INITIALIZE: C,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: l
      },
      optimistic: u
    } = e;
    return u && ! function(e) {
      if (null == n || n.channelId !== e) return;
      null != n.timeout && clearTimeout(n.timeout), n = null
    }(t), null != l && h({
      channelId: t,
      userId: l.id
    })
  }
})