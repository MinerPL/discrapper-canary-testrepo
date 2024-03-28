"use strict";
s.r(t), s.d(t, {
  clearWelcomeScreenSettings: function() {
    return u
  },
  fetchWelcomeScreen: function() {
    return T
  },
  resetWelcomeScreen: function() {
    return i
  },
  saveWelcomeScreen: function() {
    return l
  },
  updateSettings: function() {
    return A
  },
  welcomeScreenViewed: function() {
    return n
  }
});
var E = s("544891"),
  _ = s("570140"),
  a = s("981631");
let n = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    _.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  T = async e => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await E.HTTP.get({
        url: a.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return _.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      _.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, i = () => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, u = () => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, A = e => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, l = async (e, t) => {
    _.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let s = await E.HTTP.patch({
        url: a.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      _.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: s.body
      })
    } catch (e) {
      _.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }