"use strict";
n.r(t), n.d(t, {
  useClanSetupModalNavigation: function() {
    return i
  }
});
var a = n("470079"),
  s = n("246364"),
  l = n("308083");

function i(e) {
  let {
    progress: t,
    updateCurrentStep: n
  } = e, {
    currentStep: i,
    gameApplicationIds: r,
    playstyle: o,
    interests: u,
    description: d,
    tag: c,
    verificationForm: f
  } = t, E = a.useMemo(() => null != f && f.formFields.some(e => !(0, s.isTermsFormField)(e)), [f]), h = a.useMemo(() => Array.from(u).filter(e => !l.ALL_TRAITS_SET.has(e) && !l.LANGUAGES_SET.has(e)), [u]), _ = a.useCallback(() => {
    n(i + 1)
  }, [i, n]), C = a.useCallback(() => {
    n(i - 1)
  }, [i, n]), m = a.useCallback(e => n(e), [n]), S = a.useMemo(() => {
    switch (i) {
      case l.ClanSetupSteps.GAMES:
        return 0 === r.size;
      case l.ClanSetupSteps.PLAYSTYLE:
        return o === l.ClanPlaystyles.NONE;
      case l.ClanSetupSteps.INTERESTS:
        return h.length < 3;
      case l.ClanSetupSteps.DESCRIPTION:
        return 0 === d.length;
      case l.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
        return c.length < 2;
      case l.ClanSetupSteps.MEMBER_APPLICATION:
        return !E;
      default:
        return !1
    }
  }, [i, d.length, r.size, E, h.length, o, c.length]), p = 0 === i;
  return a.useMemo(() => ({
    onStepClick: m,
    onNextClick: _,
    onBackClick: C,
    isNextDisabled: S,
    isBackDisabled: p
  }), [p, S, C, _, m])
}