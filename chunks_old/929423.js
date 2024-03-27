"use strict";
n.r(t), n.d(t, {
  saveGuildIdentityChanges: function() {
    return s
  },
  setCurrentGuild: function() {
    return u
  },
  initGuildIdentitySettings: function() {
    return o
  },
  closeGuildIdentitySettings: function() {
    return d
  },
  resetAndCloseGuildIdentityForm: function() {
    return c
  },
  setPendingAvatar: function() {
    return I
  },
  setPendingAvatarDecoration: function() {
    return f
  },
  setPendingProfileEffectId: function() {
    return _
  },
  setPendingBanner: function() {
    return E
  },
  setPendingBio: function() {
    return h
  },
  setPendingPronouns: function() {
    return T
  },
  setPendingNickname: function() {
    return N
  },
  setPendingThemeColors: function() {
    return S
  },
  resetPendingMemberChanges: function() {
    return L
  },
  resetPendingProfileChanges: function() {
    return p
  },
  resetAllPending: function() {
    return g
  },
  clearErrors: function() {
    return A
  },
  setDisableSubmit: function() {
    return D
  }
}), n("70102");
var l = n("872717"),
  r = n("913144"),
  a = n("54239"),
  i = n("49111");
async function s(e, t) {
  let {
    nick: n,
    avatar: a,
    avatarDecoration: s
  } = t;
  if (null == e) throw Error("Need guildId");
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let u = {
    nick: n,
    avatar: a,
    avatar_decoration_id: null === s ? null : null == s ? void 0 : s.id,
    avatar_decoration_sku_id: null === s ? null : null == s ? void 0 : s.skuId
  };
  try {
    let t = await l.HTTP.patch({
      url: i.Endpoints.SET_GUILD_MEMBER(e),
      body: u,
      oldFormErrors: !0
    });
    return r.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), r.default.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    })
  }
}

function u(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function o(e, t) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function d() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, a.popLayer)()
}

function c() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function I(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function f(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function _(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function E(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function h(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function T(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function N(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function S(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function L() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function p() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function g() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function A() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}

function D(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
    disable: e
  })
}