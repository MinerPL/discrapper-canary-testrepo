"use strict";
s.r(t), s.d(t, {
  close: function() {
    return i
  },
  resetCode: function() {
    return r
  },
  setCode: function() {
    return o
  },
  saveCode: function() {
    return d
  }
});
var a = s("872717"),
  l = s("913144"),
  n = s("49111");

function i() {
  l.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_CLOSE"
  })
}

function r() {
  l.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_RESET"
  })
}

function o(e) {
  l.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_SET",
    code: e
  })
}

function d(e, t) {
  return a.HTTP.patch({
    url: n.Endpoints.GUILD_VANITY_URL(e),
    body: {
      code: t
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        code: t,
        uses: s
      }
    } = e;
    l.default.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: s
    })
  }, e => (l.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_ERROR",
    error: e.body
  }), e))
}