"use strict";
s.r(t);
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("430824"),
  u = s("981631");
let c = {
    description: "",
    channels: [],
    enabled: !1
  },
  E = c,
  _ = !1,
  I = !1,
  T = c;

function S(e) {
  let {
    welcomeScreen: t,
    guildId: s
  } = e, a = d.default.getGuild(s);
  if (null != t) {
    var l, n;
    T = E = {
      description: null !== (l = t.description) && void 0 !== l ? l : "",
      channels: null !== (n = t.welcome_channels) && void 0 !== n ? n : [],
      enabled: null == a ? void 0 : a.hasFeature(u.GuildFeatures.WELCOME_SCREEN_ENABLED)
    }
  } else T = E = c;
  I = !1
}
class f extends(i = r.default.Store) {
  initialize() {
    this.waitFor(d.default)
  }
  get() {
    return T
  }
  showNotice() {
    return I
  }
  getSettingsProps() {
    return {
      submitting: _,
      hasErrors: I,
      welcomeSettings: T,
      originalWelcomeSettings: E
    }
  }
}
n = "WelcomeScreenSettingsStore", (l = "displayName") in(a = f) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new f(o.default, {
  WELCOME_SCREEN_FETCH_SUCCESS: S,
  WELCOME_SCREEN_UPDATE: S,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    T = E, I = !1
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    T = c, E = c
  },
  WELCOME_SCREEN_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    T = {
      ...T,
      ...t
    }
  },
  WELCOME_SCREEN_SUBMIT: function() {
    _ = !0
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    S(e), _ = !1
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    I = !0, _ = !1
  }
})