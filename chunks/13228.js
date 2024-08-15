n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(442837),
  a = n(594190),
  s = n(836157),
  r = n(480294),
  l = n(131951),
  o = n(924557),
  c = n(435064),
  d = n(779618),
  u = n(356659),
  _ = n(981631);

function E(e) {
  let t = (0, o.nM)({
  autoTrackExposure: !0
}),
{
  enableDecoupledGameClipping: n
} = s.Z.useExperiment({
  location: 'useShouldDisplayClipsGuildSidebarEducation'
}, {
  autoTrackExposure: !1
});
  return (0, i.e7)([
c.Z,
a.ZP,
r.Z,
l.Z
  ], () => {
if (!(0, d.Z)(l.Z) || !t || !n)
  return !1;
if (null != c.Z.getLastClipsError())
  return !0;
if (!r.Z.hasConsented(_.pjP.PERSONALIZATION) || null == a.ZP.getVisibleGame())
  return !1;
let {
  clipsEducationState: {
    dismissedAt: i,
    numberOfGamesLaunchedSinceDismissal: s,
    numberOfTimesDismissed: E
  },
  hasTakenDecoupledClip: h,
  clipsSettings: {
    clipsEnabled: m
  }
} = c.Z.getState();
if (null === i)
  return !0;
if (!(null != e && (0, o.xt)(e)))
  return !1;
let I = Date.now() - i > u.xx,
  g = s >= u._U,
  p = m ? u.xd : u.A5;
return I && g && E < p && !h;
  });
}