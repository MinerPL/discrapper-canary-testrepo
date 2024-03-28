"use strict";
s.r(t);
var a, n, l, i, r = s("392711"),
  o = s.n(r),
  d = s("213919"),
  u = s("442837"),
  c = s("570140");
let S = !1,
  E = [],
  T = "",
  _ = "",
  f = !1,
  m = {
    viewNonce: "",
    regenerateNonce: ""
  };
class g extends(i = u.default.Store) {
  getVerificationKey() {
    return T
  }
  getBackupCodes() {
    return E
  }
  get togglingSMS() {
    return S
  }
  getNonces() {
    return m
  }
  get emailToken() {
    return _
  }
  get hasSeenBackupPrompt() {
    return f
  }
}
l = "MFAStore", (n = "displayName") in(a = g) ? Object.defineProperty(a, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = l, t.default = new g(c.default, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: s
    } = e;
    void 0 !== t && d.setToken(t), E = s
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: t
    } = e;
    _ = t
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    d.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    S = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    S = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    E = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: s
    } = e;
    E = o().sortBy(t, "code"), T = s
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    m = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    f = !0
  }
})