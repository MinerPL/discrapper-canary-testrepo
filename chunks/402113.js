n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(513202),
  s = n(871499),
  o = n(689938);

function l(e) {
  let {
channelId: t,
applicationId: n,
centerButton: l = !1,
...u
  } = e, c = l ? s.d : s.Z;
  return (0, r.jsx)(c, {
...u,
onClick: () => {
  a.Z.leaveActivity({
    channelId: t,
    applicationId: n,
    showFeedback: !0
  });
},
iconComponent: i.DoorExitIcon,
label: o.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
  });
}