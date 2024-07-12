n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(566620),
  o = n(871499),
  s = n(689938);

function l(e) {
  let {
channelId: t,
applicationId: n,
centerButton: l = !1,
...u
  } = e, c = l ? o.d : o.Z;
  return (0, r.jsx)(c, {
...u,
onClick: () => {
  (0, a.mW)({
    channelId: t,
    applicationId: n
  });
},
iconComponent: i.DoorExitIcon,
label: s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
  });
}