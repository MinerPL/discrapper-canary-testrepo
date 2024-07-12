t.d(n, {
  Z: function() {
return r;
  }
}), t(653041);
var l = t(470079),
  a = t(399606),
  i = t(45966);

function r(e) {
  let n = (0, a.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
  return l.useMemo(() => {
let e = 0,
  t = [],
  l = [],
  a = [],
  i = [];
for (var r = 0; r < n.length; r++) {
  let s = n[r];
  s.isNew ? t.push(s) : s.hasNewAnswers ? (l.push(s), e += s.options.filter(e => e.isUnseen).length) : s.inOnboarding ? i.push(s) : a.push(s);
}
return {
  onboardingPromptsRaw: n,
  newOnboardingPrompts: t,
  onboardingPromptsWithNewAnswers: l,
  newAnswersCount: e,
  onboardingPrompts: a.concat(i)
};
  }, [n]);
}