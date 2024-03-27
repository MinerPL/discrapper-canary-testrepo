"use strict";
E.r(t), E.d(t, {
  NO_WELCOME_SCREEN: function() {
    return T
  },
  default: function() {
    return o
  }
});
var _ = E("446674"),
  s = E("913144");
let T = {},
  a = {},
  n = {},
  A = !1,
  u = !1,
  I = !1;

function i(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (a[t.id] = t.welcome_screen, !0)
}

function l(e) {
  let {
    welcomeScreen: t,
    guildId: E
  } = e;
  a[E] = null != t ? t : T
}
class L extends _.default.Store {
  get(e) {
    if (null != e) return a[e]
  }
  isFetching() {
    return u
  }
  hasError() {
    return I
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? A : n[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = a[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
L.displayName = "WelcomeScreenStore";
var o = new L(s.default, {
  INVITE_RESOLVE_SUCCESS: i,
  INVITE_ACCEPT_SUCCESS: i,
  WELCOME_SCREEN_SUBMIT_SUCCESS: l,
  WELCOME_SCREEN_UPDATE: l,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: E
    } = e;
    n[t] = !0, E && (A = !0)
  },
  GUILD_STOP_LURKING: function() {
    A = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    n[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    u = !0, I = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    u = !1, I = !1;
    let {
      welcomeScreen: t,
      guildId: E
    } = e;
    a[E] = null != t ? t : T
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    u = !1, I = !0
  }
})