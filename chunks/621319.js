"use strict";
t.d(s, {
  Gy: function() {
    return o
  },
  H7: function() {
    return r
  },
  en: function() {
    return c
  },
  xv: function() {
    return a
  }
});
var n = t(544891),
  i = t(570140),
  l = t(981631);

function a() {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_CLOSE"
  })
}

function r() {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_RESET"
  })
}

function o(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_SET",
    code: e
  })
}

function c(e, s) {
  return n.tn.patch({
    url: l.ANM.GUILD_VANITY_URL(e),
    body: {
      code: s
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        code: s,
        uses: t
      }
    } = e;
    i.Z.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: s,
      uses: t
    })
  }, e => (i.Z.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_ERROR",
    error: e.body
  }), e))
}