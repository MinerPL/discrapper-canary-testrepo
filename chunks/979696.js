var i, a = n(442837),
  l = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let r = {
toastsEnabledForChannel: {}
  },
  o = r;
class c extends(i = a.ZP.PersistedStore) {
  initialize(e) {
o = null != e ? e : r;
  }
  getToastsEnabled(e) {
var t;
return null === (t = o.toastsEnabledForChannel[e]) || void 0 === t || t;
  }
  getState() {
return o;
  }
}
s(c, 'displayName', 'CallChatToastsStore'), s(c, 'persistKey', 'CallChatToasts'), t.Z = new c(l.Z, {
  CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
let {
  channelId: t,
  toastsEnabled: n
} = e;
o.toastsEnabledForChannel[t] = n;
  },
  LOGOUT: function() {
o.toastsEnabledForChannel = {};
  }
});