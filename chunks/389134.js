"use strict";
s.r(t), s("47120");
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("944163"),
  u = s("116175"),
  c = s("308083");
let E = () => ({
    gameApplicationIds: new Set,
    playstyle: c.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [c.EMPTY_WILDCARD, c.EMPTY_WILDCARD, c.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...d.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: u.ClanBadgeKind.SWORD,
    badgePrimaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].primary,
    badgeSecondaryColor: u.CLAN_BADGE_PALETTE_PRESETS["0"].secondary,
    banner: c.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].primary,
    brandSecondaryColor: c.CLAN_BRAND_PALETTE_PRESETS["0"].secondary
  }),
  _ = E(),
  I = !1,
  T = {};
class S extends(a = r.default.Store) {
  getState() {
    return {
      settings: _,
      errors: T,
      submitting: I
    }
  }
}
i = "ClanSettingsStore", (n = "displayName") in(l = S) ? Object.defineProperty(l, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[n] = i, t.default = new S(o.default, {
  CLAN_SETTINGS_FETCH_START: function() {
    I = !1, _ = E(), T = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    _ = {
      ...E(),
      ...t
    }
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    for (let e in _ = {
        ..._,
        ...t
      }, t) delete T[e], T = {
      ...T
    }
  },
  CLAN_SETTINGS_SUBMIT: function() {
    I = !0, T = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    I = !1, T = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    I = !1, T = {
      gameApplicationIds: t.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: t.getFirstFieldErrorMessage("play_style"),
      description: t.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: t.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: t.getFirstFieldErrorMessage("search_terms"),
      tag: t.getFirstFieldErrorMessage("tag")
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t
    } = e;
    if (null == _.verificationForm) return !1;
    _ = {
      ..._,
      verificationForm: {
        ..._.verificationForm,
        ...t
      }
    }
  }
})