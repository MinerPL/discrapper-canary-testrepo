"use strict";
let i, r, s, o, a, l, u, _, d, c, E;
var I, T, h, S, f = n(442837),
  N = n(570140),
  A = n(981631);
let m = A.QZA.CLOSED,
  O = {};

function R() {
  m = A.QZA.CLOSED, O = {}, d = null, c = void 0, E = []
}

function C() {
  p(), g(), O = {}, m = A.QZA.OPEN
}

function p() {
  i = void 0, u = void 0, r = void 0
}

function g() {
  o = void 0, a = void 0, l = void 0, _ = void 0, s = void 0
}
class L extends(S = f.ZP.Store) {
  getFormState() {
    return m
  }
  getErrors() {
    return O
  }
  showNotice() {
    return void 0 !== i || void 0 !== r || void 0 !== s || void 0 !== o || void 0 !== a || void 0 !== l || void 0 !== u || void 0 !== _
  }
  getIsSubmitDisabled() {
    return void 0 !== a && a.length > A.tPV
  }
  getPendingAvatar() {
    return i
  }
  getPendingAvatarDecoration() {
    return r
  }
  getPendingProfileEffectId() {
    return s
  }
  getPendingBanner() {
    return o
  }
  getPendingBio() {
    return a
  }
  getPendingNickname() {
    return u
  }
  getPendingPronouns() {
    return l
  }
  getPendingAccentColor() {
    return u
  }
  getPendingThemeColors() {
    return _
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingAvatarDecoration: r,
      pendingProfileEffectId: s,
      pendingBanner: o,
      pendingBio: a,
      pendingPronouns: l,
      pendingNickname: u,
      pendingThemeColors: _
    }
  }
  getGuild() {
    return d
  }
  getSource() {
    return c
  }
  getAnalyticsLocations() {
    return E
  }
}
h = "GuildIdentitySettingsStore", (T = "displayName") in(I = L) ? Object.defineProperty(I, T, {
  value: h,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[T] = h, t.Z = new L(N.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    d = e.guild, m = A.QZA.OPEN, O = {}, c = e.source, E = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: R,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    C(), R()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    d = e.guild, O = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    m = A.QZA.SUBMITTING, O = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (m !== A.QZA.SUBMITTING) return !1;
    m = A.QZA.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    m = A.QZA.OPEN, O = e.errors
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    i = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    r = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    o = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    u = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    _ = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: C,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: C,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    O = {}
  }
})