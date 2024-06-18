"use strict";
let i, r;
n.r(t), n(47120), n(177593), n(653041), n(411104);
var s, o, a, l, u = n(512722),
  _ = n.n(u),
  d = n(213919),
  c = n(756647),
  E = n(442837),
  I = n(544891),
  T = n(433517),
  h = n(570140),
  S = n(911969),
  f = n(109728),
  N = n(670890),
  A = n(569611),
  m = n(710845),
  O = n(703656),
  R = n(786213),
  C = n(626135),
  p = n(449934),
  g = n(960048),
  L = n(117240),
  v = n(412788),
  D = n(981631),
  M = n(723359);
let P = n(952265).nf,
  y = new m.Z("AuthenticationStore"),
  U = "fingerprint",
  b = "email_cache",
  G = "user_id_cache",
  w = null,
  k = null,
  B = null,
  x = null,
  V = null,
  Z = null,
  H = null,
  F = D.u34.NONE,
  Y = D.$ib.NONE,
  j = !1,
  W = [],
  K = "",
  z = !1,
  q = null,
  X = !1,
  Q = !1,
  J = "",
  $ = !1,
  ee = !1,
  et = {},
  en = {},
  ei = null,
  er = null,
  es = null,
  eo = null,
  ea = !1;

function el(e) {
  let t = {};
  if (t.error_code = e.code, null != e.errors) {
    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
    return t
  }
  return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
}

function eu(e) {
  let t = null != d.getToken(),
    n = null != T.K.get(D.B1h);
  y.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function e_() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (V = T.K.get(U), null != er) return er;
  let t = null != V ? V : d.getToken();
  if (!(!(0, O.m1)() || !e && null != t || L.Z.isHandoffAvailable())) ed({
    withGuildExperiments: !0
  })
}

function ed(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, i = C.default.getSuperPropertiesBase64();
  null != i && (n["X-Super-Properties"] = i), null != V && (n["X-Fingerprint"] = V), er = I.tn.get({
    url: D.ANM.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, O.Wf)()
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: i
    } = e.body;
    t && h.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), h.Z.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: i
    }), er = null, (0, f.$L)()
  }, () => {
    er = null, h.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ec() {
  Z = V, V = null, T.K.remove(U)
}

function eE(e, t) {
  eu("setAuthToken called."), d.setToken(e, t)
}

function eI() {
  return eu("removeAuthToken called."), d.removeToken()
}

function eT() {
  j = !0, eh(), h.Z.wait(() => {
    (0, O.uL)(D.Z5c.REGISTER)
  })
}

function eh(e) {
  var t;
  eu("handleLogout called.");
  let n = eI();
  !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && ec(), e_()), E.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), v.Z.clearAll();
  A.ZH(), g.Z.clearUser(), T.K.remove(G), w = null, F = (null == e ? void 0 : e.isSwitchingAccount) ? D.u34.LOGGING_IN : D.u34.NONE, Y = D.$ib.NONE, K = "", J = "", q = null, z = !1, $ = !1, ee = !1, et = {}, en = {}, ea = !1
}
class eS extends(s = E.ZP.Store) {
  initialize() {
    w = T.K.get(G), k = T.K.get(b), es = T.K.get("login_cache"), null == d.getToken() && e_(), this.addChangeListener(() => (0, N.u)(w))
  }
  getEmail() {
    return k
  }
  getLogin() {
    return es
  }
  didVerifyFail() {
    return $
  }
  getVerifyErrors() {
    return et
  }
  didVerifySucceed() {
    return ee
  }
  getLoginStatus() {
    return F
  }
  getRegisterStatus() {
    return Y
  }
  getId() {
    return w
  }
  getSessionId() {
    return B
  }
  getAuthSessionIdHash() {
    return x
  }
  getToken() {
    return (0, p.LP)()
  }
  isAuthenticated() {
    return (0, p.$8)()
  }
  getFingerprint() {
    return V
  }
  getAnalyticsToken() {
    return H
  }
  getErrors() {
    return en
  }
  getMFATicket() {
    return K
  }
  getMFASMS() {
    return z
  }
  getMFATotp() {
    return X
  }
  getMFABackup() {
    return Q
  }
  getMFAWebAuthn() {
    return q
  }
  getMFAMethods() {
    let e = [];
    return null != q && e.push({
      type: "webauthn",
      challenge: q
    }), X && e.push({
      type: "totp",
      backup_codes_allowed: Q
    }), Q && e.push({
      type: "backup"
    }), z && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return W.includes(S.Pi.TOTP)
  }
  hasSMSEnabled() {
    return W.includes(S.Pi.SMS)
  }
  hasWebAuthnEnabled() {
    return W.includes(S.Pi.WEBAUTHN)
  }
  getMaskedPhone() {
    return J
  }
  getCredentials() {
    if (null == i) throw Error("no credentials");
    return i
  }
  getVerifyingUserId() {
    return ei
  }
  getCurrentRegistrationOptions() {
    return r
  }
  allowLogoutRedirect() {
    return !j
  }
  getWebAuthnChallenge() {
    return q
  }
  getSuspendedUserToken() {
    return eo
  }
  getIsPasswordlessActive() {
    return ea
  }
}
l = "AuthenticationStore", (a = "displayName") in(o = eS) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.default = new eS(h.Z, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      authSessionIdHash: r,
      analyticsToken: s,
      auth: o
    } = e;
    eu("handleConnectionOpen called"), g.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, R.Z)(n)), B = i, x = r, H = s, w = n.id, k = n.email, void 0 !== o && (W = o.authenticator_types), T.K.set(b, n.email), T.K.set(G, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      analyticsToken: r,
      token: s
    } = e;
    g.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, R.Z)(n)), B = i, H = r, eE(s), ec(), w = n.id, T.K.set(G, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (eu("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (j || P(M.$$) || P(M.dG)) {
        eT();
        return
      }
      C.default.track(D.rMx.APP_USER_DEAUTHENTICATED, {
        user_id: T.K.get(G)
      }), eh(), setImmediate(() => (0, O.uL)(D.Z5c.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (x = t)
  },
  LOGIN: function(e) {
    en = {}, F = D.u34.LOGGING_IN, J = "", r = null, null != e.login && (es = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    F = D.u34.NONE, eE(t), ec(), K = "", z = !1, q = null, ea = !1, J = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    K = "", z = !1, q = null, F = null != (en = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: i,
      backup: r,
      totp: s
    } = e;
    null != t && (K = t, z = n, J = "", q = null != i ? i : null, Q = r, X = s), en = {}, F = D.u34.MFA_STEP
  },
  LOGIN_MFA: function() {
    F = D.u34.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    F = D.u34.MFA_STEP, en = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    F = D.u34.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    F = D.u34.MFA_SMS_STEP, J = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    F = D.u34.MFA_SMS_STEP, en = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    F = D.u34.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    F = D.u34.ACCOUNT_DISABLED, i = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    F = D.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    F = D.u34.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    if (en = {}, F = D.u34.NONE, K = "", z = !1, q = null, r = null, i = null, !t) eI(), e_(!1)
  },
  LOGIN_STATUS_RESET: function() {
    F = D.u34.NONE
  },
  LOGIN_SUSPENDED_USER: function(e) {
    let {
      suspendedUserToken: t
    } = e;
    ea = !1, eo = t, setImmediate(() => (0, O.uL)(D.Z5c.ACCOUNT_STANDING))
  },
  SET_LOGIN_CREDENTIALS: function(e) {
    let {
      login: t,
      password: n
    } = e;
    i = {
      login: t,
      password: n
    }
  },
  LOGOUT: eh,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == V ? null != t ? (C.default.track(D.rMx.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != Z ? (0, c.s)(Z) : null,
      new_fingerprint: (0, c.s)(t)
    }), V = t, Z = t, T.K.set(U, V)) : e_() : null != t && V !== t && C.default.track(D.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, c.s)(V),
      dropped_fingerprint: (0, c.s)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    r = t, Y = D.$ib.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    en = {}, null != t && (_()(null != r, "Got birthday in multistep registration without existing form"), r = {
      ...r,
      birthday: t
    }), Y = D.$ib.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    Y = D.$ib.NONE, r = null, eE(t), ec()
  },
  REGISTER_FAILURE: function(e) {
    let {
      error: t
    } = e;
    en = el(t), Y = null != t.getFieldErrors("date_of_birth") ? D.$ib.REGISTER_AGE_GATE : D.$ib.REGISTER_WITH_ERROR
  },
  VERIFY_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    $ = !0, ee = !1, et = null != t ? t : {}
  },
  VERIFY_SUCCESS: function(e) {
    ee = !0, $ = !1, et = {}, ei = e.verifyingUserId
  },
  START_SESSION: function() {
    if (0 === Object.keys(en).length) return !1;
    en = {}
  },
  FORGOT_PASSWORD_REQUEST: function() {
    F = D.u34.FORGOT_PASSWORD, en = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    F = D.u34.NONE, en = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    eu("handleUpdateToken called"), eE(t, n), ec()
  },
  EXPERIMENTS_FETCH: ed,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    w = t.id, k = t.email, void 0 !== t.authenticator_types && (W = t.authenticator_types), T.K.set(b, t.email), T.K.set(G, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eT,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    en = {}
  },
  CLOSE_SUSPENDED_USER: function() {
    eo = null, F = D.u34.NONE, eh(), setImmediate(() => (0, O.uL)(D.Z5c.DEFAULT_LOGGED_OUT))
  },
  PASSWORDLESS_FAILURE: function(e) {
    let {
      error: t
    } = e;
    K = "", z = !1, q = null, ea = !1, F = null != (en = el(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE
  },
  PASSWORDLESS_START: function() {
    en = {}, ea = !0
  }
}, h.c.Early)