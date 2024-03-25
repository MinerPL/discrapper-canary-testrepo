"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("446674"),
  l = s("913144"),
  n = s("863636"),
  i = s("129092"),
  r = s("900938"),
  o = s("353830"),
  d = s("772871"),
  u = s("653274"),
  c = s("642807"),
  E = s("136278"),
  _ = s("259483"),
  I = s("867928"),
  T = s("49111");
let S = new Set,
  f = _.GuildSettingsOnboardingPage.LANDING,
  m = null;

function N(e) {
  let {
    subsection: t
  } = e;
  if (r.default.getGuildId() === m) return !1;
  f = t === T.GuildSettingsSubsections.SERVER_GUIDE ? _.GuildSettingsOnboardingPage.HOME_SETTINGS : _.GuildSettingsOnboardingPage.LANDING, m = r.default.getGuildId()
}
class g extends a.default.Store {
  initialize() {
    this.waitFor(n.default, u.default, E.default, c.default, o.default), this.syncWith([n.default, u.default, E.default, c.default, o.default], () => !0)
  }
  isEducationUpsellDismissed(e) {
    return S.has(e)
  }
  getCurrentPage() {
    return f
  }
  hasChanges() {
    if (null == m) return !1;
    let e = n.default.isAdvancedMode(m);
    if (f === _.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return e ? u.default.hasChanges() || E.default.hasChanges() : u.default.hasChanges();
    if (f === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return E.default.hasChanges();
    if (f === _.GuildSettingsOnboardingPage.HOME_SETTINGS) return c.default.hasChanges();
    return !1
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == m) return !1;
    if (f === _.GuildSettingsOnboardingPage.SAFETY_CHECK) return !0;
    if (f === _.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return u.default.editedDefaultChannelIds.size > 0;
    if (f === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return E.default.editedOnboardingPrompts.length > 0;
    else if (f === _.GuildSettingsOnboardingPage.HOME_SETTINGS) return !(0, i.isSettingsEmpty)(c.default.getSettings());
    return !1
  }
  hasErrors() {
    return f === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS && null != E.default.errors.find(e => null != e)
  }
  showNotice() {
    if (null == m) return !1;
    if ((0, I.isOnboardingWizardCompleted)(m)) return this.hasChanges();
    let e = o.default.getCurrentPage();
    return (f !== _.GuildSettingsOnboardingPage.SAFETY_CHECK || e === d.GuildSettingsSafetyPage.OVERVIEW) && null != f && f !== _.GuildSettingsOnboardingPage.LANDING
  }
  canCloseEarly() {
    return null == m || !this.hasErrors() && (!(0, I.isOnboardingWizardCompleted)(m) || !this.hasChanges())
  }
}
g.displayName = "GuildSettingsOnboardingStore";
var h = new g(l.default, {
  GUILD_SETTINGS_INIT: N,
  GUILD_SETTINGS_SET_SECTION: N,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    f = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    S.add(t)
  }
})