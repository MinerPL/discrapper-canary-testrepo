"use strict";
n.r(t), n.d(t, {
  adoptClanIdentity: function() {
    return c
  },
  convertGuildToClan: function() {
    return d
  },
  disableClan: function() {
    return A
  },
  fetchClanSettings: function() {
    return S
  },
  getClanInfo: function() {
    return _
  },
  joinWumpusFeedbackSquad: function() {
    return m
  },
  resetClanSetup: function() {
    return E
  },
  saveClanSettings: function() {
    return h
  },
  updateClanSettings: function() {
    return T
  },
  updateClanSetup: function() {
    return I
  }
}), n("47120");
var i = n("544891"),
  r = n("570140"),
  a = n("479531"),
  s = n("314897"),
  o = n("970606"),
  l = n("981631"),
  u = n("976757");
async function d(e, t) {
  r.default.dispatch({
    type: "CLAN_SETUP_SUBMIT",
    guildId: e
  });
  try {
    var n, s, o, u;
    await i.HTTP.post({
      url: l.Endpoints.GUILD_CONVERT_TO_CLAN(e),
      body: {
        tag: t.tag,
        description: t.description,
        play_style: t.playstyle,
        search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set),
        game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set),
        verification_form: {
          form_fields: null !== (u = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== u ? u : []
        },
        badge: t.badgeKind,
        badge_color_primary: t.badgePrimaryColor,
        badge_color_secondary: t.badgeSecondaryColor,
        banner: t.banner,
        brand_color_primary: t.brandPrimaryColor,
        brand_color_secondary: t.brandSecondaryColor,
        wildcard_descriptors: t.wildcardDescriptors,
        badge_image: t.badgeImage
      }
    }), r.default.dispatch({
      type: "CLAN_SETUP_SUCCESS",
      guildId: e
    })
  } catch (t) {
    throw r.default.dispatch({
      type: "CLAN_SETUP_ERROR",
      guildId: e,
      error: new a.default(t)
    }), t
  }
}
async function _(e) {
  let t = await i.HTTP.get({
    url: l.Endpoints.GUILD_CLAN_DISCOVERY_INFO(e)
  });
  return (0, u.buildClanFromServer)(t.body)
}
async function c(e, t, n) {
  try {
    null != e && !0 === t && (0, o.trackClanAdoptIdentity)({
      guildId: e,
      userId: s.default.getId(),
      source: n
    });
    let a = await i.HTTP.put({
      url: l.Endpoints.USER_SET_CLAN_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      }
    });
    r.default.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: a.body
    })
  } catch (e) {
    return
  }
}

function E() {
  r.default.dispatch({
    type: "CLAN_SETUP_RESET"
  })
}

function I(e, t) {
  r.default.dispatch({
    type: "CLAN_SETUP_UPDATE",
    guildId: e,
    updates: t
  })
}

function T(e, t) {
  r.default.dispatch({
    type: "CLAN_SETTINGS_UPDATE",
    guildId: e,
    updates: t
  })
}
let f = e => {
  var t, n, i, r, a, s;
  return {
    tag: e.tag,
    gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
    interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
    playstyle: e.play_style,
    description: e.description,
    wildcardDescriptors: e.wildcard_descriptors,
    verificationForm: {
      description: null !== (a = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== a ? a : "",
      formFields: null !== (s = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== s ? s : [],
      version: ""
    },
    badgeKind: e.badge,
    badgePrimaryColor: e.badge_color_primary,
    badgeSecondaryColor: e.badge_color_secondary,
    banner: e.banner,
    brandPrimaryColor: e.brand_color_primary,
    brandSecondaryColor: e.brand_color_secondary
  }
};
async function S(e) {
  r.default.dispatch({
    type: "CLAN_SETTINGS_FETCH_START"
  });
  let t = await i.HTTP.get({
    url: l.Endpoints.CLAN_SETTINGS(e)
  });
  r.default.dispatch({
    type: "CLAN_SETTINGS_FETCH_SUCCESS",
    guildId: e,
    settings: f(t.body)
  })
}
async function h(e, t) {
  r.default.dispatch({
    type: "CLAN_SETTINGS_SUBMIT",
    guildId: e
  });
  try {
    var n, s, o, u;
    let a = await i.HTTP.patch({
      url: l.Endpoints.CLAN_SETTINGS(e),
      body: {
        tag: t.tag,
        description: t.description,
        play_style: t.playstyle,
        search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set),
        game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set),
        verification_form: {
          form_fields: null !== (u = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== u ? u : []
        },
        badge: t.badgeKind,
        badge_color_primary: t.badgePrimaryColor,
        badge_color_secondary: t.badgeSecondaryColor,
        banner: t.banner,
        brand_color_primary: t.brandPrimaryColor,
        brand_color_secondary: t.brandSecondaryColor,
        wildcard_descriptors: t.wildcardDescriptors,
        badge_image: t.badgeImage
      }
    });
    return r.default.dispatch({
      type: "CLAN_SETTINGS_SUBMIT_SUCCESS"
    }), a.body
  } catch (e) {
    throw r.default.dispatch({
      type: "CLAN_SETTINGS_SUBMIT_ERROR",
      error: new a.default(e)
    }), e
  }
}
async function A(e) {
  try {
    await i.HTTP.post({
      url: l.Endpoints.DISABLE_CLAN(e)
    })
  } catch (e) {
    throw e
  }
}
async function m(e) {
  try {
    await i.HTTP.post({
      url: l.Endpoints.JOIN_WUMPUS_FEEDBACK_SQUAD(e)
    })
  } catch (e) {
    throw e
  }
}