n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(726542),
  s = n(906732),
  o = n(231757),
  l = n(553795),
  u = n(475413),
  c = n(981631),
  d = n(689938);

function _(e) {
  let {
platformType: t,
icon: n,
onAction: _
  } = e, {
newestAnalyticsLocation: E
  } = (0, s.ZP)();
  return (0, i.e7)([l.Z], () => null != l.Z.getAccount(null, t)) ? null : (0, r.jsx)(u.tG, {
icon: n,
text: d.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
  platform: a.Z.get(t).name
}),
fullWidth: !0,
onClick: () => {
  let e = t === c.ABu.XBOX;
  null == _ || _({
    action: e ? 'PRESS_CONNECT_XBOX_BUTTON' : 'PRESS_CONNECT_PLAYSTATION_BUTTON'
  }), (0, o.Z)({
    platformType: t,
    location: E
  });
}
  });
}