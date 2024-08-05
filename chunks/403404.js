n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(424602),
  r = n(397698),
  l = n(776862),
  o = n(701488),
  c = n(981631);

function u(e) {
  let {
channel: t,
guildId: u,
locationObject: d,
openInPopout: _,
initialSelectedApplicationId: E,
initialSlide: I = o.ag.DIRECTORY,
enableSelectedTextChannelInvite: m = !1,
analyticsLocations: T,
opensAppLauncherModal: h = !1
  } = e, N = T.length > 0 ? T[T.length - 1] : 'open-activity-shelf', {
enabled: C
  } = a.m1.getCurrentConfig({
location: N
  }, {
autoTrackExposure: !1
  });
  if (h && C) {
null != t && (0, r.Z)({
  openInPopout: _,
  channel: t,
  analyticsLocation: N
});
return;
  }
  _ && (0, l.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let f = _ ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  return (0, s.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('64714'),
  n.e('6495')
]).then(n.bind(n, 471840));
return n => (0, i.jsx)(e, {
  ...n,
  channel: t,
  guildId: u,
  locationObject: d,
  initialSlide: I,
  initialSelectedApplicationId: E,
  enableSelectedTextChannelInvite: m,
  analyticsLocations: T
});
  }, {
modalKey: o.AC,
contextKey: f
  });
}