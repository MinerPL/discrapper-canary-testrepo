"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("446674"),
  s = n("872717"),
  i = n("913144"),
  r = n("718517"),
  u = n("271938"),
  o = n("401848"),
  d = n("49111"),
  c = n("724210");
let h = 10 * r.default.Millis.SECOND,
  f = 1.5 * r.default.Millis.SECOND,
  I = {},
  g = Object.freeze({});

function E(e) {
  var t;
  return null !== (t = I[e]) && void 0 !== t ? t : g
}

function v(e) {
  var t, n;
  let {
    channelId: l,
    userId: a
  } = e, s = {
    ...E(l)
  };
  clearTimeout(s[a]), s[a] = (t = l, n = a, setTimeout(() => {
    i.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, h)), I[l] = s
}

function T(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = I[t];
  if (null == l || null == l[n]) return !1;
  let a = {
    ...l
  };
  clearTimeout(a[n]), delete a[n], I[t] = a
}

function m() {
  I = {}
}
class p extends a.default.Store {
  getTypingUsers(e) {
    return E(e)
  }
  isTyping(e, t) {
    return null != E(e)[t]
  }
}
p.displayName = "TypingStore";
var _ = new p(i.default, {
  TYPING_START: v,
  TYPING_STOP: T,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let a = Date.now(),
      r = .8 * h;
    if (null != l && (null != l.timeout || l.prevSend + r > a)) return !1;
    let I = null == l || l.prevSend > a - 2 * r ? f : 0,
      T = setTimeout(() => {
        if (null != l && l.channelId === t && n === u.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = E(e);
          return t === g ? 0 : Object.keys(t).length
        }(t) > 5) && s.HTTP.post({
          url: d.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let a = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              s = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            a > 0 && i.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.SendMessage,
              cooldownMs: a
            }), s > 0 && i.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.CreateThread,
              cooldownMs: s
            })
          }
        })
      }, I);
    return l = {
      channelId: t,
      timeout: T,
      prevSend: a
    }, v({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, T({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: m,
  OVERLAY_INITIALIZE: m,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: a
    } = e;
    return a && ! function(e) {
      if (null == l || l.channelId !== e) return;
      null != l.timeout && clearTimeout(l.timeout), l = null
    }(t), null != n && T({
      channelId: t,
      userId: n.id
    })
  }
})