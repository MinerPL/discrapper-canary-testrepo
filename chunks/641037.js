"use strict";
n.r(t), n.d(t, {
  getClanSetupProgressSteps: function() {
    return o
  },
  submitClanSetup: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("931240"),
  i = n("308083"),
  r = n("689938");

function o(e) {
  return [{
    index: i.ClanSetupSteps.GAMES,
    name: r.default.Messages.CLAN_SETUP_GAMES_STEP,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    index: i.ClanSetupSteps.PLAYSTYLE,
    name: r.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    index: i.ClanSetupSteps.UTILITY_TRAITS,
    name: r.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }, {
    index: i.ClanSetupSteps.INTERESTS,
    name: r.default.Messages.CLAN_SETUP_INTERESTS_STEP,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    index: i.ClanSetupSteps.DESCRIPTION,
    name: r.default.Messages.CLAN_SETUP_DESCRIPTION_STEP,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    index: i.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    name: r.default.Messages.CLAN_SETUP_TAG_STEP,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    index: i.ClanSetupSteps.CUSTOMIZE_BANNER,
    name: r.default.Messages.CLAN_SETUP_BANNER_STEP,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    index: i.ClanSetupSteps.MEMBER_APPLICATION,
    name: r.default.Messages.CLAN_SETUP_APPLICATIONS_STEP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }]
}
async function u(e) {
  let {
    guildId: t,
    onSuccess: i,
    progress: r
  } = e;
  try {
    await l.convertGuildToClan(t, r)
  } catch (e) {
    return
  }
  i(), (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("63636")]).then(n.bind(n, "511385"));
    return n => (0, a.jsx)(e, {
      guildId: t,
      tag: r.tag,
      brandPrimaryColor: r.brandPrimaryColor,
      ...n
    })
  })
}