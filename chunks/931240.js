"use strict";
n.d(t, {
  Ii: function() {
    return f
  },
  LX: function() {
    return E
  },
  WJ: function() {
    return d
  },
  Zx: function() {
    return A
  },
  _9: function() {
    return I
  },
  aH: function() {
    return S
  },
  mf: function() {
    return T
  },
  nE: function() {
    return c
  },
  nr: function() {
    return N
  },
  sv: function() {
    return _
  }
}), n(47120);
var i = n(544891),
  r = n(570140),
  s = n(479531),
  o = n(314897),
  a = n(970606),
  l = n(981631),
  u = n(976757);
async function _(e, t) {
  r.Z.dispatch({
    type: "CLAN_SETUP_SUBMIT",
    guildId: e
  });
  try {
    var n, o, a, u;
    await i.tn.post({
      url: l.ANM.GUILD_CONVERT_TO_CLAN(e),
      body: {
        tag: t.tag,
        description: t.description,
        play_style: t.playstyle,
        search_terms: Array.from(null !== (o = t.interests) && void 0 !== o ? o : new Set),
        game_application_ids: Array.from(null !== (a = t.gameApplicationIds) && void 0 !== a ? a : new Set),
        verification_form: {
          form_fields: null !== (u = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== u ? u : []
        },
        badge: t.badgeKind,
        badge_color_primary: t.badgePrimaryColor,
        badge_color_secondary: t.badgeSecondaryColor,
        banner: t.banner,
        brand_color_primary: t.brandPrimaryColor,
        brand_color_secondary: t.brandSecondaryColor,
        wildcard_descriptors: t.wildcardDescriptors
      }
    }), r.Z.dispatch({
      type: "CLAN_SETUP_SUCCESS",
      guildId: e
    })
  } catch (t) {
    throw r.Z.dispatch({
      type: "CLAN_SETUP_ERROR",
      guildId: e,
      error: new s.Z(t)
    }), t
  }
}
async function d(e) {
  let t = await i.tn.get({
    url: l.ANM.GUILD_CLAN_DISCOVERY_INFO(e)
  });
  return (0, u.Gh)(t.body)
}
async function c(e, t, n) {
  try {
    null != e && !0 === t && (0, a.hx)({
      guildId: e,
      userId: o.default.getId(),
      source: n
    });
    let s = await i.tn.put({
      url: l.ANM.USER_SET_CLAN_IDENTITY,
      body: {
        identity_guild_id: e,
        identity_enabled: t
      }
    });
    r.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: s.body
    })
  } catch (e) {
    return
  }
}

function E() {
  r.Z.dispatch({
    type: "CLAN_SETUP_RESET"
  })
}

function I(e, t) {
  r.Z.dispatch({
    type: "CLAN_SETUP_UPDATE",
    guildId: e,
    updates: t
  })
}

function T(e, t) {
  r.Z.dispatch({
    type: "CLAN_SETTINGS_UPDATE",
    guildId: e,
    updates: t
  })
}
let h = e => {
  var t, n, i, r, s, o;
  return {
    tag: e.tag,
    gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
    interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
    playstyle: e.play_style,
    description: e.description,
    wildcardDescriptors: e.wildcard_descriptors,
    verificationForm: {
      description: null !== (s = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== s ? s : "",
      formFields: null !== (o = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== o ? o : [],
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
  r.Z.dispatch({
    type: "CLAN_SETTINGS_FETCH_START"
  });
  let t = await i.tn.get({
    url: l.ANM.CLAN_SETTINGS(e)
  });
  r.Z.dispatch({
    type: "CLAN_SETTINGS_FETCH_SUCCESS",
    guildId: e,
    settings: h(t.body)
  })
}
async function f(e, t) {
  r.Z.dispatch({
    type: "CLAN_SETTINGS_SUBMIT",
    guildId: e
  });
  try {
    var n, o, a, u;
    let s = await i.tn.patch({
      url: l.ANM.CLAN_SETTINGS(e),
      body: {
        tag: t.tag,
        description: t.description,
        play_style: t.playstyle,
        search_terms: Array.from(null !== (o = t.interests) && void 0 !== o ? o : new Set),
        game_application_ids: Array.from(null !== (a = t.gameApplicationIds) && void 0 !== a ? a : new Set),
        verification_form: {
          form_fields: null !== (u = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== u ? u : []
        },
        badge: t.badgeKind,
        badge_color_primary: t.badgePrimaryColor,
        badge_color_secondary: t.badgeSecondaryColor,
        banner: t.banner,
        brand_color_primary: t.brandPrimaryColor,
        brand_color_secondary: t.brandSecondaryColor,
        wildcard_descriptors: t.wildcardDescriptors
      }
    });
    return r.Z.dispatch({
      type: "CLAN_SETTINGS_SUBMIT_SUCCESS"
    }), s.body
  } catch (e) {
    throw r.Z.dispatch({
      type: "CLAN_SETTINGS_SUBMIT_ERROR",
      error: new s.Z(e)
    }), e
  }
}
async function N(e) {
  try {
    await i.tn.post({
      url: l.ANM.DISABLE_CLAN(e)
    })
  } catch (e) {
    throw e
  }
}
async function A(e) {
  try {
    await i.tn.post({
      url: l.ANM.JOIN_WUMPUS_FEEDBACK_SQUAD(e)
    })
  } catch (e) {
    throw e
  }
}