"use strict";
s.r(t), s.d(t, {
  DEFAULT_CLAN_PROGRESS: function() {
    return d
  }
}), s("47120");
var E, _ = s("392711"),
  a = s.n(_),
  n = s("442837"),
  T = s("570140"),
  i = s("944163"),
  u = s("709054"),
  A = s("116175"),
  l = s("308083");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let r = new Map,
  o = new Map,
  L = !1,
  d = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: l.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [l.EMPTY_WILDCARD, l.EMPTY_WILDCARD, l.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...i.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: A.ClanBadgeKind.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: l.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: l.ClanSetupSteps.GAMES,
    furthestStep: l.ClanSetupSteps.GAMES,
    badgeImage: "",
    requiredGameId: void 0
  });

function S(e) {
  var t;
  return null !== (t = r.get(e)) && void 0 !== t ? t : a().cloneDeep(d)
}

function N(e, t) {
  let s = S(e);
  r.set(e, {
    ...s,
    ...t
  });
  let E = o.get(e);
  if (null != E) {
    let s = {
      ...E
    };
    Object.keys(t).forEach(e => {
      delete s[e]
    }), o.set(e, s)
  }
}
class g extends(E = n.default.PersistedStore) {
  initialize(e) {
    null != e && u.default.keys(e.progressByGuild).forEach(t => {
      var s, E, _, a, n;
      r.set(t, (s = e.progressByGuild[t], {
        gameApplicationIds: new Set(s.gameApplicationIds),
        playstyle: s.playstyle,
        interests: new Set(s.interests),
        description: s.description,
        wildcardDescriptors: null !== (E = s.wildcardDescriptors) && void 0 !== E ? E : [l.EMPTY_WILDCARD, l.EMPTY_WILDCARD, l.EMPTY_WILDCARD],
        tag: s.tag,
        verificationForm: null !== (_ = s.verificationForm) && void 0 !== _ ? _ : {
          ...i.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (a = s.badgeKind) && void 0 !== a ? a : A.ClanBadgeKind.SWORD,
        badgePrimaryColor: s.badgePrimaryColor,
        badgeSecondaryColor: s.badgeSecondaryColor,
        banner: null !== (n = s.banner) && void 0 !== n ? n : l.ClanBannerKind.NIGHT_SKY,
        brandPrimaryColor: s.brandPrimaryColor,
        brandSecondaryColor: s.brandSecondaryColor,
        currentStep: s.currentStep,
        furthestStep: s.furthestStep,
        requiredGameId: s.requiredGameId,
        badgeImage: s.badgeImage
      }))
    })
  }
  getState() {
    let e = {};
    return r.forEach((t, s) => {
      var E;
      e[s] = {
        gameApplicationIds: Array.from((E = t).gameApplicationIds),
        playstyle: E.playstyle,
        interests: Array.from(E.interests),
        description: E.description,
        wildcardDescriptors: E.wildcardDescriptors,
        tag: E.tag,
        verificationForm: E.verificationForm,
        badgeKind: E.badgeKind,
        badgePrimaryColor: E.badgePrimaryColor,
        badgeSecondaryColor: E.badgeSecondaryColor,
        banner: E.banner,
        brandPrimaryColor: E.brandPrimaryColor,
        brandSecondaryColor: E.brandSecondaryColor,
        currentStep: E.currentStep,
        furthestStep: E.furthestStep,
        requiredGameId: E.requiredGameId,
        badgeImage: E.badgeImage
      }
    }), {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: r.get(e),
      errors: o.get(e),
      submitting: L
    }
  }
  getGuildIds() {
    return [...r.keys()]
  }
}
I(g, "displayName", "ClanSetupStore"), I(g, "persistKey", "ClanSetupStore"), t.default = new g(T.default, {
  CLAN_SETUP_RESET: function() {
    r.clear(), o.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: s
    } = e;
    N(t, s)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, o.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    L = !1, r.delete(t), o.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: s
    } = e;
    L = !1, o.set(t, {
      gameApplicationIds: s.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: s.getFirstFieldErrorMessage("play_style"),
      description: s.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: s.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: s.getFirstFieldErrorMessage("search_terms"),
      tag: s.getFirstFieldErrorMessage("tag")
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: s,
      guildId: E,
      isLocalUpdate: _
    } = e;
    _ && (t = null == s ? i.NO_MEMBER_VERIFICATION_FORM : {
      ...S(E).verificationForm,
      ...s
    }, N(E, {
      verificationForm: t
    }))
  }
})