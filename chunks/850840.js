let t;
a(653041);
var o, r = a(442837),
  i = a(570140);

function c(e, n, a) {
  return n in e ? Object.defineProperty(e, n, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = a, e;
}
let s = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class l extends(o = r.ZP.PersistedStore) {
  initialize(e) {
t = null != e ? e : s;
  }
  getState() {
return t;
  }
  get hasAcceptedStoreTerms() {
return t.hasAcceptedStoreTerms;
  }
  hasAcceptedEULA(e) {
return t.hasAcceptedEulaIds.includes(e);
  }
}
c(l, 'displayName', 'ApplicationStoreUserSettingsStore'), c(l, 'persistKey', 'ApplicationStoreUserSettingsStore'), c(l, 'migrations', [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), n.Z = new l(i.Z, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
t.hasAcceptedStoreTerms = !0;
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
let {
  eulaId: n
} = e;
if (t.hasAcceptedEulaIds.includes(n))
  return !1;
t.hasAcceptedEulaIds.push(n);
  }
});