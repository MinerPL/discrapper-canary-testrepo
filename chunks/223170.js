"use strict";
E.r(t), E.d(t, {
  welcomeScreenViewed: function() {
    return a
  },
  fetchWelcomeScreen: function() {
    return n
  },
  resetWelcomeScreen: function() {
    return A
  },
  clearWelcomeScreenSettings: function() {
    return u
  },
  updateSettings: function() {
    return I
  },
  saveWelcomeScreen: function() {
    return i
  }
});
var _ = E("872717"),
  s = E("913144"),
  T = E("49111");
let a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    s.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  n = async e => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await _.HTTP.get({
        url: T.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return s.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      s.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, A = () => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, u = () => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, I = e => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, i = async (e, t) => {
    s.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let E = await _.HTTP.patch({
        url: T.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      s.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: E.body
      })
    } catch (e) {
      s.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }