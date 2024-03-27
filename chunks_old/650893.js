"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var i = n("917351"),
  a = n.n(i),
  o = n("171718"),
  l = n("446674"),
  r = n("913144");
let s = !1,
  d = [],
  c = "",
  u = "",
  E = !1,
  _ = {
    viewNonce: "",
    regenerateNonce: ""
  };
class f extends l.default.Store {
  getVerificationKey() {
    return c
  }
  getBackupCodes() {
    return d
  }
  get togglingSMS() {
    return s
  }
  getNonces() {
    return _
  }
  get emailToken() {
    return u
  }
  get hasSeenBackupPrompt() {
    return E
  }
}
f.displayName = "MFAStore";
var M = new f(r.default, {
  MFA_ENABLE_SUCCESS: function(e) {
    let {
      token: t,
      codes: n
    } = e;
    void 0 !== t && o.setToken(t), d = n
  },
  MFA_ENABLE_EMAIL_TOKEN: function(e) {
    let {
      token: t
    } = e;
    u = t
  },
  MFA_DISABLE_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    o.setToken(t)
  },
  MFA_SMS_TOGGLE: function() {
    s = !0
  },
  MFA_SMS_TOGGLE_COMPLETE: function() {
    s = !1
  },
  MFA_CLEAR_BACKUP_CODES: function() {
    d = []
  },
  MFA_VIEW_BACKUP_CODES: function(e) {
    let {
      codes: t,
      key: n
    } = e;
    d = a.sortBy(t, "code"), c = n
  },
  MFA_SEND_VERIFICATION_KEY: function(e) {
    let {
      nonces: t
    } = e;
    _ = t
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function() {
    E = !0
  }
})