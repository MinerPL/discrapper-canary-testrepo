"use strict";
n.r(t), n.d(t, {
  dismissEducationUpsell: function() {
    return G
  },
  goToNextOnboardingStep: function() {
    return L
  },
  goToPrevOnboardingStep: function() {
    return R
  },
  setOnboardingStep: function() {
    return g
  },
  startPreview: function() {
    return p
  },
  toggleAdvancedSettings: function() {
    return h
  }
}), n("47120");
var a = n("570140"),
  l = n("668781"),
  s = n("479531"),
  i = n("45966"),
  r = n("819553"),
  d = n("637853"),
  o = n("17181"),
  u = n("621923"),
  N = n("962086"),
  c = n("225675"),
  _ = n("592125"),
  I = n("430824"),
  E = n("823379"),
  f = n("434404"),
  O = n("889369"),
  S = n("570961"),
  T = n("84658"),
  m = n("176505"),
  D = n("290511"),
  A = n("689938");

function g(e) {
  a.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_STEP",
    step: e
  })
}

function G(e) {
  null != e && a.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
    upsellType: e
  })
}
async function h(e, t) {
  let n = i.default.getEnabled(e),
    r = Array.from(O.default.editedDefaultChannelIds).filter(e => null != _.default.getChannel(e)),
    [o, u] = (0, d.getChattableDefaultChannels)(e, [...r]);
  if (n && t === D.GuildOnboardingMode.ONBOARDING_DEFAULT && (u.length < D.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || o.length < D.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN)) {
    l.default.show({
      title: A.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: A.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
    });
    return
  }
  try {
    await (0, S.editOnboarding)(e, {
      mode: t
    })
  } catch (n) {
    var N;
    let {
      fieldName: e,
      error: t
    } = null !== (N = new s.default(n).getAnyErrorMessageAndField()) && void 0 !== N ? N : {};
    l.default.show({
      title: A.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: [e, t].filter(E.isNotNullish).join(": ")
    })
  }
  a.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
    guildId: e,
    mode: t
  })
}

function L(e, t) {
  let {
    homeSettingsEnabled: n
  } = (0, u.getOnboardingHomeAdminExperiment)(e), a = T.ONBOARDING_STEPS.findIndex(e => e === t);
  if (-1 !== a && a !== T.ONBOARDING_STEPS.length - 1) {
    if (!n && T.ONBOARDING_STEPS[a + 1] === T.GuildSettingsOnboardingPage.HOME_SETTINGS) {
      g(T.ONBOARDING_STEPS[a + 2]);
      return
    }
    g(T.ONBOARDING_STEPS[a + 1])
  }
}

function R(e, t) {
  let {
    homeSettingsEnabled: n
  } = (0, u.getOnboardingHomeAdminExperiment)(e), a = T.ONBOARDING_STEPS.findIndex(e => e === t);
  if (-1 !== a && 0 !== a) {
    if (!n && T.ONBOARDING_STEPS[a - 1] === T.GuildSettingsOnboardingPage.HOME_SETTINGS) {
      g(T.ONBOARDING_STEPS[a - 2]);
      return
    }
    g(T.ONBOARDING_STEPS[a - 1])
  }
}
async function p(e) {
  let t = I.default.getGuild(e);
  null != t && (f.default.close(), (0, N.startImpersonating)(t.id, {
    type: c.ImpersonateType.NEW_MEMBER,
    roles: {},
    optInChannels: new Set,
    optInEnabled: !1,
    onboardingResponses: new Set,
    onboardingEnabled: !0,
    memberOptions: {
      isPending: t.hasVerificationGate(),
      flags: 0
    }
  }), r.default.resetOnboardingStatus(t.id), (0, o.discardOnboardingPromise)(t.id), await (0, o.default)({
    guildId: t.id,
    isPreview: !0,
    returnChannelId: m.StaticChannelRoute.GUILD_HOME
  }))
}