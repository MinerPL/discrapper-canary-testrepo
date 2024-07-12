n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(470079),
  s = n(246364),
  a = n(308083);

function r(e) {
  let {
progress: t,
updateCurrentStep: n
  } = e, {
currentStep: r,
gameApplicationIds: l,
playstyle: o,
interests: c,
description: d,
tag: u,
verificationForm: _
  } = t, h = i.useMemo(() => null != _ && _.formFields.some(e => !(0, s.J)(e)), [_]), E = i.useMemo(() => Array.from(c).filter(e => !a.WZ.has(e) && !a.gh.has(e)), [c]), I = i.useCallback(() => {
n(r + 1);
  }, [
r,
n
  ]), m = i.useCallback(() => {
n(r - 1);
  }, [
r,
n
  ]), g = i.useCallback(e => n(e), [n]), p = i.useMemo(() => {
switch (r) {
  case a.Wy.GAMES:
    return 0 === l.size;
  case a.Wy.PLAYSTYLE:
    return o === a.zv.NONE;
  case a.Wy.INTERESTS:
    return E.length < 3;
  case a.Wy.DESCRIPTION:
    return 0 === d.length;
  case a.Wy.CUSTOMIZE_TAG_BADGE:
    return u.length < 2;
  case a.Wy.MEMBER_APPLICATION:
    return !h;
  default:
    return !1;
}
  }, [
r,
d.length,
l.size,
h,
E.length,
o,
u.length
  ]), T = 0 === r;
  return i.useMemo(() => ({
onStepClick: g,
onNextClick: I,
onBackClick: m,
isNextDisabled: p,
isBackDisabled: T
  }), [
T,
p,
m,
I,
g
  ]);
}