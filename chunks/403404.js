n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(424602),
  r = n(397698),
  l = n(776862),
  o = n(701488),
  c = n(981631);

function d(e) {
  let {
channel: t,
guildId: d,
locationObject: u,
openInPopout: _,
initialSelectedApplicationId: E,
initialSlide: I = o.ag.DIRECTORY,
enableSelectedTextChannelInvite: m = !1,
analyticsLocations: T,
opensAppLauncherModal: h = !1
  } = e, N = T.length > 0 ? T[T.length - 1] : 'open-activity-shelf', {
enabled: f
  } = s.m1.getCurrentConfig({
location: N
  }, {
autoTrackExposure: !1
  });
  if (h && f) {
null != t && (0, r.Z)({
  openInPopout: _,
  channel: t,
  analyticsLocation: N
});
return;
  }
  _ && (0, l.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let p = _ ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, a.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('64714'),
  n.e('6495')
]).then(n.bind(n, 471840));
return n => (0, i.jsx)(e, {
  ...n,
  channel: t,
  guildId: d,
  locationObject: u,
  initialSlide: I,
  initialSelectedApplicationId: E,
  enableSelectedTextChannelInvite: m,
  analyticsLocations: T
});
  }, {
modalKey: o.AC,
contextKey: p
  });
}