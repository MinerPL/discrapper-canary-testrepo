"use strict";
n.r(t), n.d(t, {
  setOnboardingStep: function() {
    return g
  },
  dismissEducationUpsell: function() {
    return G
  },
  toggleAdvancedSettings: function() {
    return h
  },
  goToNextOnboardingStep: function() {
    return L
  },
  goToPrevOnboardingStep: function() {
    return R
  },
  startPreview: function() {
    return p
  }
}), n("222007");
var a = n("913144"),
  l = n("404118"),
  s = n("599417"),
  i = n("863636"),
  r = n("471706"),
  d = n("380710"),
  o = n("937692"),
  u = n("233706"),
  N = n("479756"),
  c = n("507950"),
  _ = n("42203"),
  I = n("305961"),
  E = n("449008"),
  f = n("592407"),
  O = n("653274"),
  S = n("330724"),
  T = n("259483"),
  m = n("724210"),
  D = n("653138"),
  A = n("782340");

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
    } = null !== (N = new(0, s.default)(n).getAnyErrorMessageAndField()) && void 0 !== N ? N : {};
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