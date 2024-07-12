let r, i;
n.r(t), n(47120), n(177593), n(653041), n(411104);
var a, o, s, l, u = n(512722),
  c = n.n(u),
  d = n(213919),
  _ = n(756647),
  E = n(442837),
  f = n(544891),
  h = n(433517),
  p = n(570140),
  m = n(911969),
  I = n(109728),
  T = n(670890),
  g = n(569611),
  S = n(710845),
  A = n(703656),
  N = n(786213),
  v = n(626135),
  O = n(449934),
  R = n(960048),
  C = n(117240),
  y = n(412788),
  D = n(981631),
  L = n(723359);
let b = n(952265).nf,
  M = new S.Z('AuthenticationStore'),
  P = 'fingerprint',
  U = 'email_cache',
  w = 'user_id_cache',
  x = null,
  G = null,
  k = null,
  B = null,
  F = null,
  V = null,
  H = null,
  Z = null,
  Y = D.u34.NONE,
  j = D.$ib.NONE,
  W = !1,
  K = [],
  z = '',
  q = !1,
  Q = null,
  X = !1,
  $ = !1,
  J = '',
  ee = !1,
  et = !1,
  en = {},
  er = {},
  ei = null,
  ea = null,
  eo = null,
  es = null,
  el = !1;

function eu(e) {
  let t = {};
  if (t.error_code = e.code, null != e.errors) {
for (let n of Object.keys(e.errors))
  t[n] = [e.getFirstFieldErrorMessage(n)];
return t;
  }
  return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}

function ec(e) {
  let t = null != d.getToken(),
n = null != h.K.get(D.B1h);
  M.verbose(e, {
tokenManagerHasToken: t,
storageHasToken: n
  });
}

function ed() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (V = h.K.get(P), null != ea)
return ea;
  let t = null != V ? V : d.getToken();
  if (!(!(0, A.m1)() || !e && null != t || C.Z.isHandoffAvailable()))
e_({
  withGuildExperiments: !0
});
}

function e_(e) {
  let {
withGuildExperiments: t
  } = e, n = {}, r = v.default.getSuperPropertiesBase64();
  null != r && (n['X-Super-Properties'] = r), null != V && (n['X-Fingerprint'] = V), ea = f.tn.get({
url: D.ANM.EXPERIMENTS,
query: {
  with_guild_experiments: t
},
headers: n,
context: {
  location: (0, A.Wf)()
},
retries: 3,
oldFormErrors: !0
  }).then(e => {
let {
  fingerprint: t,
  assignments: n,
  guild_experiments: r
} = e.body;
t && p.Z.dispatch({
  type: 'FINGERPRINT',
  fingerprint: t
}), p.Z.dispatch({
  type: 'EXPERIMENTS_FETCH_SUCCESS',
  fingerprint: t,
  experiments: n,
  guildExperiments: r
}), ea = null, (0, I.$L)();
  }, () => {
ea = null, p.Z.dispatch({
  type: 'EXPERIMENTS_FETCH_FAILURE'
});
  });
}

function eE() {
  H = V, V = null, h.K.remove(P);
}

function ef(e, t) {
  ec('setAuthToken called.'), d.setToken(e, t);
}

function eh() {
  return ec('removeAuthToken called.'), d.removeToken();
}

function ep() {
  W = !0, em(), p.Z.wait(() => {
(0, A.uL)(D.Z5c.REGISTER);
  });
}

function em(e) {
  var t;
  ec('handleLogout called.');
  let n = eh();
  !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && eE(), ed()), E.ZP.PersistedStore.clearAll({
omit: [
  'InstallationManagerStore',
  'AgeGateStore',
  'NativePermissionsStore',
  'MultiAccountStore',
  'DraftStore',
  'OverlayStoreV2',
  'StreamerModeStore',
  'LoginRequiredActionStore'
],
type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
  }), y.Z.clearAll();
  g.ZH(), R.Z.clearUser(), h.K.remove(w), x = null, Y = (null == e ? void 0 : e.isSwitchingAccount) ? D.u34.LOGGING_IN : D.u34.NONE, j = D.$ib.NONE, z = '', J = '', Q = null, q = !1, ee = !1, et = !1, en = {}, er = {}, el = !1;
}
class eI extends(a = E.ZP.Store) {
  initialize() {
x = h.K.get(w), G = h.K.get(U), eo = h.K.get('login_cache'), null == d.getToken() && ed(), this.addChangeListener(() => (0, T.u)(x));
  }
  getEmail() {
return G;
  }
  getLogin() {
return eo;
  }
  didVerifyFail() {
return ee;
  }
  getVerifyErrors() {
return en;
  }
  didVerifySucceed() {
return et;
  }
  getLoginStatus() {
return Y;
  }
  getRegisterStatus() {
return j;
  }
  getId() {
return x;
  }
  getSessionId() {
return k;
  }
  getAuthSessionIdHash() {
return B;
  }
  getStaticAuthSessionId() {
return F;
  }
  getToken() {
return (0, O.LP)();
  }
  isAuthenticated() {
return (0, O.$8)();
  }
  getFingerprint() {
return V;
  }
  getAnalyticsToken() {
return Z;
  }
  getErrors() {
return er;
  }
  getMFATicket() {
return z;
  }
  getMFASMS() {
return q;
  }
  getMFATotp() {
return X;
  }
  getMFABackup() {
return $;
  }
  getMFAWebAuthn() {
return Q;
  }
  getMFAMethods() {
let e = [];
return null != Q && e.push({
  type: 'webauthn',
  challenge: Q
}), X && e.push({
  type: 'totp',
  backup_codes_allowed: $
}), $ && e.push({
  type: 'backup'
}), q && e.push({
  type: 'sms'
}), e;
  }
  hasTOTPEnabled() {
return K.includes(m.Pi.TOTP);
  }
  hasSMSEnabled() {
return K.includes(m.Pi.SMS);
  }
  hasWebAuthnEnabled() {
return K.includes(m.Pi.WEBAUTHN);
  }
  getMaskedPhone() {
return J;
  }
  getCredentials() {
if (null == r)
  throw Error('no credentials');
return r;
  }
  getVerifyingUserId() {
return ei;
  }
  getCurrentRegistrationOptions() {
return i;
  }
  allowLogoutRedirect() {
return !W;
  }
  getWebAuthnChallenge() {
return Q;
  }
  getSuspendedUserToken() {
return es;
  }
  getIsPasswordlessActive() {
return el;
  }
}
l = 'AuthenticationStore', (s = 'displayName') in(o = eI) ? Object.defineProperty(o, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = l, t.default = new eI(p.Z, {
  CONNECTION_OPEN: function(e) {
var t;
let {
  user: n,
  sessionId: r,
  authSessionIdHash: i,
  analyticsToken: a,
  auth: o,
  staticAuthSessionId: s
} = e;
ec('handleConnectionOpen called'), R.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), k = r, B = i, F = s, Z = a, x = n.id, G = n.email, void 0 !== o && (K = o.authenticator_types), h.K.set(U, n.email), h.K.set(w, n.id);
  },
  OVERLAY_INITIALIZE: function(e) {
var t;
let {
  user: n,
  sessionId: r,
  analyticsToken: i,
  token: a
} = e;
R.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), k = r, Z = i, ef(a), eE(), x = n.id, h.K.set(w, n.id);
  },
  CONNECTION_CLOSED: function(e) {
let {
  code: t
} = e;
if (ec('handleConnectionClosed called with code '.concat(t, '.')), 4004 === t) {
  if (W || b(L.$$) || b(L.dG)) {
    ep();
    return;
  }
  v.default.track(D.rMx.APP_USER_DEAUTHENTICATED, {
    user_id: h.K.get(w)
  }), em(), setImmediate(() => (0, A.uL)(D.Z5c.DEFAULT_LOGGED_OUT));
}
  },
  AUTH_SESSION_CHANGE: function(e) {
let {
  authSessionIdHash: t
} = e;
null != t && (B = t);
  },
  LOGIN: function(e) {
er = {}, Y = D.u34.LOGGING_IN, J = '', i = null, null != e.login && (eo = e.login);
  },
  LOGIN_SUCCESS: function(e) {
let {
  token: t
} = e;
Y = D.u34.NONE, ef(t), eE(), z = '', q = !1, Q = null, el = !1, J = '';
  },
  LOGIN_FAILURE: function(e) {
let {
  error: t
} = e;
z = '', q = !1, Q = null, Y = null != (er = function(e) {
  if (Object.keys(e.fields).length > 0)
    return e.fields;
  let t = {
    message: e.message
  };
  return null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE;
  },
  LOGIN_MFA_STEP: function(e) {
let {
  ticket: t,
  sms: n,
  webauthn: r,
  backup: i,
  totp: a
} = e;
null != t && (z = t, q = n, J = '', Q = null != r ? r : null, $ = i, X = a), er = {}, Y = D.u34.MFA_STEP;
  },
  LOGIN_MFA: function() {
Y = D.u34.LOGGING_IN_MFA;
  },
  LOGIN_MFA_FAILURE: function(e) {
let {
  message: t
} = e;
Y = D.u34.MFA_STEP, er = {
  code: t
};
  },
  LOGIN_MFA_SMS: function() {
Y = D.u34.LOGGING_IN_MFA_SMS;
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
let {
  phone: t
} = e;
Y = D.u34.MFA_SMS_STEP, J = t;
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
let {
  message: t
} = e;
Y = D.u34.MFA_SMS_STEP, er = {
  code: t
};
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
Y = D.u34.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
Y = D.u34.ACCOUNT_DISABLED, r = e.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
Y = D.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
Y = D.u34.PHONE_IP_AUTHORIZATION;
  },
  LOGIN_RESET: function(e) {
let {
  isMultiAccount: t
} = e;
if (er = {}, Y = D.u34.NONE, z = '', q = !1, Q = null, i = null, r = null, !t)
  eh(), ed(!1);
  },
  LOGIN_STATUS_RESET: function() {
Y = D.u34.NONE;
  },
  LOGIN_SUSPENDED_USER: function(e) {
let {
  suspendedUserToken: t
} = e;
el = !1, es = t, setImmediate(() => (0, A.uL)(D.Z5c.ACCOUNT_STANDING));
  },
  SET_LOGIN_CREDENTIALS: function(e) {
let {
  login: t,
  password: n
} = e;
r = {
  login: t,
  password: n
};
  },
  LOGOUT: em,
  FINGERPRINT: function(e) {
let t = e.fingerprint;
null == V ? null != t ? (v.default.track(D.rMx.USER_FINGERPRINT_CHANGED, {
  old_fingerprint: null != H ? (0, _.s)(H) : null,
  new_fingerprint: (0, _.s)(t)
}), V = t, H = t, h.K.set(P, V)) : ed() : null != t && V !== t && v.default.track(D.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
  fingerprint: (0, _.s)(V),
  dropped_fingerprint: (0, _.s)(t)
});
  },
  REGISTER_SAVE_FORM: function(e) {
let {
  form: t
} = e;
i = t, j = D.$ib.REGISTER_AGE_GATE;
  },
  REGISTER: function(e) {
let {
  birthday: t
} = e;
er = {}, null != t && (c()(null != i, 'Got birthday in multistep registration without existing form'), i = {
  ...i,
  birthday: t
}), j = D.$ib.REGISTERING;
  },
  REGISTER_SUCCESS: function(e) {
let {
  token: t
} = e;
j = D.$ib.NONE, i = null, ef(t), eE();
  },
  REGISTER_FAILURE: function(e) {
let {
  error: t
} = e;
er = eu(t), j = null != t.getFieldErrors('date_of_birth') ? D.$ib.REGISTER_AGE_GATE : D.$ib.REGISTER_WITH_ERROR;
  },
  VERIFY_FAILURE: function(e) {
let {
  errors: t
} = e;
ee = !0, et = !1, en = null != t ? t : {};
  },
  VERIFY_SUCCESS: function(e) {
et = !0, ee = !1, en = {}, ei = e.verifyingUserId;
  },
  START_SESSION: function() {
if (0 === Object.keys(er).length)
  return !1;
er = {};
  },
  FORGOT_PASSWORD_REQUEST: function() {
Y = D.u34.FORGOT_PASSWORD, er = {};
  },
  FORGOT_PASSWORD_SENT: function() {
Y = D.u34.NONE, er = {};
  },
  UPDATE_TOKEN: function(e) {
let {
  token: t,
  userId: n
} = e;
ec('handleUpdateToken called'), ef(t, n), eE();
  },
  EXPERIMENTS_FETCH: e_,
  CURRENT_USER_UPDATE: function(e) {
let {
  user: t
} = e;
x = t.id, G = t.email, void 0 !== t.authenticator_types && (K = t.authenticator_types), h.K.set(U, t.email), h.K.set(w, t.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ep,
  CLEAR_AUTHENTICATION_ERRORS: function() {
er = {};
  },
  CLOSE_SUSPENDED_USER: function() {
es = null, Y = D.u34.NONE, em(), setImmediate(() => (0, A.uL)(D.Z5c.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function(e) {
let {
  error: t
} = e;
z = '', q = !1, Q = null, el = !1, Y = null != (er = eu(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE;
  },
  PASSWORDLESS_START: function() {
er = {}, el = !0;
  }
}, p.c.Early);