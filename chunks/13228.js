n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(442837),
  s = n(594190),
  a = n(836157),
  r = n(480294),
  l = n(131951),
  o = n(924557),
  c = n(435064),
  d = n(779618),
  u = n(356659),
  _ = n(981631);

function h(e) {
  let t = (0, o.nM)({
  autoTrackExposure: !0
}),
{
  enableDecoupledGameClipping: n
} = a.Z.useExperiment({
  location: 'useShouldDisplayClipsGuildSidebarEducation'
}, {
  autoTrackExposure: !1
});
  return (0, i.e7)([
c.Z,
s.ZP,
r.Z,
l.Z
  ], () => {
if (!(0, d.Z)(l.Z) || !t || !n)
  return !1;
if (null != c.Z.getLastClipsError())
  return !0;
if (!r.Z.hasConsented(_.pjP.PERSONALIZATION) || null == s.ZP.getVisibleGame())
  return !1;
let {
  clipsEducationState: {
    dismissedAt: i,
    numberOfGamesLaunchedSinceDismissal: a,
    numberOfTimesDismissed: h
  },
  hasTakenDecoupledClip: E,
  clipsSettings: {
    clipsEnabled: I
  }
} = c.Z.getState();
if (null === i)
  return !0;
if (!(null != e && (0, o.xt)(e)))
  return !1;
let m = Date.now() - i > u.xx,
  g = a >= u._U,
  p = I ? u.xd : u.A5;
return m && g && h < p && !E;
  });
}