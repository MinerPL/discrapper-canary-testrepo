"use strict";
s.r(t), s("47120");
var a, n, l, i, r = s("442837"),
  o = s("570140"),
  d = s("911969");
let u = !1,
  c = [];
class S extends(a = r.default.Store) {
  hasFetchedCredentials() {
    return u
  }
  getCredentials() {
    return c
  }
}
i = "WebAuthnStore", (l = "displayName") in(n = S) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new S(o.default, {
  LOGOUT: function() {
    c = [], u = !1
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADING: () => (u = !0, !0),
  MFA_WEBAUTHN_CREDENTIALS_LOADED: e => (c = e.credentials, !0),
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: t
    } = e;
    t.type === d.AuthenticatorType.WEBAUTHN && void 0 === c.find(e => e.id === t.id) && (c = [...c, t])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: t
    } = e;
    t.type === d.AuthenticatorType.WEBAUTHN && (c = c.map(e => e.id === t.id ? t : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: t
    } = e;
    t.type === d.AuthenticatorType.WEBAUTHN && (c = c.filter(e => e.id !== t.id))
  }
})