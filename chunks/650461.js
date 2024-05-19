"use strict";
s.r(t), s.d(t, {
  useDefaultClanProgress: function() {
    return g
  }
}), s("47120");
var E, _ = s("470079"),
  a = s("392711"),
  n = s.n(a),
  T = s("442837"),
  i = s("570140"),
  u = s("944163"),
  A = s("709054"),
  l = s("116175"),
  I = s("308083");

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let o = new Map,
  L = new Map,
  d = !1,
  N = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: I.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [I.EMPTY_WILDCARD, I.EMPTY_WILDCARD, I.EMPTY_WILDCARD],
    tag: "",
    verificationForm: {
      ...u.NO_MEMBER_VERIFICATION_FORM
    },
    badgeKind: l.ClanBadgeKind.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: I.ClanBannerKind.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: I.ClanSetupSteps.GAMES,
    furthestStep: I.ClanSetupSteps.GAMES,
    badgeImage: "",
    requiredGameId: void 0
  });

function S() {
  let e = n().cloneDeep(N);
  return e.badgeKind = (0, l.getRandomClanBadgeKind)(), e.banner = (0, I.getRandomClanBannerKind)(), e
}

function g() {
  return _.useState(() => S())[0]
}

function D(e) {
  var t;
  return null !== (t = o.get(e)) && void 0 !== t ? t : S()
}

function c(e, t) {
  let s = D(e);
  o.set(e, {
    ...s,
    ...t
  });
  let E = L.get(e);
  if (null != E) {
    let s = {
      ...E
    };
    Object.keys(t).forEach(e => {
      delete s[e]
    }), L.set(e, s)
  }
}
class G extends(E = T.default.PersistedStore) {
  initialize(e) {
    null != e && A.default.keys(e.progressByGuild).forEach(t => {
      var s, E, _, a, n;
      o.set(t, (s = e.progressByGuild[t], {
        gameApplicationIds: new Set(s.gameApplicationIds),
        playstyle: s.playstyle,
        interests: new Set(s.interests),
        description: s.description,
        wildcardDescriptors: null !== (E = s.wildcardDescriptors) && void 0 !== E ? E : [I.EMPTY_WILDCARD, I.EMPTY_WILDCARD, I.EMPTY_WILDCARD],
        tag: s.tag,
        verificationForm: null !== (_ = s.verificationForm) && void 0 !== _ ? _ : {
          ...u.NO_MEMBER_VERIFICATION_FORM
        },
        badgeKind: null !== (a = s.badgeKind) && void 0 !== a ? a : l.ClanBadgeKind.SWORD,
        badgePrimaryColor: s.badgePrimaryColor,
        badgeSecondaryColor: s.badgeSecondaryColor,
        banner: null !== (n = s.banner) && void 0 !== n ? n : I.ClanBannerKind.NIGHT_SKY,
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
    return o.forEach((t, s) => {
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
      progress: o.get(e),
      errors: L.get(e),
      submitting: d
    }
  }
  getGuildIds() {
    return [...o.keys()]
  }
}
r(G, "displayName", "ClanSetupStore"), r(G, "persistKey", "ClanSetupStore"), t.default = new G(i.default, {
  CLAN_SETUP_RESET: function() {
    o.clear(), L.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: s
    } = e;
    c(t, s)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    d = !0, L.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    d = !1, o.delete(t), L.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: s
    } = e;
    d = !1, L.set(t, {
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
    _ && (t = null == s ? u.NO_MEMBER_VERIFICATION_FORM : {
      ...D(E).verificationForm,
      ...s
    }, c(E, {
      verificationForm: t
    }))
  }
})