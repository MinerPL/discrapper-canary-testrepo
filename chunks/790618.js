"use strict";
let s, o, a, r, l, i, E, _, u, T, d, S, N, c;
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var C = n("265586"),
  A = n("446674"),
  I = n("913144"),
  f = n("49111");
let R = f.FormStates.CLOSED,
  U = {},
  O = !1;

function m() {
  R = f.FormStates.OPEN, U = {}
}

function p() {
  R = f.FormStates.CLOSED, U = {}
}

function M() {
  h(), v(), U = {}
}

function h() {
  s = void 0, o = void 0, a = void 0, r = void 0
}

function v() {
  l = void 0, i = void 0, E = void 0, _ = void 0, u = void 0, r = void 0
}

function g() {
  d = void 0, S = void 0, N = void 0, c = void 0, T = void 0
}
class G extends A.default.Store {
  getFormState() {
    return R
  }
  getErrors() {
    return U
  }
  showNotice() {
    return void 0 !== s || void 0 !== l || void 0 !== i || void 0 !== E || void 0 !== _ || void 0 !== u || void 0 !== a || void 0 !== r || void 0 !== o
  }
  getPendingAvatar() {
    return s
  }
  getPendingGlobalName() {
    return o
  }
  getPendingBanner() {
    return l
  }
  getPendingBio() {
    return i
  }
  getPendingPronouns() {
    return E
  }
  getPendingAccentColor() {
    return _
  }
  getPendingThemeColors() {
    return u
  }
  getPendingAvatarDecoration() {
    return a
  }
  getPendingProfileEffectId() {
    return r
  }
  getAllPending() {
    return {
      pendingAvatar: s,
      pendingBanner: l,
      pendingBio: i,
      pendingPronouns: E,
      pendingAccentColor: _,
      pendingThemeColors: u,
      pendingAvatarDecoration: a,
      pendingProfileEffectId: r,
      pendingGlobalName: o
    }
  }
  getTryItOutThemeColors() {
    return T
  }
  getTryItOutAvatar() {
    return d
  }
  getTryItOutAvatarDecoration() {
    return S
  }
  getTryItOutProfileEffectId() {
    return N
  }
  getTryItOutBanner() {
    return c
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: T,
      tryItOutAvatar: d,
      tryItOutAvatarDecoration: S,
      tryItOutProfileEffectId: N,
      tryItOutBanner: c
    }
  }
  getIsDisableSubmit() {
    return O
  }
}
G.displayName = "UserSettingsAccountStore";
var D = new G(I.default, {
  USER_SETTINGS_ACCOUNT_INIT: m,
  USER_SETTINGS_MODAL_INIT: m,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: m,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    return t === f.UserSettingsSections.ACCOUNT && m()
  },
  USER_SETTINGS_ACCOUNT_CLOSE: p,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
    M(), g(), p()
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
    R = f.FormStates.SUBMITTING, U = {}
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
    var t;
    if (R !== f.FormStates.SUBMITTING) return !1;
    R = f.FormStates.OPEN, U = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    s = t, d = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
    let {
      globalName: t
    } = e;
    o = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    a = t
  },
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
    let {
      item: t
    } = e;
    (null == t ? void 0 : t.type) === C.CollectiblesItemType.PROFILE_EFFECT ? (S = null, N = null == t ? void 0 : t.id) : (N = null, S = t)
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    r = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    l = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    i = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    E = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
    let {
      color: t
    } = e;
    _ = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    u = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    d = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    S = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    N = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
    let {
      banner: t
    } = e;
    c = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    T = t
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
    U = {}
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: h,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: v,
  USER_SETTINGS_RESET_ALL_PENDING: M,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: g,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
    a = void 0
  },
  LOGOUT: function() {
    s = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    O = t
  }
})