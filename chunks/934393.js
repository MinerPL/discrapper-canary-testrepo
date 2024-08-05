n.d(t, {
  Z: function() {
return E;
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
  _ = n(689938);

function E(e) {
  let {
platformType: t,
icon: n,
onClick: E
  } = e, {
newestAnalyticsLocation: f
  } = (0, s.ZP)(), {
profileType: h
  } = (0, u.z)();
  return (0, i.e7)([l.Z], () => l.Z.getAccounts().some(e => {
let {
  type: n
} = e;
return n === t;
  })) ? null : (0, r.jsx)(c.tG, {
icon: n,
text: _.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
  platform: a.Z.get(t).name
}),
themeColor: h === d.y0.FULL_SIZE ? 'secondary' : 'primary',
fullWidth: !0,
onClick: e => {
  null == E || E(e), (0, o.Z)({
    platformType: t,
    location: f
  });
}
  });
}