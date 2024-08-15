t(47120);
var n, a, i, r, o = t(442837),
  l = t(570140),
  c = t(911969);
let d = !1,
  _ = [];
class E extends(n = o.ZP.Store) {
  hasFetchedCredentials() {
return d;
  }
  get hasCredentials() {
return _.length > 0;
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
}) : a[i] = r, s.Z = new E(l.Z, {
  LOGOUT: function() {
_ = [], d = !1;
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
_ = e.credentials, d = !0;
  },
  AUTHENTICATOR_CREATE(e) {
let {
  credential: s
} = e;
s.type === c.Pi.WEBAUTHN && void 0 === _.find(e => e.id === s.id) && (_ = [
  ..._,
  s
]);
  },
  AUTHENTICATOR_UPDATE(e) {
let {
  credential: s
} = e;
s.type === c.Pi.WEBAUTHN && (_ = _.map(e => e.id === s.id ? s : e));
  },
  AUTHENTICATOR_DELETE(e) {
let {
  credential: s
} = e;
s.type === c.Pi.WEBAUTHN && (_ = _.filter(e => e.id !== s.id));
  }
});