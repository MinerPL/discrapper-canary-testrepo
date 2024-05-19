"use strict";
let i, r;
n.r(t), n("47120"), n("177593"), n("653041"), n("411104");
var a, s, o, l, u = n("512722"),
  d = n.n(u),
  _ = n("213919"),
  c = n("756647"),
  E = n("442837"),
  I = n("544891"),
  T = n("433517"),
  f = n("570140"),
  S = n("911969"),
  h = n("109728"),
  A = n("670890"),
  m = n("569611"),
  N = n("710845"),
  p = n("703656"),
  O = n("786213"),
  C = n("626135"),
  R = n("449934"),
  g = n("960048"),
  L = n("117240"),
  v = n("412788"),
  D = n("981631"),
  M = n("723359");
let y = n("952265").hasModalOpen,
  P = new N.default("AuthenticationStore"),
  U = "fingerprint",
  b = "email_cache",
  G = "user_id_cache",
  w = null,
  k = null,
  B = null,
  V = null,
  x = null,
  F = null,
  H = null,
  Y = D.LoginStates.NONE,
  j = D.RegistrationStates.NONE,
  W = !1,
  K = [],
  z = "",
  Z = !1,
  X = null,
  Q = !1,
  q = !1,
  J = "",
  $ = !1,
  ee = !1,
  et = {},
  en = {},
  ei = null,
  er = null,
  ea = null,
  es = null;

function eo(e) {
  let t = null != _.getToken(),
    n = null != T.Storage.get(D.TOKEN_KEY);
  P.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function el() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (x = T.Storage.get(U), null != er) return er;
  let t = null != x ? x : _.getToken();
  !(!(0, p.isValidFingerprintRoute)() || !e && null != t || L.default.isHandoffAvailable()) && eu({
    withGuildExperiments: !0
  })
}

function eu(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, i = C.default.getSuperPropertiesBase64();
  null != i && (n["X-Super-Properties"] = i), null != x && (n["X-Fingerprint"] = x), er = I.HTTP.get({
    url: D.Endpoints.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, p.getFingerprintLocation)()
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: i
    } = e.body;
    t && f.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), f.default.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: i
    }), er = null, (0, h.onExperimentsLoaded)()
  }, () => {
    er = null, f.default.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ed() {
  F = x, x = null, T.Storage.remove(U)
}

function e_(e, t) {
  eo("setAuthToken called."), _.setToken(e, t)
}

function ec() {
  return eo("removeAuthToken called."), _.removeToken()
}

function eE() {
  W = !0, eI(), f.default.wait(() => {
    (0, p.transitionTo)(D.Routes.REGISTER)
  })
}

function eI(e) {
  var t;
  eo("handleLogout called.");
  let n = ec();
  !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && ed(), el()), E.default.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), v.default.clearAll(), m.clear(), g.default.clearUser(), T.Storage.remove(G), w = null, Y = (null == e ? void 0 : e.isSwitchingAccount) ? D.LoginStates.LOGGING_IN : D.LoginStates.NONE, j = D.RegistrationStates.NONE, z = "", J = "", X = null, Z = !1, $ = !1, ee = !1, et = {}, en = {}
}
class eT extends(a = E.default.Store) {
  initialize() {
    w = T.Storage.get(G), k = T.Storage.get(b), ea = T.Storage.get("login_cache"), null == _.getToken() && el(), this.addChangeListener(() => (0, A.setClientState)(w))
  }
  getEmail() {
    return k
  }
  getLogin() {
    return ea
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
    return Y
  }
  getRegisterStatus() {
    return j
  }
  getId() {
    return w
  }
  getSessionId() {
    return B
  }
  getAuthSessionIdHash() {
    return V
  }
  getToken() {
    return (0, R.getToken)()
  }
  isAuthenticated() {
    return (0, R.isAuthenticated)()
  }
  getFingerprint() {
    return x
  }
  getAnalyticsToken() {
    return H
  }
  getErrors() {
    return en
  }
  getMFATicket() {
    return z
  }
  getMFASMS() {
    return Z
  }
  getMFATotp() {
    return Q
  }
  getMFABackup() {
    return q
  }
  getMFAWebAuthn() {
    return X
  }
  getMFAMethods() {
    let e = [];
    return null != X && e.push({
      type: "webauthn",
      challenge: X
    }), Q && e.push({
      type: "totp",
      backup_codes_allowed: q
    }), q && e.push({
      type: "backup"
    }), Z && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return K.includes(S.AuthenticatorType.TOTP)
  }
  hasSMSEnabled() {
    return K.includes(S.AuthenticatorType.SMS)
  }
  hasWebAuthnEnabled() {
    return K.includes(S.AuthenticatorType.WEBAUTHN)
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
    return !W
  }
  getWebAuthnChallenge() {
    return X
  }
  getSuspendedUserToken() {
    return es
  }
}
l = "AuthenticationStore", (o = "displayName") in(s = eT) ? Object.defineProperty(s, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = l, t.default = new eT(f.default, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      authSessionIdHash: r,
      analyticsToken: a,
      auth: s
    } = e;
    eo("handleConnectionOpen called"), g.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, O.default)(n)), B = i, V = r, H = a, w = n.id, k = n.email, void 0 !== s && (K = s.authenticator_types), T.Storage.set(b, n.email), T.Storage.set(G, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      analyticsToken: r,
      token: a
    } = e;
    g.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, O.default)(n)), B = i, H = r, e_(a), ed(), w = n.id, T.Storage.set(G, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (eo("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (W || y(M.NEW_USER_AGE_GATE_MODAL_KEY) || y(M.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
        eE();
        return
      }
      C.default.track(D.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
        user_id: T.Storage.get(G)
      }), eI(), setImmediate(() => (0, p.transitionTo)(D.Routes.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (V = t)
  },
  LOGIN: function(e) {
    en = {}, Y = D.LoginStates.LOGGING_IN, J = "", r = null, null != e.login && (ea = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    Y = D.LoginStates.NONE, e_(t), ed(), z = "", Z = !1, X = null, J = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    z = "", Z = !1, X = null, Y = null != (en = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? D.LoginStates.LOGIN_AGE_GATE : D.LoginStates.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: i,
      backup: r,
      totp: a
    } = e;
    null != t && (z = t, Z = n, J = "", X = null != i ? i : null, q = r, Q = a), en = {}, Y = D.LoginStates.MFA_STEP
  },
  LOGIN_MFA: function() {
    Y = D.LoginStates.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    Y = D.LoginStates.MFA_STEP, en = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    Y = D.LoginStates.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    Y = D.LoginStates.MFA_SMS_STEP, J = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    Y = D.LoginStates.MFA_SMS_STEP, en = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    Y = D.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    Y = D.LoginStates.ACCOUNT_DISABLED, i = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    Y = D.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    Y = D.LoginStates.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    en = {}, Y = D.LoginStates.NONE, z = "", Z = !1, X = null, r = null, i = null, !t && (ec(), el(!1))
  },
  LOGIN_STATUS_RESET: function() {
    Y = D.LoginStates.NONE
  },
  LOGIN_SUSPENDED_USER: function(e) {
    let {
      suspendedUserToken: t
    } = e;
    es = t, setImmediate(() => (0, p.transitionTo)(D.Routes.ACCOUNT_STANDING))
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
  LOGOUT: eI,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == x ? null != t ? (C.default.track(D.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != F ? (0, c.extractId)(F) : null,
      new_fingerprint: (0, c.extractId)(t)
    }), x = t, F = t, T.Storage.set(U, x)) : el() : null != t && x !== t && C.default.track(D.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, c.extractId)(x),
      dropped_fingerprint: (0, c.extractId)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    r = t, j = D.RegistrationStates.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    en = {}, null != t && (d()(null != r, "Got birthday in multistep registration without existing form"), r = {
      ...r,
      birthday: t
    }), j = D.RegistrationStates.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    j = D.RegistrationStates.NONE, r = null, e_(t), ed()
  },
  REGISTER_FAILURE: function(e) {
    let {
      error: t
    } = e;
    en = function(e) {
      let t = {};
      if (t.error_code = e.code, null != e.errors) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t
      }
      return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t), j = null != t.getFieldErrors("date_of_birth") ? D.RegistrationStates.REGISTER_AGE_GATE : D.RegistrationStates.REGISTER_WITH_ERROR
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
    Y = D.LoginStates.FORGOT_PASSWORD, en = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    Y = D.LoginStates.NONE, en = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    eo("handleUpdateToken called"), e_(t, n), ed()
  },
  EXPERIMENTS_FETCH: eu,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    w = t.id, k = t.email, void 0 !== t.authenticator_types && (K = t.authenticator_types), T.Storage.set(b, t.email), T.Storage.set(G, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eE,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    en = {}
  },
  CLOSE_SUSPENDED_USER: function() {
    es = null, Y = D.LoginStates.NONE, eI(), setImmediate(() => (0, p.transitionTo)(D.Routes.DEFAULT_LOGGED_OUT))
  }
}, f.DispatchBand.Early)