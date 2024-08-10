n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(726542),
  s = n(906732),
  o = n(231757),
  l = n(553795),
  u = n(652853),
  c = n(475413),
  d = n(228168),
  _ = n(981631),
  E = n(689938);

function f(e) {
  let {
platformType: t,
icon: n,
onAction: f
  } = e, {
newestAnalyticsLocation: h
  } = (0, s.ZP)(), {
profileType: p
  } = (0, u.z)();
  return (0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t)) ? null : (0, r.jsx)(c.tG, {
icon: n,
text: E.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
  platform: a.Z.get(t).name
}),
themeColor: p === d.y0.FULL_SIZE ? 'secondary' : 'primary',
fullWidth: !0,
onClick: () => {
  let e = t === _.ABu.XBOX;
  null == f || f({
    action: e ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON'
  }), (0, o.Z)({
    platformType: t,
    location: h
  });
}
  });
}