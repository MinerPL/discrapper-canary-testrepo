var r, i = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function o() {
  return {
usageByApplicationId: {},
shelfOrder: []
  };
}
let l = o();
class u extends(r = i.ZP.PersistedStore) {
  initialize(e) {
l = {
  ...o(),
  ...null != e ? e : {}
};
  }
  getState() {
return l;
  }
}
s(u, 'displayName', 'ActivityShelfStore'), s(u, 'persistKey', 'ActivityShelfStore'), t.Z = new u(a.Z, {
  LOGOUT: function() {
l = o();
  }
});