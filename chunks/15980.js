s(47120);
var n, a, i, r, o = s(442837),
  l = s(570140),
  c = s(911969);
let d = !1,
  _ = [];
class E extends(n = o.ZP.Store) {
  hasFetchedCredentials() {
return d;
  }
  getCredentials() {
return _;
  }
}
r = 'WebAuthnStore', (i = 'displayName') in(a = E) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, t.Z = new E(l.Z, {
  LOGOUT: function() {
_ = [], d = !1;
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
_ = e.credentials, d = !0;
  },
  AUTHENTICATOR_CREATE(e) {
let {
  credential: t
} = e;
t.type === c.Pi.WEBAUTHN && void 0 === _.find(e => e.id === t.id) && (_ = [
  ..._,
  t
]);
  },
  AUTHENTICATOR_UPDATE(e) {
let {
  credential: t
} = e;
t.type === c.Pi.WEBAUTHN && (_ = _.map(e => e.id === t.id ? t : e));
  },
  AUTHENTICATOR_DELETE(e) {
let {
  credential: t
} = e;
t.type === c.Pi.WEBAUTHN && (_ = _.filter(e => e.id !== t.id));
  }
});