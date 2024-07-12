n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(231757),
  o = n(553795),
  s = n(915863),
  l = n(689938),
  u = n(451016);

function c(e) {
  let {
platform: t,
color: n,
look: c,
onAction: d,
Icon: _
  } = e;
  if ((0, i.e7)([o.Z], () => o.Z.getAccounts().some(e => e.type === t.type)))
return null;
  let E = null != _ ? (0, r.jsx)(_, {
className: u.platformIcon
  }) : (0, r.jsx)('img', {
alt: '',
className: u.platformIcon,
src: t.icon.whiteSVG
  });
  return (0, r.jsx)(s.Z, {
onClick: () => {
  null == d || d(), (0, a.Z)({
    platformType: t.type,
    location: 'Activity Action'
  });
},
color: n,
look: c,
fullWidth: !0,
children: (0, r.jsxs)('div', {
  className: u.flex,
  children: [
    E,
    l.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
      platform: t.name
    })
  ]
})
  }, 'connect-platform-activity');
}