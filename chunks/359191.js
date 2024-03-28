"use strict";
s.r(t), s("47120");
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("45966"),
  u = s("734893"),
  c = s("999382"),
  E = s("392885"),
  _ = s("740903"),
  I = s("889369"),
  T = s("969632"),
  S = s("208665"),
  f = s("84658"),
  m = s("142961"),
  N = s("981631");
let g = new Set,
  h = f.GuildSettingsOnboardingPage.LANDING,
  C = null;

function R(e) {
  let {
    subsection: t
  } = e;
  if (c.default.getGuildId() === C) return !1;
  h = t === N.GuildSettingsSubsections.SERVER_GUIDE ? f.GuildSettingsOnboardingPage.HOME_SETTINGS : f.GuildSettingsOnboardingPage.LANDING, C = c.default.getGuildId()
}
class x extends(a = r.default.Store) {
  initialize() {
    this.waitFor(d.default, I.default, S.default, T.default, E.default), this.syncWith([d.default, I.default, S.default, T.default, E.default], () => !0)
  }
  isEducationUpsellDismissed(e) {
    return g.has(e)
  }
  getCurrentPage() {
    return h
  }
  hasChanges() {
    if (null == C) return !1;
    let e = d.default.isAdvancedMode(C);
    if (h === f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return e ? I.default.hasChanges() || S.default.hasChanges() : I.default.hasChanges();
    if (h === f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return S.default.hasChanges();
    if (h === f.GuildSettingsOnboardingPage.HOME_SETTINGS) return T.default.hasChanges();
    return !1
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == C) return !1;
    if (h === f.GuildSettingsOnboardingPage.SAFETY_CHECK) return !0;
    if (h === f.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return I.default.editedDefaultChannelIds.size > 0;
    if (h === f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return S.default.editedOnboardingPrompts.length > 0;
    else if (h === f.GuildSettingsOnboardingPage.HOME_SETTINGS) return !(0, u.isSettingsEmpty)(T.default.getSettings());
    return !1
  }
  hasErrors() {
    return h === f.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS && null != S.default.errors.find(e => null != e)
  }
  showNotice() {
    if (null == C) return !1;
    if ((0, m.isOnboardingWizardCompleted)(C)) return this.hasChanges();
    let e = E.default.getCurrentPage();
    return (h !== f.GuildSettingsOnboardingPage.SAFETY_CHECK || e === _.GuildSettingsSafetyPage.OVERVIEW) && null != h && h !== f.GuildSettingsOnboardingPage.LANDING
  }
  canCloseEarly() {
    return null == C || !this.hasErrors() && (!(0, m.isOnboardingWizardCompleted)(C) || !this.hasChanges())
  }
}
i = "GuildSettingsOnboardingStore", (n = "displayName") in(l = x) ? Object.defineProperty(l, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[n] = i, t.default = new x(o.default, {
  GUILD_SETTINGS_INIT: R,
  GUILD_SETTINGS_SET_SECTION: R,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    h = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    g.add(t)
  }
})