"use strict";
n.d(t, {
  Cf: function() {
    return h
  },
  Fq: function() {
    return u
  },
  HP: function() {
    return l
  },
  I5: function() {
    return c
  },
  ID: function() {
    return S
  },
  IO: function() {
    return A
  },
  It: function() {
    return d
  },
  W3: function() {
    return O
  },
  b9: function() {
    return R
  },
  cV: function() {
    return E
  },
  g_: function() {
    return T
  },
  iq: function() {
    return a
  },
  jR: function() {
    return _
  },
  pG: function() {
    return m
  },
  sr: function() {
    return f
  },
  xn: function() {
    return I
  },
  z5: function() {
    return N
  }
}), n(411104);
var i = n(544891),
  r = n(570140),
  s = n(37234),
  o = n(981631);
async function a(e, t) {
  let {
    nick: n,
    avatar: s,
    avatarDecoration: a
  } = t;
  if (null == e) throw Error("Need guildId");
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let l = {
    nick: n,
    avatar: s,
    avatar_decoration_id: null === a ? null : null == a ? void 0 : a.id,
    avatar_decoration_sku_id: null === a ? null : null == a ? void 0 : a.skuId
  };
  try {
    let t = await i.tn.patch({
      url: o.ANM.SET_GUILD_MEMBER(e),
      body: l,
      oldFormErrors: !0
    });
    return r.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), r.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    })
  }
}

function l(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function u(e, t) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function _() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, s.xf)()
}

function d() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function c(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function E(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function I(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function T(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function h(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function S(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function f(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function N(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function A() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function m() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function O() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function R() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}