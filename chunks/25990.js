let r, i, a, o, s, l, u, c, d, _, E, f, h, p;
var m, I, T, g, S = n(979554),
  A = n(442837),
  N = n(570140),
  v = n(981631);
let O = v.QZA.CLOSED,
  R = {};

function C() {
  O = v.QZA.OPEN, R = {};
}

function y() {
  O = v.QZA.CLOSED, R = {};
}

function D() {
  L(), b(), R = {};
}

function L() {
  r = void 0, i = void 0, a = void 0, o = void 0;
}

function b() {
  s = void 0, l = void 0, u = void 0, c = void 0, d = void 0, o = void 0;
}

function M() {
  E = void 0, f = void 0, h = void 0, p = void 0, _ = void 0;
}
class P extends(g = A.ZP.Store) {
  getFormState() {
return O;
  }
  getErrors() {
return R;
  }
  showNotice() {
return void 0 !== r || void 0 !== s || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d || void 0 !== a || void 0 !== o || void 0 !== i;
  }
  getIsSubmitDisabled() {
return void 0 !== l && l.length > v.tPV;
  }
  getPendingAvatar() {
return r;
  }
  getPendingGlobalName() {
return i;
  }
  getPendingBanner() {
return s;
  }
  getPendingBio() {
return l;
  }
  getPendingPronouns() {
return u;
  }
  getPendingAccentColor() {
return c;
  }
  getPendingThemeColors() {
return d;
  }
  getPendingAvatarDecoration() {
return a;
  }
  getPendingProfileEffectId() {
return o;
  }
  getAllPending() {
return {
  pendingAvatar: r,
  pendingBanner: s,
  pendingBio: l,
  pendingPronouns: u,
  pendingAccentColor: c,
  pendingThemeColors: d,
  pendingAvatarDecoration: a,
  pendingProfileEffectId: o,
  pendingGlobalName: i
};
  }
  getTryItOutThemeColors() {
return _;
  }
  getTryItOutAvatar() {
return E;
  }
  getTryItOutAvatarDecoration() {
return f;
  }
  getTryItOutProfileEffectId() {
return h;
  }
  getTryItOutBanner() {
return p;
  }
  getAllTryItOut() {
return {
  tryItOutThemeColors: _,
  tryItOutAvatar: E,
  tryItOutAvatarDecoration: f,
  tryItOutProfileEffectId: h,
  tryItOutBanner: p
};
  }
}
T = 'UserSettingsAccountStore', (I = 'displayName') in(m = P) ? Object.defineProperty(m, I, {
  value: T,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : m[I] = T, t.Z = new P(N.Z, {
  USER_SETTINGS_ACCOUNT_INIT: C,
  USER_SETTINGS_MODAL_INIT: C,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
let {
  section: t
} = e;
return t === v.oAB.ACCOUNT && C();
  },
  USER_SETTINGS_ACCOUNT_CLOSE: y,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
D(), M(), y();
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
O = v.QZA.SUBMITTING, R = {};
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
var t;
if (O !== v.QZA.SUBMITTING)
  return !1;
O = v.QZA.OPEN, R = null !== (t = e.errors) && void 0 !== t ? t : {};
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
let {
  avatar: t
} = e;
r = t, E = void 0;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
let {
  globalName: t
} = e;
i = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
let {
  avatarDecoration: t
} = e;
a = t;
  },
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
let {
  item: t
} = e;
(null == t ? void 0 : t.type) === S.Z.PROFILE_EFFECT ? (f = null, h = null == t ? void 0 : t.id) : (h = null, f = t);
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
let {
  profileEffectId: t
} = e;
o = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
let {
  banner: t
} = e;
s = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
let {
  bio: t
} = e;
l = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
let {
  pronouns: t
} = e;
u = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
let {
  color: t
} = e;
c = t;
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
let {
  themeColors: t
} = e;
d = t;
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
let {
  avatar: t
} = e;
E = t;
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
let {
  avatarDecoration: t
} = e;
f = t;
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
let {
  profileEffectId: t
} = e;
h = t;
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
let {
  banner: t
} = e;
p = t;
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
let {
  themeColors: t
} = e;
_ = t;
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
R = {};
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: L,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: b,
  USER_SETTINGS_RESET_ALL_PENDING: D,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: M,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
a = void 0;
  },
  LOGOUT: function() {
r = void 0;
  }
});