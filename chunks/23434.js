var o, r, s, a, i = n(442837),
  l = n(570140);
let d = null;
class c extends(a = i.ZP.Store) {
  hasAction() {
return null != d;
  }
  getAction() {
return d;
  }
}

function E(e) {
  d = e.requiredAction;
}
s = 'UserRequiredActionStore', (r = 'displayName') in(o = c) ? Object.defineProperty(o, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[r] = s, t.Z = new c(l.Z, {
  CONNECTION_OPEN: E,
  USER_REQUIRED_ACTION_UPDATE: E
});