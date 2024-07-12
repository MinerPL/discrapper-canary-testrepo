let i;
var r, o, a, l, d = n(442837),
  u = n(544891),
  c = n(570140),
  f = n(70956),
  s = n(314897),
  _ = n(300429),
  h = n(981631),
  I = n(176505);
let b = 10 * f.Z.Millis.SECOND,
  m = 1.5 * f.Z.Millis.SECOND,
  p = {},
  E = Object.freeze({});

function S(e) {
  var t;
  return null !== (t = p[e]) && void 0 !== t ? t : E;
}

function v(e) {
  var t, n;
  let {
channelId: i,
userId: r
  } = e, o = {
...S(i)
  };
  clearTimeout(o[r]), o[r] = (t = i, n = r, setTimeout(() => {
c.Z.dispatch({
  type: 'TYPING_STOP',
  channelId: t,
  userId: n
});
  }, b)), p[i] = o;
}

function T(e) {
  let {
channelId: t,
userId: n
  } = e, i = p[t];
  if (null == i || null == i[n])
return !1;
  let r = {
...i
  };
  clearTimeout(r[n]), delete r[n], p[t] = r;
}

function g() {
  p = {};
}
class A extends(l = d.ZP.Store) {
  getTypingUsers(e) {
return S(e);
  }
  isTyping(e, t) {
return null != S(e)[t];
  }
}
a = 'TypingStore', (o = 'displayName') in(r = A) ? Object.defineProperty(r, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = a, t.Z = new A(c.Z, {
  TYPING_START: v,
  TYPING_STOP: T,
  TYPING_START_LOCAL: function(e) {
let {
  channelId: t
} = e, n = s.default.getId();
if (null == n || t === I.V)
  return !1;
null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), i = null);
let r = Date.now(),
  o = 0.8 * b;
if (null != i && (null != i.timeout || i.prevSend + o > r))
  return !1;
let a = setTimeout(() => {
  if (null == i || i.channelId !== t || n !== s.default.getId() || null == i.timeout)
    return;
  if (i.timeout = null, !(function(e) {
      let t = S(e);
      return t === E ? 0 : Object.keys(t).length;
    }(t) > 5))
    u.tn.post({
      url: h.ANM.TYPING(t),
      oldFormErrors: !0
    }).then(e => {
      if (200 === e.status) {
        var n, i;
        let r = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
          o = null !== (i = e.body.thread_create_cooldown_ms) && void 0 !== i ? i : 0;
        r > 0 && c.Z.dispatch({
          type: 'SLOWMODE_SET_COOLDOWN',
          channelId: t,
          slowmodeType: _.S.SendMessage,
          cooldownMs: r
        }), o > 0 && c.Z.dispatch({
          type: 'SLOWMODE_SET_COOLDOWN',
          channelId: t,
          slowmodeType: _.S.CreateThread,
          cooldownMs: o
        });
      }
    });
}, null == i || i.prevSend > r - 2 * o ? m : 0);
return i = {
  channelId: t,
  timeout: a,
  prevSend: r
}, v({
  channelId: t,
  userId: n
});
  },
  TYPING_STOP_LOCAL: function(e) {
let {
  channelId: t
} = e, n = s.default.getId();
return null != n && null != i && i.channelId === t && null != i.timeout && (clearTimeout(i.timeout), i = null, T({
  channelId: t,
  userId: n
}));
  },
  CONNECTION_OPEN: g,
  OVERLAY_INITIALIZE: g,
  MESSAGE_CREATE: function(e) {
let {
  channelId: t,
  message: {
    author: n
  },
  optimistic: r
} = e;
return r && ! function(e) {
  if (null == i || i.channelId !== e)
    return;
  null != i.timeout && clearTimeout(i.timeout), i = null;
}(t), null != n && T({
  channelId: t,
  userId: n.id
});
  }
});