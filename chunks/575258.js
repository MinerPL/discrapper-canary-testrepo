"use strict";
var n, i, l, a, r = t(442837),
  o = t(570140),
  c = t(430824),
  d = t(981631);
let u = {
    description: "",
    channels: [],
    enabled: !1
  },
  E = u,
  _ = !1,
  I = !1,
  T = u;

function N(e) {
  let {
    welcomeScreen: s,
    guildId: t
  } = e, n = c.Z.getGuild(t);
  if (null != s) {
    var i, l;
    T = E = {
      description: null !== (i = s.description) && void 0 !== i ? i : "",
      channels: null !== (l = s.welcome_channels) && void 0 !== l ? l : [],
      enabled: null == n ? void 0 : n.hasFeature(d.oNc.WELCOME_SCREEN_ENABLED)
    }
  } else T = E = u;
  I = !1
}
class m extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
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
l = "WelcomeScreenSettingsStore", (i = "displayName") in(n = m) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new m(o.Z, {
  WELCOME_SCREEN_FETCH_SUCCESS: N,
  WELCOME_SCREEN_UPDATE: N,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    T = E, I = !1
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    T = u, E = u
  },
  WELCOME_SCREEN_SETTINGS_UPDATE: function(e) {
    let {
      settings: s
    } = e;
    T = {
      ...T,
      ...s
    }
  },
  WELCOME_SCREEN_SUBMIT: function() {
    _ = !0
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    N(e), _ = !1
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    I = !0, _ = !1
  }
})