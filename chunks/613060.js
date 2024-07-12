var i, l = n(442837),
  r = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let s = {};
class o extends(i = l.ZP.PersistedStore) {
  initialize(e) {
null != e && Object.keys(e).forEach(t => {
  'number' == typeof e[t] && (s[t] = e[t]);
});
  }
  getState() {
return s;
  }
  hasViewed(e) {
return null != s[e];
  }
}
a(o, 'displayName', 'ViewHistoryStore'), a(o, 'persistKey', 'ViewHistoryStore'), t.Z = new o(r.Z, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
let {
  key: t
} = e;
s[t] = Date.now();
  }
});